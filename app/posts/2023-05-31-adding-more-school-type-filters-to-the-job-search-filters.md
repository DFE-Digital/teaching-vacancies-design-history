---
title: Adding more school type filters to the job and school search journeys
date: 2023-05-31
tags:
  - JN001
  
  - searching_for_a_job
---

Recent user research with job seekers indicated that providing a more detailed way to filter by organisation type and school type would be beneficial for jobseekers.

This will allow job seekers to:
- filter by organisation type, such as only showing local authority maintained schools
- filter by school type, such as only showing faith schools

This will give job seekers with a preference to find more suitable jobs and schools.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "A job search with an organisation and school type filter applied",
    img: { src: "job-search-with-filters-applied.png" }
  }]
}) }}
