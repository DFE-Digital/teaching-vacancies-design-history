---
title: Making age ranges clear when asking about key stages
date: 2023-10-05
tags:
  - JN001
  - JN002
  
  - candidate_profiles
---

Recent user research with job seekers not as familiar with the UK education system indicated that it was difficult to understand the age ranges per key stage.

To help this, we've shown the relevant age ranges next to the key stages when users set up a profile on the candidate profiles feature.

This will indicate to job seekers what ages are usually taught in each key stage.

We will be monitoring how useful this is for job seekers to understand if it would be useful across the service.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Making the age ranges for each key stage clearer",
    img: { src: "key-stage-age-ranges.png" }
  }
  ]
}) }}
