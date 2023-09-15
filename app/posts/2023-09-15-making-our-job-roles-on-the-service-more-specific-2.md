---
title: Making our job roles on the service more specific 2
date: 2023-09-15
tags:
  - JN001
  - JN001
  
  - searching_for_a_job
---

We recently [made our job roles more specific on our profiles feature](/making-our-job-roles-on-the-service-more-specific/).

We have now launched these more specific job roles across the service.

Research indicated that splitting out the two job role filters:

- Headteacher, deputy or assistant headteacher
- Head of year, department, curriculum or phase

To more specific filters:
- Head of year or phase
- Head of department or curriculum
- Assistant headteacher
- Deputy headteacher
- Headteacher

Would provide a much better experience for users as the variation between the roles is significant.

Users can now search for jobs and set up job alerts with these more specific job roles. It also allows schools to be clearer on the job role when listing jobs on the service. Existing subscriptions of job alerts and jobs posted on the service will be mapped accordingly with these more specific roles.

We will be monitoring how this impacts the job search journey.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Allowing jobseekers to be more specific about the roles they are interested in when searching for a job",
    img: { src: "example-of-more-specific-roles-on-job-search.png" }
  },
  {
    text: "Allowing jobseekers to be more specific about the roles they are interested in when setting up a job alert",
    img: { src: "example-of-more-specific-roles-on-job-alerts.png" }
  },
  {
    text: "Extending the job roles schools can select when posting a job",
    img: { src: "example-of-more-specific-roles-on-school-jobs.png" }
  }
  ]
}) }}
