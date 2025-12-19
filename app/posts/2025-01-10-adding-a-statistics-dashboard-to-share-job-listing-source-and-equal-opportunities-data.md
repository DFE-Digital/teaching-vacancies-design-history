---
title: Adding a statistics dashboard to share job listing source and equal opportunities data  
date: 2025-01-10
tags:
  - hiring_staff
  - jobseekers
  - HN001
  - HN002
  - JN002
--- 

During a discovery into building an applicant tracking system, a user need was identified to provide better and more meaningful data to hiring staff to support them with their recruitment practices.

## Key findings

User research highlighted the below user needs: 

- I need to understand how my listing is performing so I can assess if we need to change or improve the listing 
- I want to know where applicants are coming from, so I can assess where we should post our vacancies 
- I need to access equal opportunities data so I can monitor the inclusivity of our recruitment practices  

## What we have done

We already had a statistics tab on each individual job listing, but this was missing key information on where the vacancy views were coming from (which is known as source data).  

The source data was also required at a school level to assess the performance of different services in generating views or applicants across an academic year.  

By having a statistics dashboard at school level, we could share the equal opportunities data we collect with hiring staff. This is helpful because we are unable to provide this at a more granular level, due to the need to protect applicant anonymity.  

Due to this, we have made the following changes: 
- added in a job source chart to each individual job listing statistics tab 
- created a new statistics dashboard to show school level job source and equal opportunities data 

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The previous statistics tab on an individual job listing",
    img: { src: "statistics.png" }
  },
  {
    text: "The new statistics tab on an individual job listing ",
    img: { src: "new.png" }
  },
  {
    text: "The school level statistics dashboard – job source page",
    img: { src: "statistics2.png" }
  },
  {
    text: "The school level statistics dashboard – equal opportunities page, chart view",
    img: { src: "schools.png" }
  },
  {
    text: "The school level statistics dashboard – equal opportunities page, accessible view ",
    img: { src: "schools2.png" }
  }
  ]
}) }}

