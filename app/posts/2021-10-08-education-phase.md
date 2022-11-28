---
title: Create a job - adding education phases
description: Using the education phase to help organisations specify subject and key stages.
date: 2021-10-08
tags:
  - hiring_staff
---

{% from "figure/macro.njk" import appFigure with context %}

This work was inspired by an insight gathered during user research. We observed that hiring staff were struggling to specify that the job they were listing was for a primary school position.

## Hypothesis

We suspected the create a job flow was biased towards secondary school teaching jobs.

* The hint text under the job title field only mentioned secondary schools
* The primary key stages were hidden amongst the subjects autocomplete, which were for the most part all secondary subjects. Our hypothesis was, hiring staff would not know to look there

{{ appFigure({
  image: {
    file: "original-job-details.png",
    alt: "A screenshot of our original job details step"
  },
  caption: "The original job details step when creating a job."
}) }}

## What we did

We already knew an organisation's education phase from the data provided by [Get Information About Schools](https://www.get-information-schools.service.gov.uk/) (GIAS). We decided to use our existing knowledge of the users education phase to tailor the form to hiring staff needs.

### For jobs at Primary phase organisations

Primary phase organisations are now presented with inset text that plays back the phase to the user, relevant hint text for the job title field and are only presented with key stages to select from.

{{ appFigure({
  image: {
    file: "primary.png",
    alt: "A screenshot of the job details step for Primary phase users"
  }
}) }}

### For jobs at Secondary phase organisations

Secondary and 16-19 phase organisations are now presented with inset text that plays back the phase to the user (we specify a 16-19 phase if appropriate), relevant hint text for the job title field and only presented with secondary subjects to select from.

{{ appFigure({
  image: {
    file: "secondary.png",
    alt: "A screenshot of the job details step for Secondary phase users"
  }
}) }}

### For jobs at all-through organisations

All-through organisations presented a challenge. The GIAS data didn’t help us determine what phase the job would cover yet we knew it was unlikely to cover more than one phase.

Users who posted jobs in this scenario are presented with an additional question that precedes the job details step where we ask them to specify the phase the role will cover.

{{ appFigure({
  image: {
    file: "more-than-one-phase-1.png",
    alt: "A screenshot of the job details step asking about education phase"
  }
}) }}

The answer to this question ensures that the following job details step is set up correctly.

{{ appFigure({
  image: {
    file: "more-than-one-phase-2.png",
    alt: "A screenshot of the job details step asking about education phase"
  }
}) }}

The job details step now includes inset text with a link allowing users to change the phase they had previously selected if they had made a mistake.

If the user had specified that the role would cover more than one phase we offer them both key stages and subject to choose from, but the options are now decoupled from each other for easier identification.
