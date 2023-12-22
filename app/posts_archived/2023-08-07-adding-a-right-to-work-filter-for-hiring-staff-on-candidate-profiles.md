---
title: Adding a filter for right to work in the UK when hiring staff are looking for candidates
date: 2023-08-07
tags:
  - HN002
  - hiring_staff
---

We had some feedback from schools using our candidate profiles feature in May 2023 that indicated it wasn't clear which teachers were looking for a sponsorship to work in the UK.

This filter works alongside the [candidate profiles right to work in the UK question](/adding-a-right-to-work-question-on-candidate-profiles), to ensure we help both teachers and hiring staff find the right school or teacher for them.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Providing a right to work in the UK filter",
    img: { src: "right-to-work-filter.png" }
  }
  ]
}) }}
