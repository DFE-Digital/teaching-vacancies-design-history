---
title: Sharing equality and diversity data
description: We enabled MATs to list jobs at schools in their trust and at the trust head office.
date: 2020-07-01
related:
  items:
  - text: MAT user research report January 2020
    href: https://docs.google.com/presentation/d/1oe2cPGSXS1GIULNCnS86oGImmgyIxFQ6A-gHEc3oCMY/edit#slide=id.g76c9fc18ce_0_287
  - text: Hiring staff application testing November 2020
    href: https://docs.google.com/presentation/d/1L0cjrRs0Vyc1w7IZvejJzbrkgSRBcvknISN63VbBpJw/edit?usp=sharing
---

{% from "figure/macro.njk" import appFigure with context %}

## Introduction

### What are multi-academy trusts?

Multi-academy trusts (MATs) are not-for-profit companies, who run a group of academies across a variety of locations.

An academy is a type of school which receives direct funding from the government. All academies are part of an academy trust, whether that is a MAT or single academy trust (SAT). Academies do not charge fees, but they have more control over how they do things such as how they set their curriculum. They must however, follow the same rules on admissions, special education needs and exclusions as other state schools and students sit the same exams.

The Trust employs their own staff and works with appointed trustees who are responsible for the performance of the academies within the trust.

###  How many MATs are there in England and how many schools do they represent in scope for our service?

MATs in England currently account for 39% of schools. They vary widely in size.

* MATs with 2-5 schools: 712 schools
* MATs with 6-10 schools: 288 schools
* MATs with 11-120 schools: 146 schools
* MATs with 21+ schools: 53 schools

As academisation continues, MATs are predicted to grow in size and increase in number.

###  Why was the service not fit for purpose for MATs?

Our service was designed for schools to list teaching roles based at the school in question.

However, it was not possible for a MAT hiring staff user to easily list jobs at schools in their trust or recruit to MAT-level roles using Teaching Vacancies. Previously, they could only be associated with a school and list a job at that school. As a workaround, MAT hiring staff were associated with multiple schools, but had to log in and out of each school in order to list a job.

## User needs

We identified some of the following user needs in user research conducted in January-February 2020 and then May-June 2020.  

As MAT hiring staff, I need to:
* post jobs on behalf of schools in my MAT, so they don't have to.
* manage (create, edit, archive) jobs for all the schools in my MAT and MAT-wide jobs in one place, so that I can work efficiently.
* navigate between schools I manage without logging out, so that I can work efficiently.
* edit a job posted by another user in my team, so that my team can work efficiently.
* copy a job from one academy to another, so that I can work efficiently.
* to list a job that is based at the MAT head or regional office so that I can recruit staff into MAT-wide roles.
* to list a job’s location as multiple schools so that I can recruit staff into these roles.
* to see all live vacancies in my MAT/team organised by school so that I can track their activity and provide support where needed.
* to see all historical (passed deadline) vacancies in my MAT/team organised by school so that I can track their activity and provide support where needed.

As a jobseeker, I need to clearly see at which school(s) the role would be based, so I can determine if I want to apply.

## The feature

When MAT hiring staff users sign in, they have to select the schools in their trust that they want to list jobs at. This means that each hiring staff can select the schools they are responsible for when it comes to recruitment.

{{ appFigure({
  image: {
    file: "manage-view.png",
    alt: "A screenshot of the manage your view screen"
  }
}) }}

When they get to their dashboard, they can filter the jobs by the schools on the left hand side.

{{ appFigure({
  image: {
    file: "legacy-jobs.png",
    alt: "A screenshot of the legacy manage jobs screen"
  }
}) }}

{{ appFigure({
  image: {
    file: "legacy-jobs-filter.png",
    alt: "A screenshot of the legacy manage jobs screen with the filters open"
  }
}) }}

When listing a job, they can either set the location as:

* One school in their trust
* More than one school in their trust
* Trust head office

{{ appFigure({
  image: {
    file: "job-location.png",
    alt: "A screenshot of the job location screen"
  }
}) }}

This is an example of a trust vacancy:

{{ appFigure({
  image: {
    file: "listing.png",
    alt: "A screenshot of a Trust job listing"
  }
}) }}

{{ appFigure({
  image: {
    file: "listing-continued.png",
    alt: "A screenshot of a Trust job listing"
  }
}) }}

## Business rules

MAT users can:

1. add schools within their trust to their Teaching Vacancies account.
2. list a teaching job at one or more of the schools in their trust.
3. list a teaching job at the trust head office.
4. view, edit and delete jobs listed by the schools in their trust.
5. choose to accept applications through Teaching Vacancies, using the online application form.
6. View, shortlist and reject any applications received for jobs listed by the schools in their account.

## Uptake

Out of 1,470 trusts in scope, 776 are signed up and using this new feature on Teaching Vacancies.

289 trusts published a vacancy in the last year, of which 78 were based at the trust head office and 54 across multiple schools.   

Large MATs (22 or more schools) are polarised in the breadth of usage of Teaching Vacancies across their schools. Either high proportions of their schools have published a vacancy on Teaching Vacancies in the last year (73-100%), or very low proportions have.  

Data on the service, combined with insights generated through user research, indicates that MAT use of the service is slightly lower than that of LA-maintained schools, while reliance on competitors is higher.

## Iterations

Since releasing this feature, we made iterations to the dashboard which we applied across the service. This resulted in the MAT dashboard view changing for consistency.

{{ appFigure({
  image: {
    file: "active-jobs.png",
    alt: "A screenshot of current active jobs dashboard"
  }
}) }}

We also removed the screen where you select the schools you want to see on the dashboard because this replicated the filters and was confusing to hiring staff. Now hiring staff can sign in and land on their dashboard straightaway, then select the schools they want to see by using the filters (which are now persistently open).

## Next steps

We are currently undertaking research with MATs to understand MAT hiring staff users’ unmet needs and how Teaching Vacancies can best meet those needs.

We also have comms and other marketing activities planned this autumn 2021 to raise awareness of the service among trusts and schools, and inform them of new developments in the service.
