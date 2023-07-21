---
title: Pre-populating a candidates profile from a previous application
date: 2023-05-15
tags:
  - JN002
  
  - candidate_profiles
---

If jobseekers have previously submitted a job application through our service and try [creating a profile](creating-a-jobseeker-profile/), some of their details will now be imported into their profile.

This will allow job seekers to:
- save time having to re-enter information
- create a profile faster
- apply to jobs more quickly

Hiring staff could then browse profiles and invite jobseekers to apply for jobs.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Telling users that we have imported some of their application information into their profile",
    img: { src: "pre-populate-alert.png" }
  }]
}) }}
