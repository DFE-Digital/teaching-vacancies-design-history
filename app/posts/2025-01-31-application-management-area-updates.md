---
title: Application management area updates
date: 2025-01-31
tags:
  - hiring_staff
  - HN002
--- 

As part of the applicant management system (ATS) discovery work, we identified that hiring staff wanted more control, tracking and management of applications received within the service.  

Our current service design was not fit for purpose and was very basic in comparison to the needs of hiring staff.  

The initial phase of the project was to revamp our existing functionality, followed by the addition of ATS features over the summer of 2025.  

## Key findings 

User research highlighted that hiring staff: 
 
- wanted to track the status of their received applications more easily (rather than one long list)  
- wanted to be able to process applications through bulk actions (for example, shortlist all relevant applications in one go)  
- did not like the term ‘reject’ as they felt this had negative connotations  
- needed a way to bulk download and/or share applications from the service  

## What we have done

On the hiring staff side of the service, we have redesigned our applications management dashboard. 

This change allows hiring staff to: 
 
- tag applications with a status of either new, not considering, reviewed, shortlisted or interviewing, which moves the applications to the corresponding tab 
- change the status of an individual application, or bulk change the status of multiple selected applications 
- download the applicant email address or their full application, either individually or in bulk 

The redesign of the applications management area has improved the ability for hiring staff to monitor and deal with received applications through the service.  

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The previous application management area",
    img: { src: "previous.png" }
  },
  {
    text: "The new application management area ",
    img: { src: "new.png" }
  },
  {
    text: "The update application status button page",
    img: { src: "new2.png" }
  }
  ]
}) }}

