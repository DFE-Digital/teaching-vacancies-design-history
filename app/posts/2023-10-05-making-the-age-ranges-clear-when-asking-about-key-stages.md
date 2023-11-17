---
title: Making age ranges clear when asking about key stages
date: 2023-10-05
tags:
  - JN001
  - JN002
  
  - candidate_profiles
---

Recent user research with jobseekers not as familiar with teaching in the UK indicated that it was difficult to understand the age ranges of students per key stage when setting up a candidate profile.

To help this, we've shown the relevant age ranges next to the key stages when users set up a profile on the candidate profiles feature.

This will indicate to jobseekers what ages are usually taught in each key stage.

We will be monitoring how useful this is for jobseekers to understand if it would be useful across the service.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Making the age ranges for each key stage clear",
    img: { src: "key-stage-age-ranges.png" }
  }
  ]
}) }}
