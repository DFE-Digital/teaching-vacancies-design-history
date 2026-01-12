---
title: Adding additional features to the ‘interviewing’ tab
date: 2025-10-16
tags:
  - hiring_staff
  - HN002
--- 

Following the application tracking system (ATS) release, we made some alterations to the ‘Interviewing’ tab to provide hiring staff with a way to store interview and feedback dates as well as mark applicants as unsuccessful at interview. These changes were to ensure hiring staff could clearly store all the relevant information system within our new ATS.  

## What we have done   

On the existing ‘Interviewing’ tab within the applications management table, we have provided additional functionality.  

These additions allow hiring staff to: 
- add an interview date and time upon moving an applicant into the ‘Interviewing’ state or after they are on the ‘Interviewing’ tab 
- mark an applicant as unsuccessful at interview from the ‘Interviewing’ tab which moves the applicant into a different table on the ‘Interviewing’ tab  
- provide a feedback date, where relevant, upon moving an applicant into the ‘Interview unsuccessful’ state or after they are moved to the ‘Interview unsuccessful’ table 


{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The updated interviewing tab",
    img: { src: "tab1.png" }
  },
  {
    text: "The add interview date and time page",
    img: { src: "tab2.png" }
  },
  {
    text: "The individual application page where the interview date and time can be viewed and updated",
    img: { src: "tab3.png" }
  },
  {
    text: "The new ‘Interview unsuccessful’ tab – this page is accessed by selecting an applicant and then the ‘Update application status’ button",
    img: { src: "tab4.png" }
  },
  {
    text: "The Add feedback date page",
    img: { src: "tab5.png" }
  }
  ]
}) }}

