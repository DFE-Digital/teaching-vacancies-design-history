---
title: Allowing jobseekers to sort roles by distance
date: 2023-09-22
tags:
  - JN001
  
  - searching_for_a_job
---

Recent user research with job seekers indicated that providing a way to sort job listings by distance when they enter a location would be beneficial.

When entering a location, jobseekers can now:
- sort job listings by distance from their specified location
- see how far the job listing is from their specificied location

This will give job seekers with a preference on location to find more suitable jobs.

We will be monitoring how this impacts the job search journey.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Allowing jobseekers to sort by distance and see how far a role is form their specified location",
    img: { src: "sort-by-distance.png" }
  }
  ]
}) }}
