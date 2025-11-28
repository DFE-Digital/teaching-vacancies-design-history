---
title: Changing job search filter design on mobile devices 
date: 2025-05-01
tags:
  - jobseekers
  - JN002
--- 

Following a review of feedback submitted to the service, we found that jobseekers were frequently asking for filters that already existed. This suggested that the filters were not easy to find, particularly when using a mobile device. We therefore hypothesised that the filter button was not sufficiently visible on smaller screens.

## What we have done
  
We updated the filter button design on the job search page to improve visibility and usability by:

- Changing the existing blue hyperlink into a full-width button to make it more prominent.
- Moving the filter button above the keyword and location fields to ensure it appears earlier in the visual hierarchy.
- displaying applied filters as tags, making it clear which filters have been selected during a search.

## What we expect

We expect these changes to make it easier for jobseekers to find and use search filters on mobile devices. We will monitor usage and analyse the impact once the changes have been live to determine whether filter usage from mobile users has increased.

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The previous filter design on mobile ",
    img: { src: "old.png" }
  },
  {
    text: "The new filter design on mobile with no filters applied",
    img: { src: "new.png" }
  }
  ]
}) }}

