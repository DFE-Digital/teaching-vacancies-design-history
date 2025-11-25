---
title: Adding a flexible working opportunities section to job adverts 
date: 2025-02-25
tags:
  - hiring_staff
  - HN001
  - HN003
  - JN004
--- 

To promote flexible working and improve teacher recruitment and retention, we introduced a dedicated section in the job listing journey to allow hiring staff to showcase available opportunities for any flexible roles. 

## What we did initially
  
The flexible working concept was launched in October 2024. The introduction of the flexible working opportunities textarea on the job listing journey allowed us to: 
 
- remove the reference to flexible working opportunities in the ‘What does your school offer’ question hint text to encourage staff to place this information in the new ‘flexible working opportunities’ textarea 
- add a ‘Flexible working opportunities’ heading to the job advert page if anything was added to the job listing textarea

## Analysis of iteration 1

After adding the flexible working textarea, analysis of its usage showed that hiring staff were typing ‘N/A’ or ‘Not applicable’ despite this being optional. This meant that job adverts were being published with a flexible working opportunities heading with 'N/A’ or ‘Not applicable’.   

## What we changed

After the additional insights from data analysis on the usage of the new flexible working box, we altered the design to: 

- remove the word ‘(optional)’ from the question. 
- improve the design to be a radio button, with yes or no response options, to improve clarity on the fact this was an optional field.  
- make the provide details textarea mandatory if yes to flexible working is selected

This has since removed confusion as to what roles are flexible or not.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The updated design, in February 2025, to be a radio button approach ",
    img: { src: "radio.png" }
  }
  ]
}) }}


