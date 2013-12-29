var FuzzySearcher = (function() {
  function FuzzySearcher() {}

  FuzzySearcher.prototype.isSubsequence = function(sub, string) {
    var regexp = new RegExp(sub.split("").join(".*?"));
    return regexp.test(string);
  }

  return FuzzySearcher;
})();
