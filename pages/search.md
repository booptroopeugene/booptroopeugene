---
title: Search
date: 2020-07-29T00:00:00.000Z
permalink: /search/
eleventyNavigation:
  key: Search
  order: 5
excludeFromSearch: true
---
<!-- HTML elements for search -->
<input type="text" id="search-input" placeholder="Search blog posts..">
<ul id="results-container"></ul>

<!-- or without installing anything -->
<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>

<script>
search_input = document.getElementById('search-input')
search_input.value = document.location.hash.replace("#","")
var sjs = SimpleJekyllSearch({
  searchInput: search_input,
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
</script>