---
title: Sending additional jobseeker communication emails and adding an opt out process 
date: 2025-03-20
tags:
  - jobseeker
  - JN001
  - JN003
--- 

After reviewing our communications, we identified ways to better support jobseekers in applying for new roles through clearer guidance and timely reminders.

## What we have done
  
To improve the jobseeker experience and provide better support during their job search, we made the following updates to our standard service messages between October and December 2024:

- Introduced an email reminder sent 10 days before a job’s closing date to alert jobseekers who have saved but not applied for a role.
- Grouped job roles into four categories: teaching, middle leadership, leadership, and support/teaching assistant.
- Added links to guidance pages within emails for the teaching and middle leadership categories.
- Updated key emails (e.g. started but not finished applications, saved jobs, application submitted, and application rejected) to include links to guidance on applications, interviews, and interview lessons.

To extend support beyond standard messaging, we have also:

- Added an opt-out option for additional emails in the account tab.
- Begun sending timely recruitment emails highlighting peak periods for job listings (starting May 2025).

These changes help us communicate more effectively with jobseekers and offer tailored guidance to support their teaching careers. 

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The new your account page with a section on opting out of emails",
    img: { src: "account.png" }
  }
  ]
}) }}


