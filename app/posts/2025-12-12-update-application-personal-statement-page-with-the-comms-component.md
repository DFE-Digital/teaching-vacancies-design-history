---
title: Giving jobseekers more control over their personal statement when submitting an application
date: 2025-12-12
tags:
  - JN002
  
  - jobseekers
--- 

Within the job application form, jobseekers are asked to complete a personal statement. At the moment, this page uses textarea box with no formatting options.

Jobseekers have told us they want more control over how their personal statement is presented, particularly the ability to structure longer answers clearly and emphasise key points. This mirrors behaviour we already support elsewhere in the service through the communications feature for hiring staff.

### What we’re changing

We want to update the personal statement page to use the same textarea component as the communications feature, giving jobseekers access to formatting controls such as:
- bold 
- italics
- other basic text formatting options

This allows jobseekers to better structure their content while keeping the experience familiar and consistent with other parts of the service.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The new personal statement page with formatting options",
    img: { src: "page.png" }
  }
  ]
}) }}