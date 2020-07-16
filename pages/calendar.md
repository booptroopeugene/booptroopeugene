---
title: Experimental Calendar
date: 2017-01-01T00:00:00.000Z
permalink: /calendar/index.html

---
<p>Black Lives Matter protests and community events in the Eugene, Springfield Area.<br> Please <a href="/contact/">contact us</a> to let us know about your protest or event.</p>

<div class="cal-container">
  <div id="calendar"></div>
</div>
<p><a href="https://calendar.google.com/calendar?cid=b2htZGIyMHFxdmZrazlnajUzdGdpNzNzdGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ" target="_blank">Subscribe to this Google Calendar</a></p>
<p>Click an event for details and links to the original event source. For past events, see the <a href="https://calendar.google.com/calendar/embed?src=ohmdb20qqvfkk9gj53tgi73stk%40group.calendar.google.com&ctz=America%2FLos_Angeles" target="_blank">full calendar</a>.</p>

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

