---
title: Allowing hiring staff to list support roles on the service
date: 2024-02-28
tags:
  - HN001
  - HN002
  
  - searching_for_a_job
  - hiring_staff
  - candidate_profiles
---

Previously, hiring staff could only listing teaching and teaching support roles on the service.

To help hiring staff recruit for all roles in schools, we are expanding the service to allow schools to advertise any type of role in a school. To cater for these new roles on the service, research was carried out to understand the types of roles in schools and how they could be categorised. We are introducing 3 categories for the types of jobs hiring staff can now list. These are:

- Teaching
- Teaching support
- Non-teaching support

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
