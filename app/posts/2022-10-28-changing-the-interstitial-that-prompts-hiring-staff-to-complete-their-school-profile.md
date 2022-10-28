---
title: Changing the interstitial that prompts hiring staff to complete their school profile
date: 2022-10-28
tags:
- HN003
---

We recently designed [an interstitial page to prompt users to complete their school profile](/prompting-hiring-staff-to-complete-their-school-profile/). 

Previously, this interstitial only focussed on asking users to add a school logo and photo to their school profile. We’ have now rescoped this because and logos and photos will be delivered later.

We also realised we had not told users about school profiles yet, so we redesigned the interstitial. It now says:


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
