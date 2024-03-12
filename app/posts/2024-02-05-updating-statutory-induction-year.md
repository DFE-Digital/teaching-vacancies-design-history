---
title: Updating the statutory induction year question in the jobseeker application journey
date: 2024-02-05
tags:
  - JN002
  
  - searching_for_a_job
---

As part of our application review in 2023, we noticed that the statutory induction year question in our application form was outdated.

We previously asked users 'have you completed your statutory induction year?'.

The induction period for early career teachers (ECTs) increased from 1 year to 2 in 2021.

We need to update the application journey accordingly.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "removing the old statutory induction year question",
    img: { src: "updating-statutory-induction-year-old.png" }
  }, {
    text: "new statutory induction question",
    img: { src: "updating-statutory-induction-year-new.png" }    
  }]
}) }}
