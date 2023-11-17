---
title: Showing if a role can offer visa sponsorship 
date: 2023-10-20
tags:
  - JN001
  
  - searching_for_a_job
---

Recent user research with jobseekers indicated that providing a way to know if a role could offer them visa sponsorship would be beneficial.

To help this, we are now asking schools when posting a role if visa sponsorship is available or not.

We use this information to indicate to jobseekers in the search results if a role can offer sponsorship in the summary list for each role to make it easy for candidates to quickly see if the course has visa sponsorship available or not.

We will also show if 'Visa sponsorship' is available when viewing a role in the initial summary list alongside job role, key stage, working pattern, contract type and salary.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Asking schools if they can offer skilled worker sponsorship when posting a job",
    img: { src: "asking-schools-if-they-can-sponsor-when-posting-a-job-advert.png" }
  },
  {
    text: "Showing if jobs can offer visa sponsorship on the search results page",
    img: { src: "showing-if-jobs-can-offer-visa-sponsorship-on-the-search-results-page.png" }
  },
  {
    text: "Showing if jobs can offer visa sponsorship on individual job pages",
    img: { src: "showing-if-jobs-can-offer-visa-sponsorship.png" }
  }
  ]
}) }}
