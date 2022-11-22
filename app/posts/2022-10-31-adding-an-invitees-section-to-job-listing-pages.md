---
title: Adding an 'Invitees' section to job listing pages
date: 2022-10-31
tags:
- HN002
- school_profiles
---

We added a section within a job listing page called ‘Invitees’. This allows hiring staff users to see all of the candidate profiles who have been invited to apply for the job by themselves or other members of their school or organisation.

This feature does not specify if the candidates have then applied for the job; there is a separate section for this list called ‘Applications’.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Job listing 'Invitees' selected",
    img: { src: "job-listing-invitees-selected.png" }
  }
  ]
}) }}
