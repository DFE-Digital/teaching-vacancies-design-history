---
title: Creating a school profile
date: 2022-10-06
tags:
  - JN002
  - JN004
  - JN005
  - JN007
  - JN009
---

We recently designed a way for [jobseekers to find schools](/finding-schools).

We’ve now designed a way for hiring staff to fill out their school profile.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

When signed in, hiring staff who work at a school will see a ‘School profile’ link in the header at the top of every page.
### Viewing the school profile page

A school profile has uneditable fields for:

- school name
- address
- type
- education phase (that can be changed if it’s missing from ‘get information about schools’)
- age group
- size
- a link to the latest Ofsted report

It also has editable fields for:

- email address
- school website
- school description
- what the school offers its staff
- commitment to safeguarding
- school logo
- school photo

### Updating the school profile

Clicking ‘change’ will take hiring staff users down a flow that allows them to update the information.

We’ve only designed a flow to add a school logo. We’ll design the rest of the flows later.
### Prompting hiring staff users to complete their school profile

If any of the details are missing from the school profile, a blue notification banner will appear at the top of the page that says ‘Complete your school profile’.

### Previewing their school profile

There’s a ‘Preview school profile’ link at the top of the school profile page.

Hiring staff can click the link to preview what their school profile page will look like to jobseekers.

Hiring staff can click ‘Exit preview’ to return to the school profile page.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "School profile - complete",
    img: { src: "school-profile--complete.png" }
  }, {
    text: "School profile - incomplete",
    img: { src: "school-profile--incomplete.png" }
  }, {
    text: "School profile preview",
    img: { src: "school-preview.png" }
  }, {
    text: "Upload logo",
    img: { src: "upload-logo--1.png" }
  }, {
    text: "Upload logo - check answers",
    img: { src: "upload-logo--2.png" }
  }, {
    text: "Upload logo - success message",
    img: { src: "upload-logo--success.png" }
  }]
}) }}
