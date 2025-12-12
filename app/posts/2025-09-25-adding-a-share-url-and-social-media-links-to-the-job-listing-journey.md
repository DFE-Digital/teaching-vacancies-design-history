---
title: Adding a share URL and social media links to the job listing journey   
date: 2025-09-25
tags:
  - hiring_staff
  - HN001
  - HN002
--- 

User research highlighted that hiring staff need an easy way to share their job listings across multiple platforms including their own school websites and social media accounts.  

## What we have done

Each of our job listings has a bespoke URL, so we wanted to highlight this unique link to hiring staff so they could easily share their job listings across other platforms. We have added details on to our job listing confirmation page so once hiring staff have posted a job, they can easily access the relevant information to share their job adverts.  

This change has: 
 
- added a new section titled ‘Share your job listing’ at the top of the job listing confirmation page 
- provided a way for hiring staff to copy the URL of their new job listing 
- added share links for Facebook and X (Twitter)  

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The updated job listing confirmation page with the new share element",
    img: { src: "listing.png" }
  }
  ]
}) }}

