# election library -- a ruby library for elections
# copyright © 2005 MIT Media Lab and Benjamin Mako Hill

# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
# General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
# 02110-1301, USA.

#################################################################
## ==== election.rb ====
##
## This file contains the core ElectionVote and ElectionResults
## classes and the most common and simple election methods including
## plurality and approval voting.
#################################################################

##################################################################
## ElectionVote Classes and SubClasses
##
## There classes are used to store, verify, and "tally" (i.e. count
## votes for the standard Election superclass and for the most common
## types of elections.

class ElectionVote
  attr_reader :votes
  attr_reader :candidates

  def initialize(votes=nil)
    @votes = Hash.new unless defined?(@votes)
    @candidates = Array.new unless defined?(@candidates)

    if votes
      if votes.instance_of?( Array )
        votes.each do |vote|
          if self.verify_vote(vote)
            self.tally_vote(vote)
          else
            raise InvalidVoteError.new("Invalid vote object", vote)
          end
        end
      else
        raise ElectionError, "Votes must be in the form of an array.", caller
      end
    end
  end

  protected
  # by default, this is set to look if the vote is defined. it should
  # be overridden in each class
  def verify_vote(vote=nil)
    vote ? true : false
  end

  # by default, this does nothing. it must be redefined in any subclass
  def tally_vote(vote)
    self.verify_vote(vote)
  end

end

class PluralityVote < ElectionVote
  def result
    PluralityResult.new(self)
  end
  
  protected
  def verify_vote(vote=nil)
    vote ? true : false
  end

  def tally_vote(candidate)
    if @votes.has_key?(candidate)
      @votes[candidate] += 1
    else
      @votes[candidate] = 1
      @candidates << candidate
    end
  end
end

class ApprovalVote < PluralityVote
  def result
    ApprovalResult.new(self)
  end

  protected
  def verify_vote(vote=nil)
    vote.instance_of?( Array ) and vote.length >= 1
  end

  def tally_vote(approvals)
    approvals.each {|candidate| super(candidate)}
  end
end


##################################################################
## Election Result Classes
##

# ElectionResult and its subclasses are used to identify and report the results
# of an election. In almost all cases, these will be returned by the #results
# method of a corresponding ElectionVote subclass.
#
# Each ElectionResult object has the following methods:
#
#  * #winner? -- return Boolean as to the winner or winners of an election
#  * #winners -- an array of winners of the election
#  * #ranked_candidates -- (where available) a list of ranked candidates
class ElectionResult
  attr_reader :winners
  attr_reader :election

  def initialize(voteobj=nil)
    unless voteobj and voteobj.kind_of?( ElectionVote )
      raise ArgumentError, "You must pass a ElectionVote array.", caller
    end

    @election = voteobj
    @winners = Array.new
  end

  def winner
    @winners[0] if @winners.length > 0
  end

  def winner?
    @winners.length > 0 and not @winners[0].nil?
  end
  
end

class PluralityResult < ElectionResult
  attr_reader :ranked_candidates
  attr_reader :points
  
  def initialize(voteobj=nil)
    super(voteobj)

    votes = @election.votes
    candidates = @election.candidates
    
    @ranked_candidates = votes.sort do |a, b|
      b[1] <=> a[1]
    end.collect {|a| a[0]}
    
    @points = @election.votes
    
    # winners are anyone who has the same number of votes as the
    # first person
    @winners = @ranked_candidates.find_all do |i|
      votes[i] == votes[@ranked_candidates[0]]
    end
  end
end

# this class is complete because results for approval are computed
# identically to results from plurality
class ApprovalResult < PluralityResult
end
  
class ElectionError < ArgumentError
end

class InvalidVoteError < ElectionError
  attr_accessor :voteobj
  def initialize(msg=nil, voteobj=nil)
    super(msg)
    @voteobj=voteobj
  end
end

