---
title: Changing the interstitial that prompts hiring staff to complete their school profile
date: 2022-10-28
tags:
- HN003
---

We recently designed [an interstitial page to prompt users to complete their school profile](/prompting-hiring-staff-to-complete-their-school-profile/).

Previously, this interstitial only focussed on asking users to add a school logo and photo to their school profile. We've now rescoped this because logos and photos will be delivered later.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

We also realised we had not told users about school profiles yet, so we redesigned the interstitial. It now has:
- a heading that says "Complete  your school profile"
- a paragraph that says "The details stored in your school profile are included in your job listings"

Here, we’re trying to encourage users to complete their school profile in order to save time later when they list jobs on the service. It’s clearer and introduces school profiles, before giving them extra tasks to complete. We’ll encourage users to add their school logos and photos later on.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "School interstitial",
    img: { src: "school-interstitial.png" }
  },
  {
    text: "Organisation interstitial",
    img: { src: "organisation-interstitial.png" }
  }]
}) }}
