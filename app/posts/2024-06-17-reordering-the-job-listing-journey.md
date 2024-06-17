---
title: Reordering the job listing journey
date: 2024-06-17
tags:
  - HN001
  
  - hiring_staff
--- 


Following the launch of all school roles, we've received feedback indicating the ordering of our pages is confusing when hiring staff are entering the name and category of the role.

To address this issue, we're reordering the pages so the job title is asked first, then the category of the role. Previously, we asked for people to select the job category first, which has caused confusion as feedback suggested people thought they were selecting the specific role and not a category.

We will monitor the change to see if this improves the job listing journey.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "Asking for the job title first, then the job category",
    img: { src: "job-listing-journey.png" }
  }
  ]
}) }}
