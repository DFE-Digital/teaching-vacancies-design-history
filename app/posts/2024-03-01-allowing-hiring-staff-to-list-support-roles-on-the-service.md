---
title: Allowing hiring staff to list all school roles on the service
date: 2024-04-10
tags:
  - HN001
  - HN002
  
  - searching_for_a_job
  - hiring_staff
  - candidate_profiles
---

Previously, hiring staff could only list teaching and teaching support roles on the service.

To help hiring staff recruit for all roles in schools we are expanding the service to allow schools to advertise all roles in a school. Research was carried out to understand other roles in schools and how they could be categorised. We are introducing 3 categories for the types of roles hiring staff can now list. These are:

- Teaching 
- Teaching support
- Non-teaching support

We have [created our first mission patch](/mission-patches/) dedicated to the release of all school roles.

## Job role categories

The Teaching category will include the follow roles:

- Teacher
- Head of year or phase
- Head of department or curriculum
- Assistant headteacher
- Deputy headteacher
- Headteacher
- SENDCo (special educational needs and disabilities coordinator)

The Teaching support category will include the follow roles:

- Teaching assistant
- HLTA (Higher level teaching assistant)
- Learning support or cover supervisor
- Other teaching support

The Non-teaching support category will include the follow role types:

- Administration, HR, data and finance
- Catering, cleaning and site management
- IT support
- Pastoral, health and welfare
- Other leadership roles
- Other support roles

## Integrating this across the service

The main journey impacted by this change for hiring staff is the job listing journey, which now allows hiring staff to select any role or role type.

Hiring staff can now also use the  [candidate profiles](/categories/candidate_profiles) feature to find candidates for teaching, teaching support and non-teaching roles if candidates have set up a profile.

We will be monitoring the impact of expanding the service to cater for all school roles.

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
