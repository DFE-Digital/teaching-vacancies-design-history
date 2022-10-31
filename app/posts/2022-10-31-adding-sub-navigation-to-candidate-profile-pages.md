---
title: Adding sub navigation to candidate profile pages
date: 2022-10-31
tags:
- HN002
---

We added a sub navigation to candidate profiles, with items for:

- Profile
- Invitations to apply
- Applications

This allows hiring staff users to see:

- a candidate’s profile
- if they have been invited to apply for roles at the school or organisation before, and if so, when and who by
- if they have applied for a role at the school or organisation


## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Candidate profile",
    img: { src: "candidate-profile.png" }
  }]
}) }}
