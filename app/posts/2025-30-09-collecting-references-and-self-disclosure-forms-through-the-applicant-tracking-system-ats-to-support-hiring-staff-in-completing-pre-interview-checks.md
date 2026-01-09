---
title: Collecting references and self-disclosure forms through the applicant tracking system (ATS) to support hiring staff in completing pre-interview checks 
date: 2025-09-30
tags:
  - hiring_staff
  - HN002
--- 

As part of developing an ATS system, the main pain points for hiring staff were around the requirements for references as part of the pre-interview checks under the Keeping Children Safe in Education (KCSIE) guidance. 

## Key findings

User research highlighted that: 

- collecting references was often time consuming and administratively burdensome 
- references often needed to be chased and an automated way to do this was beneficial  
- self-disclosure forms were required from the jobseeker and being able to request these details was useful 

## What we have done   

Within the existing applications management table and the ‘Interviewing’ tab, we have created a new pre-employment checks area which allows hiring staff to track, request and manage references and self-disclosure forms through Teaching Vacancies.  

This change allows hiring staff to: 
- utilise built in reference and self-disclosure forms to automatically trigger a request for these upon moving an applicant into interviewing 
- opt to send their own reference and self-disclosure forms, but track the status of these via the ATS 
- change their mind and swap to using the ATS reference and self-disclosure collection process after initially selecting no 
- send a reminder to referees and jobseekers if they do not complete the reference and/or self-disclosure form 
- apply different statuses of created, pending, received or completed to track the status of each request 
- manually mark requests as completed - if the ATS reference and self-disclosure collection process is used, we mark the requests as pending initially and mark them as received once replies are sent from referees and jobseekers so hiring staff check these and manually mark as complete 
- amend the email address for a referee if the wrong one is provided when the ATS reference collection process is used 
- the ability to download a copy of completed reference and self-disclosure forms 
- add notes onto the reference and/or self-disclosure screens, where needed  



{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The questions shown to hiring staff about collecting references upon moving applicant(s) into the interviewing state",
    img: { src: "question.png" }
  },
  {
    text: "The questions shown to hiring staff about self disclosure upon moving applicant(s) into the interviewing state",
    img: { src: "question2.png" }
  },
  {
    text: "The pre-interview checks tab active when hiring staff opt to not use the built in forms",
    img: { src: "pre.png" }
  },
  {
    text: "The reference page in the created state",
    img: { src: "ref.png" }
  },
  {
    text: "The self-disclosure form in the created state ",
    img: { src: "self.png" }
  },
  {
    text: "The pre-interview checks tab when hiring staff opt to use the built in forms",
    img: { src: "pre2.png" }
  },
  {
    text: "The reference page in the pending state ",
    img: { src: "ref2.png" }
  },
  {
    text: "The self-disclosure form in the pending state",
    img: { src: "self2.png" }
  },
  {
    text: "The reference page in the received state – hiring staff manually mark this as completed using the ‘Mark as complete’ button",
    img: { src: "received.png" }
  },
  {
    text: "The self-disclosure form in the completed state ",
    img: { src: "self3.png" }
  },
  {
    text: "The reference page where the request is declined by the referee ",
    img: { src: "ref3.png" }
  },
  {
    text: "The reference request email",
    img: { src: "email.png" }
  },
  {
    text: "The self-disclosure request email ",
    img: { src: "email2.png" }
  }
  ]
}) }}

