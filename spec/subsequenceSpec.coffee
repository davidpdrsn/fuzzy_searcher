searcher = undefined

describe FuzzySearcher, ->
  beforeEach ->
    searcher = new FuzzySearcher

  describe '#isSubsequence', ->
    it 'returns true if its a subsequence', ->
      expect(searcher.isSubsequence("abba", "abracadabra")).toBe true
      expect(searcher.isSubsequence("aba", "aba")).toBe true
      expect(searcher.isSubsequence("foo", "iuqwteriufquiywetirouyqwteiro")).toBe true
      expect(searcher.isSubsequence("", "foo")).toBe true
      expect(searcher.isSubsequence("foo", "foooooooo")).toBe true
      expect(searcher.isSubsequence("123", "94857619485762985673333")).toBe true
      expect(searcher.isSubsequence("david", "daoobkauwieviladddd")).toBe true
      expect(searcher.isSubsequence("1", "23451")).toBe true
      expect(searcher.isSubsequence("hi there", "hi you the re")).toBe true

    it 'returns false if its not a subsequence', ->
      expect(searcher.isSubsequence("aab", "abba")).toBe false
      expect(searcher.isSubsequence("foobar", "foo")).toBe false
      expect(searcher.isSubsequence("foo", "fo")).toBe false
      expect(searcher.isSubsequence("foo", "")).toBe false
      expect(searcher.isSubsequence("foo", "kahlkfjahsdkjfhla")).toBe false

  describe '#matches', ->
    it 'returns an array of matching strings', ->
      strings = ["foo", "foobar", "bar", "123f234o34o"]
      matches = searcher.matches("foo", strings)
      expect(matches).toEqual ["foo","foobar","123f234o34o"]
