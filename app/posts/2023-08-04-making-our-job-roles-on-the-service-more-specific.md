---
title: Making our job roles on the service more specific
date: 2023-08-04
tags:
  - JN001
  
  - searching_for_a_job
---

After several rounds of user research dating back to November 2022, we have started to explore how we can make our job roles more specific across the service for middle leaders. Research indicated that splitting out the two job role filters:

- Headteacher, deputy or assistant headteacher
- Head of year, department, curriculum or phase

To more specific filters:
- Head of year or phase
- Head of department or curriculum
- Assistant headteacher
- Deputy headteacher
- Headteacher

Would provide a much better experience for users as the variation between the roles is significant.

We will be launching this update on our [profiles feature](creating-a-jobseeker-profile/) initially by allowing jobseekers to select the more specific roles on their job preferences before expanding it to the wider service.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Allowing jobseekers to be more specific about the roles they are interested in when adding preferences to their profile",
    img: { src: "example-of-more-specific-roles-on-profile-preferences.png" }
  }]
}) }}
