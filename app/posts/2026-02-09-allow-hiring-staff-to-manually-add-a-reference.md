---
title: Allow hiring staff to manually add a reference
date: 2026-02-09
tags:
  - HN001
  - HN002
  
  - hiring_staff
--- 

Hiring staff want to be able to track all references in one place within the ATS. While many references are collected through the service, some are gathered outside of Teaching Vacancies, for example, via email or paper forms.

Currently, there is no way for hiring staff to record these externally collected references in the service. This means reference information can be fragmented, making it harder to manage pre-interview checks consistently.

### What we’re changing

We’re adding a way for hiring staff to manually add a reference to a completed jobseeker application.

On the pre-interview checks tab, hiring staff can now manually add a reference by selecting the “Add a reference” button.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The new add reference button available when reviewing an application in the pre-interview checks stage",
    img: { src: "add.png" }
  },
  {
    text: "The adding a referee page with the options to upload or manually add a referee",
    img: { src: "add2.png" }
  },
  {
    text: "The updated pre-interview checks page on an application with a new reference added",
    img: { src: "reference.png" }
  }
  ]
}) }}