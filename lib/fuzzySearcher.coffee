class @FuzzySearcher
  constructor: ->

  isSubsequence: (x, y) -> @._isSubsequence([x,y])

  matches: (s, strings) ->
    strings.filter (string) => @.isSubsequence(s, string)

  _isSubsequence: (arr) ->
    x = arr[0]
    y = arr[1]

    return true if x is ""

    helper = (arr) =>
      subS = arr[0]
      s = arr[1]
      if @._headString(subS) is @._headString(s)
        [@._tailString(subS), @._tailString(s)]
      else
        [subS, @._tailString(s)]

    if x.length > y.length then false
    else @._isSubsequence(helper(arr))

  _headString: (s) -> s.split("")[0] || ""

  _tailString: (s) ->
    chars = s.split("")
    chars[1..chars.length-1].join("")
