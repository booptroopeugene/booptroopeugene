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
<ul id="results-container" class="search-page-results"></ul>

<script src="https://unpkg.com/simple-jekyll-search@latest/dest/simple-jekyll-search.min.js"></script>

<script>
search_input = document.getElementById('search-input')
var sjs = SimpleJekyllSearch({
  searchInput: search_input,
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json'
})
search_input.value = document.location.hash.replace("#","")
</script>