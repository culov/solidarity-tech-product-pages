class JobInterruptMiddleware
  def call(worker, msg, queue)
    begin
      yield
    rescue Sidekiq::Shutdown
      # Push job back to the queue after time's out following a deployment
      #this seems to be added automatically???
      Airbrake.notify(:sidekiq_shutdown => "re-add job: #{worker.class.to_s}", :args => msg['args'])

      Sidekiq::Client.push('class' => worker.class.to_s, 'args' => msg['args'])

      # Re-raise the exception to ensure Sidekiq's shutdown process continues
      raise
    end
  end
end
