---
title: Adding a visa sponsorship filter to the job search journey 
date: 2023-12-12
tags:
  - JN001
  
  - searching_for_a_job
---

Recent user research with jobseekers indicated that providing a way to search for roles that could offer them visa sponsorship would be beneficial.

To help this, we are now providing a filter that allows jobseekers to only show roles that can offer sponsorship. This will only show relevant roles after [asking schools when posting a role if visa sponsorship is available or not.](/showing-if-a-role-can-offer-visa-sponsorship/) 

We will be monitoring how useful this is for jobseekers and the impact it has on schools posting jobs across the service.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Providing a visa sponsorship filter so jobseekers can search for roles that can sponsor them",
    img: { src: "visa-sponsorship-filter.png" }
  }
  ]
}) }}
