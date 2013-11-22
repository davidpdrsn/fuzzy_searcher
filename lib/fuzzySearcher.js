var FuzzySearcher = (function() {
  function FuzzySearcher() {}

  FuzzySearcher.prototype.isSubsequence = function(sub, string) {
    try {
      sub.split("").forEach(function(letter) {
        string = removeUntilFirst(string, letter);
      });
    } catch(e) {
      return false;
    }
    return true;
  }

  function removeUntilFirst(string, letter) {
    var regexp = new RegExp("^.*?" + letter);
    if (regexp.test(string)) {
      return string.replace(regexp, '');
    } else {
      throw new Error("out of range");
    }
  }

  return FuzzySearcher;
})();
