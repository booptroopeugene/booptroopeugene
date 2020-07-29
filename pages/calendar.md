---
title: Experimental Calendar
date: 2017-01-01T00:00:00.000Z
permalink: /calendar/index.html
eleventyExcludeFromCollections: true
---

<div class="cal-container">
  <div id="calendar"></div>
</div>
<button style="margin-top: 4em" onclick="registerServiceWorker()">Register Worker</button>
<button style="margin-top: 1em" onclick="deleteServiceWorkers()">Delete Workers</button>

<!-- temporary service worker deleter -->
<script>
  function deleteServiceWorkers() {
    console.log('attempting to delete workers');
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for(let registration of registrations) {
        console.log(registration);
        registration.unregister()
      } 
    })
  }

  function registerServiceWorker() {
    console.log('attempting to register a worker');
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/simpleSW.js')
        .then((reg) => {
          // registration worked
          console.log('Registration succeeded. Scope is ' + reg.scope);
        }).catch((error) => {
          // registration failed
          console.log('Registration failed with ' + error);
        });
    }
  }

</script>

