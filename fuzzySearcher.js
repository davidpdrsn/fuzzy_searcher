this.FuzzySearcher = (function() {
  function FuzzySearcher() {}

  FuzzySearcher.prototype.isSubsequence = function(x, y) {
    return this._isSubsequence([x, y]);
  };

  FuzzySearcher.prototype.matches = function(s, strings) {
    var _this = this;
    return strings.filter(function(string) {
      return _this.isSubsequence(s, string);
    });
  };

  FuzzySearcher.prototype._isSubsequence = function(arr) {
    var helper, x, y,
      _this = this;
    x = arr[0];
    y = arr[1];
    if (x === "") {
      return true;
    }
    helper = function(arr) {
      var s, subS;
      subS = arr[0];
      s = arr[1];
      if (_this._headString(subS) === _this._headString(s)) {
        return [_this._tailString(subS), _this._tailString(s)];
      } else {
        return [subS, _this._tailString(s)];
      }
    };
    if (x.length > y.length) {
      return false;
    } else {
      return this._isSubsequence(helper(arr));
    }
  };

  FuzzySearcher.prototype._headString = function(s) {
    return s.split("")[0] || "";
  };

  FuzzySearcher.prototype._tailString = function(s) {
    var chars;
    chars = s.split("");
    return chars.slice(1, +(chars.length - 1) + 1 || 9e9).join("");
  };

  return FuzzySearcher;

})();
