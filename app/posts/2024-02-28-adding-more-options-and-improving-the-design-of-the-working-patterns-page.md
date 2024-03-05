---
title: Adding more working pattern options to jobs
date: 2024-02-28
tags:
  - HN001
  - HN002
  - JN001
  
  - searching_for_a_job
  - hiring_staff
---

Previously, hiring staff could only specify if a job at their school was full time or part time when listing a job.

To try and help encourage flexible working in schools, hiring staff can now specify if any roles can offer these working patterns:

- Full time
- Part time
- Flexible
- Job share
- Term time 

Also, as part of a recent feedback workshop and feedback review, hiring staff found the working patterns page to be confusing because they were not sure what to add. The design has been simplifed with more specific hint text and labels to help aid people add the right information to the single textarea for additional details.

The working patterns have also been added to the filters and relevant job adverts on the job search journey.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Adding more options to the working patterns page and simplifying the layout when hiring staff are listing a job",
    img: { src: "working-patterns.png" }
  },
  {
    text: "More working patterns can now be used as filters on the job search page",
    img: { src: "working-pattern-filters.png" }
  },
  {
    text: "More working patterns are now visible on job advert pages",
    img: { src: "working-pattern-advert.png" }
  }
  ]
}) }}
