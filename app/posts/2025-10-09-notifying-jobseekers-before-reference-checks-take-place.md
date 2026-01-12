---
title: Notifying jobseekers before reference checks take place
date: 2025-09-19
tags:
  - hiring_staff
  - jobseekers
  - JN002
  - HN002
--- 

References are required as part of the application process and hiring stuff must collect references prior to interview as part of the [Keeping Children Safe in Education (KCSIE) guidance](https://www.gov.uk/government/publications/keeping-children-safe-in-education--2).

## Key findings

User research highlighted that jobseekers knew who to provide as their reference, but they had not always told their employer when they were seeking a new role. Jobseekers therefore wanted to provide the correct references in their application form, but to be notified if they would be moving forward to an interview so they could ensure that all the relevant parties in their current employment knew that they had applied for a new role.  

## What we have done   

To support jobseeker behaviours in alerting different parties at different times to their wish to move to a new role, we have:  
- added an additional question to our references section to ask jobseekers if they wish to be contacted before references are sought 
- provided information to hiring staff within the completed application form to let them know if a jobseeker wishes to be contacted before references are sought 
- enabled hiring staff to trigger a notification email to jobseekers, through our applicant tracking system, that they will be invited to interview and references are going to be sought if the jobseeker indicates that they wish to be notified 

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The new question in the references section of the application form",
    img: { src: "reference.png" }
  },
  {
    text: "The details shown to hiring staff with a completed references section on the application form",
    img: { src: "add.png" }
  },
  {
    text: "The email sent to jobseekers if hiring staff opt to trigger an email through our applicant tracking system",
    img: { src: "candidate.png" }
  }
  ]
}) }}

