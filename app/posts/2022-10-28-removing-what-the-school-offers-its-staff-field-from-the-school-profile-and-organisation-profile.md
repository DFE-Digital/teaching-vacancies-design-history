---
title: Removing the ‘What the school offers its staff’ field from the school profile and organisation profile
date: 2022-10-28
tags:
- HN003
---

We recently removed the ‘What the school offers its staff’ field from the school profile and organisation profile.

Research showed that users did not know how to populate this field. The benefits schools can offer staff differ across different roles, so we moved this field to individual job listings so hiring staff can be more specific.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "School profile",
    img: { src: "school-profile.png" }
  }, {
    text: "Organisation profile",
    img: { src: "organisation-profile.png" }
  }]
}) }}
