---
title: 'A/B test: job alert banner placement'
description: Making the banner blue and sticky made it more visible.
date: 2021-01-29
tags:
  - job_alerts
---

{% from "figure/macro.njk" import appFigure with context %}

Job alerts allow us to maintain longer term, ‘sticky’ relationships with jobseekers beyond their first visit to the service. We wanted to find ways to increase the proportion of jobseekers who create job alerts in order to grow the pool of jobseekers who we notify about relevant new vacancies when they are published.

## Hypothesis

If we position the job alert banner at the bottom of the search results page instead of the top, make it blue instead of white and make it sticky then more jobseekers will create an alert.

## Who we tested with

We tested with 25,406 users between 25th January and 29th January 2021. 50% of users were assigned each variant.

## Findings

If the test were to be repeated, we would expect:

* 1.39% +/- 0.20% of jobseekers to create a job alert if shown the blue, sticky banner at the bottom of the search results screen
* 0.81% +/- 0.16% of jobseekers to create a job alert if shown the white, non-sticky banner at the top of the search results screen

The sticky, blue banner design did appear to be more visible.

## Screenshots

These are the two banner designs we tested.

{{ appFigure({
  image: {
    file: "job-alert-ab-test.png",
    alt: "Two screenshots of the job alert banners"
   },
  caption: "Left is the the white, non-sticky banner and on the right is the blue, sticky banner."
}) }}

## Next steps

Based on these findings, we decided to display the blue, sticky banner at the bottom of search results to all users.
