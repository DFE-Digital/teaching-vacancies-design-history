---
title: Invalidating locations from outside the UK when creating job alerts
date: 2024-02-05
tags:
  - JN002
  
  - searching_for_a_job
---

Whilst reviewing the job alerts and preferences journeys in October 23, we noticed people could input any location into their job alert despite the service only covering jobs in England.

To help clarify, we've introduced some hint text on the location text input and will be alerting users with an error message if they try to add a location not within the United Kingdom.

We have not restricted the locations people enter to England only as people may want to travel across the border to a school in England.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Showing an error message when people add a location outside of the UK",
    img: { src: "job_alerts_error.png" }
  }]
}) }}
