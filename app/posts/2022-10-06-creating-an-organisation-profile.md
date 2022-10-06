---
title: Creating an organisation profile
date: 2022-10-06
tags:
  - JN002
  - JN004
  - JN005
  - JN007
  - JN009
---

We recently designed a way for [hiring staff to fill out their school profile](/creating-a-school-profile).

Some hiring staff work at organisations that have multiple schools, such as multi-academy trusts.

So we’ve designed a way to create an organisation profile and manage the information related to each of their schools.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

When signed in, hiring staff who work at an organisation will see an ‘Organisation profile’ link in the header at the top of every page.

### Viewing the organisation profile page

An organisation profile has uneditable fields for:

- organisation name
- address
- a link to the latest Ofsted report

It also has editable fields for:

- email address
- organisation website
- organisation description
- what the organisation offers its staff
- commitment to safeguarding
- organisation logo
- organisation photo

### Updating the organisation profile

Clicking ‘change’ will take hiring staff users down a flow that allows them to update the information.

We’ve only designed a flow to add an organisation logo. We’ll design the rest of the flows later.

### Viewing and updating information about a school within their organisation profile

There’s a list of schools within the organisation at the bottom of the organisation profile page.

Clicking on a school takes the hiring staff user to the school profile details page.

### Previewing their organisation profile

There’s a ‘Preview organisation profile’ link at the top of the organisation profile page.

Hiring staff can click the link to preview what their organisation profile page will look like to jobseekers.

Hiring staff can click ‘Exit preview’ to return to the organisation profile page.

### Previewing a school profile

There’s a ‘Preview school profile’ link at the top of each school profile page.

Hiring staff can click the link to preview what their school profile page will look like to jobseekers.

Hiring staff can click ‘Exit preview’ to return to the school profile page.

### Prompting hiring staff to complete their organisation profile or school profiles

If any of the details are missing from the organisation profile or from a school within the organisation, a blue notification banner will appear at the top of the page that says ‘Complete your organisation profile’.

Any schools within the organisation that have missing information will:

- appear at the top of the list of schools
- be highlighted with a blue left border
- have a message that says ‘Complete your school profile’

If a school has missing information, the school profile page will show a blue notification banner at the top of the page that says ‘Complete your school profile’.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Organisation profile - complete",
    img: { src: "organisation-profile--complete.png" }
  }, {
    text: "Organisation profile - incomplete",
    img: { src: "organisation-profile--incomplete.png" }
  }, {
    text: "School profile - complete",
    img: { src: "school-profile--complete.png" }
  }, {
    text: "School profile - incomplete",
    img: { src: "school-profile--incomplete.png" }
  }, {
    text: "Organisation profile preview",
    img: { src: "organisation-preview.png" }
  }, {
    text: "Organisation profile preview - schools",
    img: { src: "organisation-preview--schools.png" }
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
    text: "Upload logo - succes message",
    img: { src: "upload-logo--success.png" }
  }]
}) }}
