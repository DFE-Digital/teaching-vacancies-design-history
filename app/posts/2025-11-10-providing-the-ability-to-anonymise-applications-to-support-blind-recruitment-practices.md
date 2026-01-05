---
title: Providing the ability to anonymise applications to support blind recruitment practices 
date: 2025-11-10
tags:
  - hiring_staff
  - HN001
  - HN002
--- 

For certain schools or multi-academy trusts, the ability to receive anonymised applications is crucial to supporting their recruitment practices.  

These schools or multi-academy trusts have previously been unable to use the built-in application form on the service due to the inability to conduct blind recruitment.  

## What we have done

As conducting blind recruitment and receiving anonymised applications is not necessary for all schools or multi-academy trusts, we needed to provide the ability to opt in to using this feature.  

The blind recruitment feature allows: 

- hiring staff to opt in to receiving anonymised applications during the job listing journey on an individual role basis 
- personal information to be removed from an application prior to the shortlisting stage – this includes name, address, National Insurance number, teacher reference number (TRN) and contact information 
- personal information to be shown once an applicant is marked as shortlisted (as hiring staff need the personal information to do pre-interview checks) 

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The job listing journey question to opt into anonymising applications",
    img: { src: "anon.png" }
  },
  {
    text: "The application management table with an anonymised application",
    img: { src: "table.png" }
  },
  {
    text: "An anonymised application with redacted personal identifiable information",
    img: { src: "view.png" }
  },
  {
    text: "The application management table when an anonymised application is shortlisted and personal identifiable information is shown",
    img: { src: "table2.png" }
  }
  ]
}) }}

