---
title: 'A/B test: an inline form to encourage job alert creators to create an account'
description: An inline form encouraged more job alert creators to create an account.
date: 2021-03-04
---

{% from "figure/macro.njk" import appFigure with context %}

When jobseekers create a job alert, they are not required to create an account. This is so that we don’t discourage them from creating an alert by placing an unnecessary extra step in the journey. However, if they do create an account, then they have access to a greater range of functionality - better management of job alerts, and also the ability to save and apply for jobs. So, we wanted to encourage as many job alert creators as possible to create an account without requiring them to do so.

## Hypothesis

If we allow job alert creators to create accounts from a form within the job alert confirmation screen itself, instead of just linking to it then more of them will create an account.

## Who we tested with

We tested with 1,675 job alert creators between 18th February and 4th March 2021. 50% of users were assigned each variant.

## Findings

If the test were to be repeated, we would expect:

* 34% +/- 4% of job alert creators to create an account if they were shown a link to the account creation form
* 44% +/- 4% of job alert creators to create an account if they were shown an inline account creation form

At February’s jobseeker traffic levels, this difference would correspond to a total of an additional 400 jobseeker accounts being created per month.

## Screenshots

These are the three designs we tested.

{{ appFigure({
  image: {
    file: "account-creation.png",
    alt: "A screenshot of the account sign up screen" 
   },
  caption: "On the left, a link to to create an account. On the right, An inline form to cerate an account."
}) }}

## Next steps

Based on these findings, we decided to display the inline account creation to all job alert creators after they finished creating an alert. We also agreed to iterate the form design further.
