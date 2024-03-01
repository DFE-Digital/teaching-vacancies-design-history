---
title: Adding more options to the working patterns page
date: 2024-02-28
tags:
  - HN001
  - HN002
  
  - searching_for_a_job
  - hiring_staff
---

Previously, hiring staff could only specify if a job at their school was full time or part time when listing a job.

To try and help encourage flexible working in schools, hiring staff can now specify if any roles can offer:

- Full time
- Part time
- Flexi time
- Job share
- Term time

Also, as part of a recent feedback workshop and feedback review, hiring staff found the working patterns page to be confusing because they were not sure what to add. The design has been simplifed with more specific hint text and labels to help aid people add specific information.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Adding more options to the working patterns page and simplifying the layout",
    img: { src: "working-patterns.png" }
  }]
}) }}
