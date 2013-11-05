# Fuzzy Searcher class

Functions for doing fuzzy searches in strings

Example usage

```javascript
var searcher = new FuzzySearcher()

searcher.isSubsequence("foo", "foobar") // => true
searcher.isSubsequence("foo", "bar") // => false

var words = ["foo","bar","foobar"]

searcher.matches("foo", words) // => ["foo","foobar"]
```
