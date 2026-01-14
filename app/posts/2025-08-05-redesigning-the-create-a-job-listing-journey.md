---
title: Redesigning the create a job listing journey 
date: 2025-05-08
tags:
  - hiring_staff
  - HN001
--- 

After user testing in 2024, we identified pain points within the create a job listing journey around knowing what questions were going to be asked in the journey and a progress tracker.   

## Key findings

User research highlighted several issues with the previous job listing journey design: 

- hiring staff were not clear what they were going to be asked within the job listing journey or did not know what they would be able to do such as if they could upload additional documents to sit alongisde the job advertisement 
- the ordering of the job listing journey was not always logical and caused confusion meaning hiring staff entered information in the wrong area or ended up giving the same information twice 
- hiring staff could not clearly see how far into the job listing journey they were and how many steps remained 

## What we have done

Considering the length of the job listing journey and the likelihood of hiring staff completing it over multiple sessions, we decided to follow the GOV.UK Design System task list component. 

This change allows: 
- a clearer breakdown of tasks, making it easy to see what’s completed and what still needs attention 
- hiring staff can leave and return without confusion, always knowing exactly where they left off 
- more flexibility, letting hiring staff complete sections in any order while providing better visibility of what each section includes upfront  

Alongside the task list component, we have also: 

- added a start page at the beginning of the job listing journey to outline the key sections and questions that will be covered 
- re-ordered parts of the listing journey to improve the flow of questions and reduce information being given repetitively  
- combined the contract type and working patterns pages together instead of being separate  

By implementing the above changes, hiring staff should be able to complete the job listing journey more easily and flexibly. This is a significant change for our users, and we’ve now implemented these changes in the live service. We want to do further user research to ensure the new design meets their needs and continues to improve their experience. 

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The new start page",
    img: { src: "start.png" }
  },
  {
    text: "The previous contract type page",
    img: { src: "previous1.png" }
  },
  {
    text: "The previous working patterns page",
    img: { src: "previous2.png" }
  },
  {
    text: "The new, combined, contract type and working patterns page",
    img: { src: "new.png" }
  },
  {
    text: "The new task list design",
    img: { src: "newtask.png" }
  } 
  ]
}) }}