# IRV is a preferential voting system used widely for government elections
# in Australia and New Zealand and elsewhere. IRV asks voters to rank
# candidates in preference and then holds a series of "runoff" elections
# by eliminating the weakest candidate and recomputing the election
# results until there exists a candidate who has a majority of the
# remaining votes.

# Example::

#   require 'irv'
#   vote_array = [ ["A", "B"],  ["B", "A"], ["B", "A"] ]
#   resultobject = InstantRunoffVote.new(vote_array).result
#
class InstantRunoffVote < ElectionVote

  def initialize(votes=nil)
    @candidates = Array.new
    votes.each do |vote|
      @candidates = vote.uniq if vote.uniq.length > candidates.length
    end
    super(votes)
    @candidates.each do |candidate|
      @votes[candidate] = [0, Hash.new] unless @votes.has_key?(candidate)
    end
  end

  def result(params={})
    InstantRunoffResult.new(self, params)
  end
  
  protected
    def vote_valid?(vote = nil)
      super && vote.is_a?(Array) && vote == vote.uniq
    end

    def tally_vote(vote)
      votecopy = vote.dup
      candidate = votecopy.shift
      votes[candidate] = [0, Hash.new] unless votes.has_key?(candidate)
      votes[candidate][0] += 1
      if votes[candidate][1].has_key?(votecopy)
        votes[candidate][1][votecopy] += 1
      else
        votes[candidate][1][votecopy] = 1
      end
    end

end

class InstantRunoffLogicVote < InstantRunoffVote
  def result(params={})
    InstantRunoffLogicResult.new(self, params)
  end
end

class InstantRunoffFirstRoundVote < InstantRunoffVote
  def result(params={})
    InstantRunoffFirstRoundResult.new(self, params)
  end
end

class InstantRunoffAllVote < InstantRunoffVote
  def result(params={})
    InstantRunoffAllResult.new(self, params)
  end
end

class InstantRunoffRandomVote < InstantRunoffVote
  def result(params={})
    InstantRunoffRandomResult.new(self, params)
  end
end

class InstantRunoffResult < ElectionResult
  attr_reader :ranked_candidates

  def initialize(voteobj=nil, params={})
    unless voteobj and voteobj.kind_of?( InstantRunoffVote )
      raise ArgumentError, "You must pass an InstantRunoffVote array.", caller
    end
    super(voteobj)

    votes = @election.votes.clone
    candidates = @election.candidates
    votes_sum = votes.inject(0) {|n, value| n + value[1][0]}
    @majority = votes_sum/2 + 1
    @ranked_candidates = Array.new()
    ranked_candidates = Array.new()
    losers = Array.new()

    if params.has_key?('candidate_count')
      apply_candidate_count(votes, params['candidate_count'])
    end
    if params.has_key?('vote_minimum')
      apply_vote_minimum(votes, params['vote_minimum'])
    end
    if params.has_key?('percent_minimum')
      apply_vote_minimum(votes, votes_sum * params['percent_minimum'])
    end
    if params.has_key?('percent_retention')
      apply_retention(votes, votes_sum * params['percent_retention'])
    end
    
    unless votes.length > 0
      @winners=[]
      return
    end

    begin
      ranked_candidates = votes.sort do |a, b|
        b[1][0] <=> a[1][0]
      end.collect {|i| i[0]}
      @winners = ranked_candidates.find_all do |i|
        votes[i][0] >= @majority
      end
    end while not self.winner? and next_round(votes, ranked_candidates)
    @ranked_candidates.unshift(*ranked_candidates)
  end

