---
title: Create a job - making it easier to copy an existing job
description: Allowing hiring staff to copy an existing job listing when creating a new job.
date: 2021-11-20
---

{% from "figure/macro.njk" import appFigure with context %}

Creating new jobs is the most common task hiring staff users perform and we wanted to make it easier for them to do so. Users can currently copy an existing job by navigation to the job and copying it from there. Approximately 7% of vacancies are created in this way. 

We felt that the start of the create a job flow was like a sensible place to offer users an additional way to copy an existing job instead of starting from nothing.

## What we did

A new screen has been added to the beginning of the create a job flow.

{{ appFigure({
  image: {
    file: "copy-or-new.png",
    alt: "A screenshot asking users if they want to copy an existing job or start with a blank template"
  }
}) }}

If the user selects ‘Start with a blank template` they progress to the as-is flow for creating a  job.

Users who select ‘Copy an existing job’ and have twenty published jobs or fewer are taken to a screen listing their jobs as radio options.

{{ appFigure({
  image: {
    file: "radios.png",
    alt: "A screenshot asking users to select a job"
  }
}) }}

Users who select ‘Copy an existing job’ and have more than twenty published jobs are taken to a screen where they can search for an existing job to copy using an autocomplete. We show the closing date and if it's a Multi Academy Trust,  the school name, alongside each result as a way to help hiring staff identify the job.

{{ appFigure({
  image: {
    file: "autocomplete.png",
    alt: "A screenshot asking users to search for a job"
  }
}) }}

Once a job has been selected, the user is prompted to supply additional details before they can publish the new job.

{{ appFigure({
  image: {
    file: "new-details.png",
    alt: "A screenshot asking users to input new job details"
  }
}) }}

## Things to consider

Is 20 jobs the ideal number of jobs to use as a cut off between displaying existing jobs as a list of radios or searching in an autocomplete? A long list of radios doesn't present a usability issue, and is arguably a simpler experience than searching in an autocomplete. Analysis might show that we are excluding a large number of users with between 20 and 30 jobs for example and we could bump up the threshold.