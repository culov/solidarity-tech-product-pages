module SmsHelper
  GSM_CHAR_LIMIT = 160
  GSM_CONCAT_CHAR_LIMIT = 153
  UCS2_CHAR_LIMIT = 70
  UCS2_CONCAT_CHAR_LIMIT = 67

  GSM_CHARACTERS = "@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà".chars
  GSM_EXTENDED_CHARACTERS = "^{}\\[~]|€\f".chars

  def self.is_gsm_compatible?(string)
    string.chars.all? { |char| gsm_character?(char) }
  end

  def self.gsm_character?(char)
    GSM_CHARACTERS.include?(char) || GSM_EXTENDED_CHARACTERS.include?(char)
  end

  def self.segment_count(string)
    encoding = is_gsm_compatible?(string) ? :gsm : :ucs2
    segment_count = encoding == :gsm ? segment_gsm(string) : segment_ucs2(string)
    [segment_count, encoding]
  end

  private

  def self.segment_gsm(string)
    length = string.chars.map { |char| gsm_character_length(char) }.sum
    if length <= GSM_CHAR_LIMIT
      1
    else
      (length / GSM_CONCAT_CHAR_LIMIT.to_f).ceil
    end
  end

  def self.segment_ucs2(string)
    length = string.length
    if length <= UCS2_CHAR_LIMIT
      1
    else
      (length / UCS2_CONCAT_CHAR_LIMIT.to_f).ceil
    end
  end

  def self.gsm_character_length(char)
    if GSM_CHARACTERS.include?(char)
      1
    elsif GSM_EXTENDED_CHARACTERS.include?(char)
      2 # Extended characters use an escape character
    else
      0 # Force UCS-2 for unsupported characters
    end
  end

def self.smart_encode(message)
  replacements = {
    '«' => '"', '»' => '"', '“' => '"', '”' => '"', 'ʺ' => '"', 'ˮ' => '"',
    '‟' => '"', '❝' => '"', '❞' => '"', '〝' => '"', '〞' => '"', '＂' => '"',
    '‘' => "'", '’' => "'", 'ʻ' => "'", 'ˈ' => "'", 'ʼ' => "'", 'ʽ' => "'",
    'ʹ' => "'", '‛' => "'", '＇' => "'", '´' => "'", 'ˊ' => "'", '`' => "'",
    'ˋ' => "'", '❛' => "'", '❜' => "'", '̓' => "'", '̔' => "'", '︐' => ",",
    '︑' => ",", '÷' => "/", '¼' => "1/4", '½' => "1/2", '¾' => "3/4",
    '⧸' => "/", '̷' => "/", '̸' => "/", '⁄' => "/", '∕' => "/", '／' => "/",
    '⧹' => "\\", '⧵' => "\\", '⃥' => "\\", '﹨' => "\\", '＼' => "\\",
    '̲' => "_", '＿' => "_", '⃒' => "|", '⃓' => "|", '∣' => "|", '｜' => "|",
    '⎸' => "|", '⎹' => "|", '⏐' => "|", '⎜' => "|", '⎟' => "|", '⎼' => "-",
    '⎽' => "-", '―' => "-", '﹣' => "-", '－' => "-", '‐' => "-", '–' => "-",
    '—' => "-", '•' => "-", '⁃' => "-", '﹫' => "@", '＠' => "@", '﹩' => "$",
    '＄' => "$", 'ǃ' => "!", '︕' => "!", '﹗' => "!", '！' => "!", '﹟' => "#",
    '＃' => "#", '﹪' => "%", '％' => "%", '﹠' => "&", '＆' => "&", '‚' => ",",
    '̦' => ",", '﹐' => ",", '、' => ",", '﹑' => ",", '，' => ",", '､' => ",",
    '❨' => "(", '❪' => "(", '﹙' => "(", '（' => "(", '⟮' => "(", '⦅' => "(",
    '❩' => ")", '❫' => ")", '﹚' => ")", '）' => ")", '⟯' => ")", '⦆' => ")",
    '⁎' => "*", '∗' => "*", '⊛' => "*", '✢' => "*", '✣' => "*", '✤' => "*",
    '✥' => "*", '✱' => "*", '✲' => "*", '✳' => "*", '✺' => "*", '✻' => "*",
    '✼' => "*", '✽' => "*", '❃' => "*", '❉' => "*", '❊' => "*", '❋' => "*",
    '⧆' => "*", '﹡' => "*", '＊' => "*", '˖' => "+", '﹢' => "+", '＋' => "+",
    '。' => ".", '﹒' => ".", '．' => ".", '｡' => ".", '０' => "0", '１' => "1",
    '２' => "2", '３' => "3", '４' => "4", '５' => "5", '６' => "6", '７' => "7",
    '８' => "8", '９' => "9", 'ː' => ":", '˸' => ":", '⦂' => ":", '꞉' => ":",
    '︓' => ":", '：' => ":", '⁏' => ";", '︔' => ";", '﹔' => ";", '；' => ";",
    '﹤' => "<", '＜' => "<", '͇' => "=", '꞊' => "=", '﹦' => "=", '＝' => "=",
    '﹥' => ">", '＞' => ">", '︖' => "?", '﹖' => "?", '？' => "?"
  }

  replacements.each do |k, v|
    message.gsub!(k, v)
  end
  message
end


end