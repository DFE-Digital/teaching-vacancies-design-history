---
title: Copying a job listing iteration
date: 2022-07-14
tags:
  - HN001
---

Research shows that users find that [copying a job listing](/copying-a-job/) is confusing and unintuitive.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Measuring success

We’ll consider these changes to be successful if:

- the rate in which a job listing is copied increases
- the feedback about creating a job listing is more positive
- the time to create a job listing is reduced

## What we changed

### Removing the ability to copy when creating a job listing

Research shows that users do not think they’ll be able to copy a job listing after clicking ‘Create job listing’.

They actually expect to copy a job listing by navigating to the list of job listings.

When users are selecting a job listing to copy, they can only see the:

- job title
- closing date
- organisation name

This is not necessarily enough information for users to be sure which job listing they want to copy.

To simplify this, we:

- removed the option to copy a job listing from within the flow for creating a job listing
- added a ‘Copy job listing’ link to each job listing in the list

### Helping users understand what they need to do once they copy a job listing

Previously, once a user copied a job listing they were taken to a page titled ‘New job listing details’ with fields for:

- Job title (prefilled)
- Date job will be listed
- Closing date
- Time application is due
- Date job starts (optional)

But research shows that users are confused and think they have to go through the entire flow.

Also, it’s not clear that the job listing has not been copied at this stage. It’s only saved once this information has been submitted.

So, we changed this so that when users copy a job listing:

- the job listing is saved
- we show users an interstitial page

The page has:

- a h1 heading which says ‘Job listing copied’
- a paragraph which says ‘You need to update the:’
- bullets for ‘job title’, ‘publish and closing dates’, ‘start date’

The user is then taken through each step before landing on the ‘check answers’ page.

## Further considerations

We want to consider:

- if there are other questions the user needs to update such as salary
- whether it’s better to take users straight to the check answers page or task list with suggestions of which questions need to be updated

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Job listings"
  }, {
    text: "Interstitial",
    img: { src: "copied.png" }
  }, {
    text: "Title"
  }, {
    text: "Publish and closing dates",
    img: { src: "publish-closing-dates.png" }
  }, {
    text: "Start date"
  }, {
    text: "Check answers",
    img: { src: "check.png" }
  }, {
    text: "Confirmation"
  }]
}) }}
