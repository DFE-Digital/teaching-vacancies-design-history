---
title: Adding guidance for international teachers on search result pages
date: 2023-04-20
tags:
  - JN001
  
  - searching_for_a_job
---

We’ve been exploring how we can help international teachers that may be viewing roles on our service. International teachers are unlikely to be given a teaching job in England unless they have qualified teacher status. 

To help make this clearer to international teachers, we’ve updated our search results page to feature an inset text component with guidance before search results are shown. We have also added guidance to the apply for a job section on all vacancies.

Both updates include a link to [guidance for international citizens interested in teaching or training to teach in England](https://getintoteaching.education.gov.uk/non-uk-teachers).

We will be monitoring the engagement of this to understand if it is helping international teachers. 

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Adding an inset component to the search results page",
    img: { src: "help1.png" }
  },
  {
    text: "Guidance in the apply for a job section",
    img: { src: "help2.png" }
  }]
}) }}
