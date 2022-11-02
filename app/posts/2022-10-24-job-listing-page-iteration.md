---
title: Job listing page iteration
date: 2022-10-24
tags:
  - JN001
  - JN004
---

{% from "figure/macro.njk" import appFigure with context %}

We recently redesigned how hiring staff [create job listings](/creating-a-job-listing-iteration-2).

As a result, we redesigned the job listing page to reflect the new structure and make other improvements.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

### Removing unnecessary styles

We removed styles that do not follow the GOV.UK Design System.

For example:

- we changed ‘Get job alert for similar jobs’ and ‘Save this job for later’ into standard buttons
- we removed the grey bottom borders used on h2 headings
- we removed the timeline styles for the publish, closing and job start date

### Removing the ‘Similar jobs’ section

We removed the ‘Similar jobs nearby’ section because it does not show relevant suggestions.

In future, we’ll add this functionality back in when we can reliably show relevant suggestions.

### Removing accordions for schools within a trust

Previously, on job listings at multiple schools within a trust, we showed details about each school within an accordion.

But to save space and make the page easier to read, we’ve changed this into a list of links to the individual [school profile pages](/finding-schools).

### Adding an ‘Apply for job’ call to action

Previously, the call to action to apply for the job was in the middle of the page.

This makes it hard to spot, so we added an ‘Apply for job’ button to the top of the page.

Clicking the button works differently depending on how hiring staff have set up the application process.

| How applications are made | What the ‘Apply for job’ button does |
|------------|----------|
| Through the onlone application form | Takes the user to the first step of application form |
| Downloading an application form | Scrolls the user down to the section to download the application form |
| Clicking a link to an external website | Scrolls the user down to the section with a link to the external website |

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Job listing",
    img: { src: "job-listing.png" }
  }, {
    text: "Job listing - when jobseeker must apply with a form they download",
    img: { src: "job-listing--pdf.png" }
  }, {
    text: "Job listing - when jobseeker must apply through an external website",
    img: { src: "job-listing--website.png" }
  }, {
    text: "Job listing - listed at multiple schools",
    img: { src: "job-listing--multiple-schools.png" }
  }, {
    text: "Job listing - closed",
    img: { src: "job-listing--closed.png" }
  }]
}) }}
