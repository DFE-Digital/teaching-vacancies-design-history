---
title: 'A/B test: requiring users to be more specific when creating a job alert'
description: Increasing job alert quality doesn’t need to sacrifice traffic volume.
date: 2021-08-07
related:
  items:
  - text: Performance review of job alerts feature (November 2020)
    href: https://docs.google.com/presentation/d/13sa9poO2PSCgPT1D2GmSgcYsjRD-v4P7h9V7xjDKFL0/edit?usp=sharing
tags:
  - job_alerts
---
{% from "figure/macro.njk" import appFigure with context %}

Initial analysis of the performance of our job alerts feature found that when users set up job alerts with less specific criteria - i.e. not specifying a location or what kind of job they were looking for, or not specifying anything at all - when they later received emails triggered by that alert, they were less likely to click on a vacancy included in the email. We assumed that this was because the vacancies in the email were likely to be less relevant to them if they had been less specific about what they were looking for.

We carried out an A:B test to see whether using validation rules to require users to specify a location and at least one other thing about the job would result in a higher email clickthrough rate.

However, we were also concerned that requiring users to do this might deter some users from creating a job alert at all. So, we also wanted to measure the overall impact on the total number of clicks on vacancies in job alert emails - would there be a net gain in traffic to vacancies despite the expected reduction in the number of job alerts created? Would the increase in the quality of alerts created be worth the reduction in quantity?

## Hypothesis

 If we require users to be more specific about the jobs they are interested in when they create a job alert then they will receive more relevant job alert emails without reducing the total volume of traffic generated by job alert emails.

## Who we tested with

We tested with 270,596 users between 25th June and 7th August 2021. 50% of users were assigned each variant. These users were then sent a total of 6,094 emails during this period.

## Findings

If the test were to be repeated, we would expect:

* 9.7 +/- 1.0% of job alert emails to be clicked on when users are not required to be specific - a total of 327 +/- 34 emails
* 12.3 +/- 1.2% of job alert emails to be clicked on when users are required to be specific - a total of 335 +/- 33 emails

So, requiring users to be more specific does improve the email clickthrough rate, with no net increase or reduction in the total number of clicks.

## Screenshots

The validation error displayed if a user attempts to create a job alert which is not specific enough is shown below.

{{ appFigure({
  image: {
    file: "job-alert-validation.png",
    alt: "A screenshot of the job alert screen including error validation"
   }
}) }}

## Next steps

Based on these findings, we decided to require all users to be more specific about their job alerts.