protected
  def apply_candidate_count(votes, candidate_count)
    if votes.size > candidate_count
      losers = votes.sort do |a, b|
        b[1][0] <=> a[1][0]
      end.collect {|i| i[0]}.last(votes.size - candidate_count)
      @ranked_candidates.unshift(losers) unless losers.empty?
      losers.each { |loser| remove_candidate(votes, loser) }
    end
  end

  def apply_vote_minimum(votes, vote_minimum)
    losers = votes.find_all do |i|
      i[1][0] < vote_minimum
    end.collect {|i| i[0]}
    if losers.length == votes.size
      votes.clear
    else
      @ranked_candidates.unshift(losers) unless losers.empty?
      losers.each { |loser| remove_candidate(votes, loser) }
    end
  end

  def apply_retention(votes, retention)
    losers = votes.sort do |a, b|
      b[1][0] <=> a[1][0]
    end.collect {|i| i[0]}
    partial_sum = 0
    while partial_sum < retention
      partial_sum += votes[losers.shift][0]
    end
    @ranked_candidates.unshift(losers) unless losers.empty?
    losers.each { |loser| remove_candidate(votes, loser) }
  end
  
  def next_round(votes, ranked_candidates)
    loser = ranked_candidates[-1]
    # puts "votes: " + votes.inspect
    # puts "ranked_candidates: " + ranked_candidates.inspect
    # puts "loser: " + loser.inspect
    # puts "ranked_candidates[-2]: " + ranked_candidates[-2].inspect
    if votes.nil? or votes.empty? or votes[loser].nil? or ranked_candidates.nil? or votes[ranked_candidates[-2]].nil? or votes[loser][0] == votes[ranked_candidates[-2]][0]
      false
    else
      @ranked_candidates.unshift(loser)
      remove_candidate(votes, loser) 
      true
    end
  end

  def remove_candidate(votes, loser)
    votes.each_pair do |candidate, morevotes|
      hash = morevotes[1]
      hash.clone.each_pair do |vote, count|
        hash.delete(vote)
        vote.delete(loser)
        hash[vote] = count
      end
    end
    votes[loser][1].each_pair do |vote, count|
      candidate = vote.shift
      if candidate
          # puts "ok: " + votes.class.name
          # puts "votes: " + votes.inspect
          # puts "candidate: " + candidate.inspect
          # puts "votes[candidate]: " + votes[candidate].inspect

          # puts "votes[candidate][0]: " + votes[candidate][0].inspect


          if votes && candidate && !votes[candidate].nil? && votes[candidate][0] && votes[candidate][1] && count
            votes[candidate][0] += count
            if votes[candidate][1].has_key?(vote)
              votes[candidate][1][vote] += count
            else
              votes[candidate][1][vote] = count
            end
          end
        end
    end
    votes.delete(loser)
  end
end

class InstantRunoffLogicResult < InstantRunoffResult
  def next_round(votes, ranked_candidates)
    losers = ranked_candidates.find_all do |i|
      votes[i][0] == votes[ranked_candidates[-1]][0]
    end
    if losers.inject(0) {|n, loser| n + votes[loser][0]} >= @majority
      false
    else
      @ranked_candidates.unshift(losers)
      losers.each do |loser|
        remove_candidate(votes, loser)
      end
      true
    end
  end
end

class InstantRunoffFirstRoundResult < InstantRunoffResult
  def next_round(votes, ranked_candidates)
    losers = ranked_candidates.find_all do |i|
      votes[i][0] == votes[ranked_candidates[-1]][0]
    end
    loser = losers.sort do |a, b|
      @election.votes[a][0] <=> @election.votes[b][0]
    end.last
    @ranked_candidates.unshift(loser)
    remove_candidate(votes, loser)
  end
end

class InstantRunoffAllResult < InstantRunoffResult
  def next_round(votes, ranked_candidates)
    losers = ranked_candidates.find_all do |i|
      votes[i][0] == votes[ranked_candidates[-1]][0]
    end
    if losers.length == ranked_candidates.length
      false
    else
      @ranked_candidates.unshift(losers)
      losers.each do |loser|
        remove_candidate(votes, loser)
      end
      true
    end
  end
end

class InstantRunoffRandomResult < InstantRunoffResult
  def next_round(votes, ranked_candidates)
    losers = ranked_candidates.find_all do |i|
      votes[i][0] == votes[ranked_candidates[-1]][0]
    end
    loser = losers[rand(losers.length)]
    @ranked_candidates.unshift(loser)
    remove_candidate(votes, loser)
  end
end