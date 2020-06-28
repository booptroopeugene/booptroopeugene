---
title: Experimental Calendar
date: 2017-01-01T00:00:00.000Z
permalink: /calendar/index.html

---

<div id="calendar"></div>

<link href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/list/main.min.css" rel="stylesheet">

<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/core/main.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/list/main.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullcalendar/4.2.0/google-calendar/main.min.js"></script>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [
        'list', 'googleCalendar'
      ],
      defaultView: 'listWeek',
      header: false,
      views: {
        list: {
          duration: {
            days: 90
          }
        }
      },
      googleCalendarApiKey: 'AIzaSyBvpMS3KwYaQ1YGVk7nxL9GWuU8Cp1td7g',
      events: {
        googleCalendarId: 'ohmdb20qqvfkk9gj53tgi73stk@group.calendar.google.com'
      },
      eventClick: function (arg) {
        window.open(arg.event.url, '_blank', 'width=700,height=600');
        arg
          .jsEvent
          .preventDefault();
      }
    });
    calendar.render();
  });
</script>

<style>
  .fc-list-heading-main, .fc-list-heading-alt {
    font-family: var(--headline-font);
  }
  .fc-list-item {
    display: flex;
  }
  .fc-list-item-time {
    width: 30% !important;
    order: 3;
    text-align: right;
    white-space: break-spaces !important;
  }
  .fc-list-item-marker {
    width: 10px !important;
  }
  .fc-list-item-title {
    width: calc(65% - 16px);
  }
  .fc-event-dot {
    background-color: var(--accent) !important;
    margin-bottom: 4px;
  }
  .cal-sub-btn {
    padding: .5em 1em;
    text-align: center;
    border: 1px solid #ddd;
    border-top: none;
    margin-bottom: 1em;
    background-color: #eee;
    display: flex;
    justify-content: center;
  }
  .cal-sub-btn a {
    margin-left: 4px;
  }
  @media (max-width: 480px) {
    .fc-list-table {
      font-size: 16px !important;
    }
    .fc-event-dot {
      margin-bottom: 0;
    }
    .cal-sub-btn {
      font-size: 16px;
      flex-direction: column;
      align-items: center;
    }
  }
</style>


