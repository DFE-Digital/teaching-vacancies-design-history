---
title: Adding a job offered tab into the applications management table 
date: 2025-09-28
tags:
  - hiring_staff
  - HN002
--- 

Following the application tracking system (ATS) release, we added a job offered tab into the applications management table as this previously stopped at the interviewing stage. These changes were to ensure hiring staff could clearly store all the relevant information system within our new ATS. 

## What we have done   

Within the applications management table, we have added a new ‘Job offered tab’ to enable hiring staff to mark the relevant applicants as successful after the interviewing stage and to track job offers, acceptances and declines. We have also provided additional functionality within this tab.  

These additions allow hiring staff to: 
- update the status of an applicant to job offered 
- add a job offered date and time upon moving an applicant into the ‘Job offered’ state or after they are on the Job offered’ tab 
- download all the selected candidate's personally identifiable information and application details in a ZIP file from the ATS system using the ‘Download selected’ button  
- mark an applicant as 'Offer declined’ from the ‘Job offered’ tab which moves the applicant into a different table on the 'Job offered’ tab  
- provide a decline date, where relevant, upon moving an applicant into the 'Offer declined’ state or after they are moved to the 'Offer declined’ table 


{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The application review page with the new job offered tab active",
    img: { src: "offered.png" }
  },
  {
    text: "The page where you can enter a date for when the jobseeker was sent a job offer",
    img: { src: "add.png" }
  },
  {
    text: "The page where you can enter a date for when the jobseeker declined a declined job offer",
    img: { src: "decline.png" }
  }
  ]
}) }}

