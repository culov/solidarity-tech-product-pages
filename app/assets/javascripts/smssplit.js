var smsSplitUtil = {

  map: function (sub, func) { return [].map.apply(sub, [func]) },
  concatMap: function (sub, func) { return [].concat.apply([], smsSplitUtil.map(sub, func)); },
  id: function (x) { return x; },
  isHighSurrogate: function (c) {
    var codeUnit = (c.charCodeAt != undefined) ? c.charCodeAt(0) : c;
    return codeUnit >= 0xD800 && codeUnit <= 0xDBFF;
  },
  numberToHexString: function(number) {
    var number = number.toString(16);
    if(number.length == 1) { number = "0" + number; }
    return "0x" + number;
  },
  toUTF16(codePoint) {
    var TEN_BITS = parseInt('1111111111', 2);
    function u(codeUnit) {
      return '\\u'+codeUnit.toString(16).toUpperCase();
    }

    if (codePoint <= 0xFFFF) {
      return u(codePoint);
    }
    codePoint -= 0x10000;

    // Shift right to get to most significant 10 bits
    var leadSurrogate = 0xD800 + (codePoint >> 10);

    // Mask to get least significant 10 bits
    var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

    return u(leadSurrogate) + u(tailSurrogate);
  },
  /**
    take a string and return a list of the unicode characters
    */
  unicodeCharacters: function (string) {
    var chars = smsSplitUtil.map(string, smsSplitUtil.id);
    var result = [];
    while (chars.length > 0) {
      if (smsSplitUtil.isHighSurrogate(chars[0])) {
        result.push(chars.shift() + chars.shift())
      } else {
        result.push(chars.shift());
      }
    }
    return result;
  },
  /**
    take a string and return a list of the unicode codepoints
    */
  unicodeCodePoints: function (string) {
    var charCodes = smsSplitUtil.map(string, function (x) { return x.charCodeAt(0); });
    var result = [];
    while (charCodes.length > 0) {
      if (smsSplitUtil.isHighSurrogate(charCodes[0])) {
        var high = charCodes.shift();
        var low = charCodes.shift();
        result.push(((high - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000)
      } else {
        result.push(charCodes.shift());
      }
    }
    return result;
  },
  /**
    Encode a single (unicode) character into UTF16 "bytes"
    A single unicode character may be 2 javascript characters
    */
  encodeCharUtf16: function (char) {
    return smsSplitUtil.concatMap(char, function (c) {
      return [((0xff00 & c.charCodeAt(0)) >> 8), 0x00ff & c.charCodeAt(0)];
    });
  },
  /**
    Encode a single character into GSM0338 "bytes"
    */
  encodeCharGsm: function (char) {
    return unicodeToGsm[char.charCodeAt(0)];
  },

  _encodeEachWith: function (doEncode) {
    return function (s) {
      return smsSplitUtil.map(smsSplitUtil.unicodeCharacters(s), doEncode);
    }
  },
  pickencoding: function (s) {
    // choose gsm if possible otherwise ucs2
    if(smsSplitUtil.unicodeCodePoints(s).every(function (x) {return x in unicodeToGsm})) {
      return "gsm";
    } else {
      return "ucs2";
    }
  },

  _segmentWith: function (maxSingleSegmentSize, maxConcatSegmentSize, doEncode) {
    return function (listOfUnichrs) {
      var bytes = smsSplitUtil.map(listOfUnichrs, doEncode);

      if (listOfUnichrs.length == 0) {
        return [];
      } else if ([].concat.apply([], bytes).length <= maxSingleSegmentSize) {
        return [{text:listOfUnichrs, bytes: bytes}];
      }

      var segments = []
      while(listOfUnichrs.length > 0) {
        var segment = {text: [], bytes: []};
        var length = 0;
        function nextChrLen() {
          return bytes[0] === undefined ? length : length + bytes[0].length;
        }
        while(listOfUnichrs.length > 0 && nextChrLen() <= maxConcatSegmentSize) {
          var c = listOfUnichrs.shift()
          var b = bytes.shift();
          segment.text.push(c);
          segment.bytes.push(b);
          if(b != undefined) length += b.length;
        }
        segments.push(segment);
      }
      return segments;
    }
  }
}

var smsSplitEncoder = {
  gsm: smsSplitUtil._encodeEachWith(smsSplitUtil.encodeCharGsm),
  ucs2: smsSplitUtil._encodeEachWith(smsSplitUtil.encodeCharUtf16),
  auto: function (s) { return smsSplitEncoder[smsSplitUtil.pickencoding(s)](s); },
}

var smsSplitSegmenter = {
  gsm: smsSplitUtil._segmentWith(160, 153, smsSplitUtil.encodeCharGsm),
  ucs2: smsSplitUtil._segmentWith(140, 134, smsSplitUtil.encodeCharUtf16),
  auto: function (s) { return smsSplitSegmenter[smsSplitUtil.pickencoding(s)](s); },
}


