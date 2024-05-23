---
title: Updating all school roles categories
date: 2024-05-23
tags:
  - JN001
  - JN002
  - HN001
  - HN002
  
  - searching_for_a_job
  - candidate_profiles
  - hiring_staff
  - general_updats
---

We expanded the service to [allow hiring staff to list all school roles](/allowing-hiring-staff-to-list-support-roles-on-the-service/). We also [expanded the service to show all school roles when searching for a job](/expanding-the-service-to-show-all-school-roles//).

We received feedback about the phrasing of 'non-teaching' and categorisation of the new roles across the service. 

While schools appreciated the expansion to cover all education roles, we did receive some feedback that:

- the name 'Teaching Vacancies' may limit the appeal of all education roles on the service
- the term 'non-teaching' might be perceived as dismissive to roles outside of teaching
- the categorisation of roles was confusing, especially leadership and support roles

## Action taken from feedback

Based on this feedback, we reviewed and updated our service to better cater to all education roles and ensure a more inclusive and clear user experience.

### Revised role categories:

We changed:

- 'non-teaching' and 'teaching support' to group them into a single 'support' category to provide a more cohesive experience
- the 'teaching' category to 'teaching and leadership' to better reflect senior roles in teaching
- the 'other leadership roles' category so it sits within the 'teaching and leadership' category to better reflect user feedback and expectations of where this role type should be

### Updating the changes across the service

To reflect the revised categories, we have updated the:

- job search journey filters
- job alert creation form 
- hiring staff job listing journey
- candidate profiles feature 

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "Updating the job search filter to allow jobseekers to select teaching or support roles when looking for a job",
    img: { src: "job_search_journey.png" }
  },
   {
    text: "Updating the job alerts page to have two categories",
    img: { src: "job_alerts.png" }
  },
  {
    text: "Jobseekers can now select between teaching and support roles",
    img: { src: "candidate_profiles_js.png" }
  },
  {
    text: "Hiring staff can now search between teaching and support roles",
    img: { src: "candidate_profiles_js.png" }
  }
  ]
}) }}
