---
title: Enabling users to download a blank copy of the Teaching Vacancies application form 
date: 2025-11-04
tags:
  - hiring_staff
  - jobseekers
  - HN001
  - HN002
  - JN002
--- 

During user research, hiring staff mentioned that they needed the ability to print a blank version of our application form for users who may need a physical copy.  

We also needed to provide a workaround for jobseekers who withdraw from a role due to an error in their online application form. Jobseekers cannot resubmit applications digitally, meaning they only have one opportunity to apply through the service.  

## What we have done

When hiring staff list a job on the service using our application form, they are now given a button to download a blank copy of our application form which they can print and share.  

We have extended this ability to download a blank copy of the Teaching Vacancies application form to jobseekers who have withdrawn their application. If the jobseeker has withdrawn in error and still wants to apply for the role, they can now submit a handwritten application instead. 

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The job listing journey button to download a blank application form ",
    img: { src: "download.png" }
  },
  {
    text: "A blank form that is provided with spaces to complete by hand",
    img: { src: "blank.png" }
  },
  {
    text: "the job applicaton page where a jobseeker can now download a blank form if they have withdrawn their application",
    img: { src: "withdrawn.png" }
  }
  ]
}) }}

