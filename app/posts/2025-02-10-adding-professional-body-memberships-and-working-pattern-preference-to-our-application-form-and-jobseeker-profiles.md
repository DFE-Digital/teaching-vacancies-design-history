---
title: Adding professional body memberships and working pattern preference to our application form and jobseeker profiles 
date: 2025-02-10
tags:
  - jobseekers
  - JN002
  - JN003
  - JN004
--- 

There were two unmet user needs identified through user research, around the need to highlight professional body memberships and working pattern preferences.  

User research found that: 

- hiring staff wanted to know if a jobseeker was a member of any professional bodies  
- jobseekers wanted to be able to tell hiring staff about any working pattern preferences within their application, so their expectations and availability was clear from the start 

## What we have done

We have made changes to both the application form and jobseeker profiles to accommodate these needs by: 

- creating a new professional body memberships section    
- adding a working pattern preference question to the application form personal details page  
- adding a working pattern preference question to the jobseeker profiles job preferences page 

These changes have been made to enable jobseekers to share any relevant information within their job application and/or jobseeker profile.  

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The new professional body memberships section in our application",
    img: { src: "1.png" }
  },
  {
    text: "the add a professional memebership page",
    img: { src: "2.png" }
  },
  {
    text: "The application form working pattern preference question",
    img: { src: "3.png" }
  },
  {
    text: "The new profiles working pattern page in job preferences ",
    img: { src: "4.png" }
  }
  ]
}) }}

