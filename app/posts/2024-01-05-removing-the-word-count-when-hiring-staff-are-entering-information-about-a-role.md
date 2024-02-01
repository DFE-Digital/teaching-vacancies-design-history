---
title: Removing the word count when hiring staff are entering information about a role
date: 2024-01-05
tags:
  - HN001
  - HN003
  
  - hiring_staff
---

Following a review of all feedback in 2023, hiring staff have indicated that the word count within the job listing process is limiting.

To help this, we have removed the word count limit from all textareas on the about the role page on the job listing journey.

This will give hiring staff more flexibility when providing information about a role. It may also make the process faster given some hiring staff are copying and pasting a pre-written advert.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Removing the word count limit on textareas on the about a role page on the job listing journey",
    img: { src: "removing-the-word-count.png" }
  }
  ]
}) }}
