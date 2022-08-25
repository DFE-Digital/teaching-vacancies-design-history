---
title: Stopping draft job listings from having a publish date in the past
date: 2022-08-25
tags:
  - HN001
---

It’s currently possible to create a [draft job listing with a publish date in the past](/handling-draft-job-listings-with-a-publish-date-in-the-past).

To stop this from happening we moved the publish date, closing date and start date to a separate page which is shown at the point of publishing.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Check"
  }, {
    text: "Publish"
  }, {
    text: "Confirmation"
  }, {
    text: "Job listing details"
  }]
}) }}
