---
title: Allowing hiring staff to list roles as soon as possible
date: 2024-06-13
tags:
  - HN001
  
  - hiring_staff
---

Previously on the job listing journey, hiring staff had to enter a specific date when adding a job start date.

We had some feedback from hiring staff users that they would find it useful to have a faster way to list applications without specifying a date.

To help make the job listing journey process faster for hiring staff who don’t have a job listing date, we’re adding an ‘As soon as possible’ option.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "Adding an as soon as possible option to the job start date page",
    img: { src: "asap.png" }
  }
  ]
}) }}
