---
title: Changing the interstitial after copying a job listing
date: 2022-08-25
tags:
  - HN001
---

We recently [added an interstitial page that’s shown after copying a job listing](/copying-a-job-listing-iteration).

We did not mention which job listing was copied.

To make this clearer, we added a paragraph which says, for example, “You’ve copied the ‘Maths teacher’”.

We also changed ‘You need to update the:’ to ‘Next, you’ll be asked to update the:’

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Interstitial"
  }]
}) }}
