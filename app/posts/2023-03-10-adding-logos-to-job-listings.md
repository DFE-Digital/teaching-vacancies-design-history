---
title: Adding logos to job listings
date: 2023-03-10
tags:
  - JN001
  
  - candidate_profiles
---

We recently designed a [school profile flow](/creating-a-school-profile/), that allowed schools and trusts to add a logo to their profile.

We’ve now added logos of schools and trusts to the job listings page and jobs listing search page. Research showed us schools were looking for ways to encourage engagement with their job listings.

This allows job seekers to see:

- logos of the schools and trusts on the search results page
- a logo of the school or trust on the job listing page

We are monitoring the impact of this on the service.


## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Logos on a search results page",
    img: { src: "school-logo1.png" }
  }, {
    text: "Logos on job listing page",
    img: { src: "school-logo2.png" }
  }]
}) }}
