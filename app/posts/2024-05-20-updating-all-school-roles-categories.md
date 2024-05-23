---
title: Updating all school role categories
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

Recently, we expanded the service to [allow hiring staff to start listing all school roles on the service](/allowing-hiring-staff-to-list-support-roles-on-the-service/). We also [expanded the service to show all school roles when searching for a job](/expanding-the-service-to-show-all-school-roles//).

Following the launch of the All School Roles (ASR) feature, we have received feedback regarding the phrasing of 'non-teaching' and categorisation of the new roles across the service. 

While schools appreciated the expansion to cover all education roles, we did receive some feedback such as:

- The name 'Teaching Vacancies' may limit the appeal of all education roles on the service
- The term 'non-teaching' might be perceived as dismissive to roles outside of teaching
- The categorisation of roles was confusing, especially leadership roles and support functions.

## Action taken from feedback

Based on this feedback, we have reviewed and updated our service to better cater to all education roles and ensure a more inclusive and clear user experience.

### Revised role categories:

- 'Non-teaching' and 'Teaching support' have been merged into a single 'Support' category to provide a more cohesive experience for people
- The 'Teaching' category has been changed to 'Teaching & leadership' to better reflect senior roles in teaching
- The 'other leadership roles' category has been moved to the 'Teaching & leadership' category to better reflect user feedback and expectations of where this role type should be.

### Updating the changes across the service

The following changes have been implemented across the service to reflect the revised categories:

- Job search journey filters have been updated 
- Job alert creation form has been updated 
- Hiring staff job listing journey
- Candidate profiles feature 

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
