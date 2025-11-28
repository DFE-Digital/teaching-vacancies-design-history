---
title: Adding jobseeker notifications 
date: 2025-09-20
tags:
  - jobseekers
  - JN002
  - HN002
--- 

As part of adding an applicant tracking system (ATS) to the Teaching Vacancies service, there are now situations where we need to notify jobseekers when action is required, such as when they receive a message from hiring staff or are sent a request to complete a self-disclosure form.

## What we have done
  
To ensure jobseekers receive clear and timely communications, we introduced a jobseeker notifications feature within the service. While a notifications system already existed for hiring staff, this functionality had not previously been required for jobseekers.

This change now allows:

- A notification and email to be triggered when a jobseeker receives a message in their account.
- A notification and email to be triggered when a jobseeker receives a request to complete a self-disclosure form.

These two scenarios currently cover where jobseeker notifications are required, but we will expand the use of this feature as additional service developments are introduced.

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The notifications page with numerous example messages such as a request to complete a self disclosure form",
    img: { src: "notifications.png" }
  }
  ]
}) }}

