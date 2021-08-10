---
title: Automatically detect gaps in employment
description: An iteration on how we ask for details about gaps in employment 
date: 2021-07-30
related:
  items:
  - text: Jira ticket
    href: https://dfedigital.atlassian.net/browse/TEVA-2568
  - text: Design assets
    href: https://www.figma.com/file/cYfTWCXl9ouJapY2Zv2tu5/Sprint-84?node-id=80%3A153
---

{% from "figure/macro.njk" import appFigure with context %}

We have recently introduced the ability for the system to automatically detect any gaps in employment of 3 months or more on a jobseeker’s application form.

This will highlight the gap in their employment history and encourage them to enter a reason for that gap, or to enter a new role within that period.

The gap will also be highlighted to the hiring staff who review the application, clearly indicating its presence and duration so that they can follow this up in the application process.

## Updating the Current role and employment history page

### The problem

User research and discussions with the Safeguarding team highlighted a need for hiring staff to be made aware of any gaps in employment greater than 3 months in order to meet with the [Keeping Children Safe in Education guidance](https://www.gov.uk/government/publications/keeping-children-safe-in-education--2).  Prior to this feature being implemented, jobseekers were asked to declare if they had any gaps in their employment history of 3 months or more. A review of the application feature indicated that jobseekers were often declaring gaps that were shorter than 3 months, or were not declaring longer gaps at all.
This meant that hiring staff were unable to easily identify any gaps in employment that required further explanation.

### User needs

In order to comply with safer recruitment requirements, hiring staff need to identify and justify any gaps in a jobseeker’s employment history that are longer than 3 months.
Given that this information was not being accurately supplied by jobseekers in the previous iteration there was a need for the service to automatically detect gaps of 3 months or more, and allow the jobseeker to provide a reason for each break in their employment history.

## How it works

### Jobseeker view

The jobseeker is required to provide start and end dates for every role that they add to their employment history (or mark a role as their current role in which case an end date is not required).

The gap between the end date of each role and the start of the subsequent role is calculated (or the end of the most recent role and the current date if the jobseeker is currently out of work) and, if this is 3 months or longer, an inset message is displayed highlighting this gap. 

{{ appFigure({
  image: {
    file: "1.png",
    alt: "Current role and employment history"
  }
}) }}

The user is presented with the options to add another job to their employment history or to provide a reason for this break in employment. If the jobseeker does not enter a reason then the gap will be displayed without an associated reason.

If they choose to provide a reason for this break, they are taken to a new screen where they enter their reason. The dates are pre-filled based on the roles entered in their employment history; these can be edited by the user when providing additional details.

{{ appFigure({
  image: {
    file: "2.png",
    alt: "Please tell us what you were doing over this period"
  }
}) }}

The jobseeker does not have to enter a reason, but if they do this is displayed on the Review your application page in the Current role and employment history section.

{{ appFigure({
  image: {
    file: "3.png",
    alt: "Current role and employment history"
  }
}) }}

### Hiring staff view

The image below shows the hiring staff view of an application received with employment gaps present. If the jobseeker has provided a reason for the break then that is displayed beneath the heading, if no reason is provided then this line is not present.

{{ appFigure({
  image: {
    file: "4.png",
    alt: "Current role and employment history"
  }
}) }}

