describe(FuzzySearcher, function() {
  var searcher;

  beforeEach(function() {
    searcher = new FuzzySearcher;
  });

  describe('#isSubsequence', function() {
    it('returns true if its a subsequence', function() {
      expect(searcher.isSubsequence("abba", "abracadabra")).toBe(true);
      expect(searcher.isSubsequence("aba", "aba")).toBe(true);
      expect(searcher.isSubsequence("foo", "iuqwteriufquiywetirouyqwteiro")).toBe(true);
      expect(searcher.isSubsequence("", "foo")).toBe(true);
      expect(searcher.isSubsequence("foo", "foooooooo")).toBe(true);
      expect(searcher.isSubsequence("123", "94857619485762985673333")).toBe(true);
      expect(searcher.isSubsequence("david", "daoobkauwieviladddd")).toBe(true);
      expect(searcher.isSubsequence("1", "23451")).toBe(true);
      expect(searcher.isSubsequence("hi there", "hi you the re")).toBe(true);
    });

    it('returns false if its not a subsequence', function() {
      expect(searcher.isSubsequence("aab", "abba")).toBe(false);
      expect(searcher.isSubsequence("foobar", "foo")).toBe(false);
      expect(searcher.isSubsequence("foo", "fo")).toBe(false);
      expect(searcher.isSubsequence("foo", "")).toBe(false);
      expect(searcher.isSubsequence("foo", "kahlkfjahsdkjfhla")).toBe(false);
    });
  });
});
