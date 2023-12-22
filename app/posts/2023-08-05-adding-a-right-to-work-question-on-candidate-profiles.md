---
title: Adding a right to work in the UK question to candidate profiles
date: 2023-08-05
tags:
  - JN001
  - searching_for_a_job
  - candidate_profiles
---

To provide a better experience for non-UK teachers, we've added a right to work in the UK question to the candidate profiles feature so it is more clear to hiring staff the teachers that are interested in teaching in England as an international citizen.

Selecting No will also provide advice for non-UK teachers on possible steps they need to take to secure a teaching job in the UK.

This question works alongside the [hiring staff right to work in the UK filter](/adding-a-right-to-work-filter-for-hiring-staff-on-candidate-profiles), to ensure we help both teachers and hiring staff find the right school or teacher for them.


## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Adding a right to work question to candidate profiles",
    img: { src: "right-to-work-question.png" }
  }
  ]
}) }}
