---
title: Expanding the service to show all school roles when searching for a job
date: 2024-03-02
tags:
  - JS001
  - JS002
  
  - searching_for_a_job
  - candidate_profiles
---

Recently, we allowed [hiring staff to start listing all school roles on the service](/allowing-hiring-staff-to-list-support-roles-on-the-service/).

To help people looking for jobs in schools, we've made some changes to cater for a wider audience.

Changes to the job search journey include:

- Introducing a new design to the job search filter
- Showing all roles in the job search journey
- Updating the job alerts page to include all school roles
- Updating the home page accordions to include all school roles
- A condensed job advert page for non-teaching support roles
- Expanding the candidate profiles feature to anyone interested in working in a school

## Introducing a new design to the job search filter 

Mention the find and apply for a tutor service as inspiration...



## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Allowing hiring staff to select teaching, teaching support and non-teaching roles when listing a job",
    img: { src: "type-of-job.png" }
  },
  {
    text: "Expanding the candidate profiles feature to include all school roles",
    img: { src: "candidate-profiles.png" }
  }
  ]
}) }}
