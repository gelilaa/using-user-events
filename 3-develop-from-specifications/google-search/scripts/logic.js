const googleTests = [
  {name: 'first',args: ['HYF'],expected: 'https://www.google.com/search?q=HYF'},
  { name: 'second', args: [], expected: null },
  { name: 'third', args: [], expected: null },
  { name: 'fourth', args: [], expected: null },
  { name: 'fifth', args: [], expected: null },
  { name: 'sixth', args: [], expected: null },
  { name: 'seventh', args: [], expected: null },
  { name: 'eighth', args: [], expected: null },
  { name: 'ninth', args: [], expected: null },
  { name: 'tenth', args: [], expected: null },
];

function googleURL(searchQuery) {
   const encodedQuery = encodeURIComponent(searchQuery);
   return 'https://www.google.com/search?q=' + encodedQuery;
 }

testing(googleURL, googleTests);
