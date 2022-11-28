---
title: 'Local authorities: how they support schools with recruitment on Teaching Vacancies'
description: Local authorities can list jobs on behalf of schools in and outside their boundary, but they can’t receive or view any applications on Teaching Vacancies.
date: 2021-04-01
related:
  items:
  - text: Research playback
    href: https://docs.google.com/presentation/d/1krqCeHyqsg3QVjD3dn-3CEAxjJPjDq5M5Fd9c2wNkwA/edit#slide=id.p
tags:
  - general_updates
---

{% from "figure/macro.njk" import appFigure with context %}

## Introduction

### What are local authorities?

Local government is responsible for a range of vital services for people and businesses in defined areas, including social care, schools, and housing. In England, local authorities (LAs) provide over 800 different services to their communities.
Most LAs are governed by councillors who are elected in local elections. They have their own public servants, who are distinct from civil servants. LAs receive funding from a range of sources, including Government grants, council tax and fees and charges.  

### How many local authorities are involved in teacher recruitment?

There are 150 LAs in England with the strategic lead for education of children and young people. They have a legal duty to ensure that every child fulfils his or her educational potential.

There are around 12,500 local authority maintained schools in England. However, local authorities also support academies and free schools with teacher recruitment.

### How many local authorities did we estimate would use our service?

In 2020, we initiated a pilot with LAs across England to provide them with access to Teaching Vacancies in order to support schools with recruitment. The pilot started with 2 LAs in May 2020, and then extended to another 11.

However, 69 LAs expressed an interest in using Teaching Vacancies to support their schools with teacher recruitment in 2020. 17.4% of these were in the North and 36.6% were in Lancashire and West Yorkshire. With these LAs using our service, we estimated we could get 8,500 additional vacancies on the service. This number was based on the following assumptions:

* 100% of the LAs who said that they'd use us do
* the 10 LAs in the sample that our Business Analyst, Alex Wiskar, looked at are representative of all 69 LAs in terms of how they use Teaching Vacancies
* there's not any double-listing of vacancies going on in those LAs (e.g. schools listing the same vacancies on TV that the LA then lists elsewhere)

### Why was the service not fit for purpose for local authorities?

Our service was designed for schools and trusts to list teaching roles. We replicated the trust dashboard view and functionality for LAs in November 2020, assuming their needs were similar.

Using the repurposed trust dashboard, there were two problems for LA users:

1. An LA user could see, edit and delete job vacancies advertised by school(s) that fall outside their stewardship.

2. When we were to release the job application feature, an LA could access and make decisions on job applications submitted for teaching roles at schools which fall outside of their stewardship.

We agreed that we needed to address these two problems in March 2021.

## User needs

We identified the following user needs in research conducted in November-December 2020.  

**As an LA user**
I want to

* list jobs at one school or multiple schools within my LA and any other LA I choose
* view and manage job listings for listings created by hiring staff in my LA and any other LA I have chosen

So that I can provide job listing services to schools within my stewardship

**As an LA user**
I want to recruit pools of teachers
So that I can cover gaps as they arise at a lower cost

Although LAs want to be able to list jobs at the schools that fall within their stewardship, almost all are not involved in the application process. Applications are received and reviewed by the school hiring for the role. This further distinguishes them from single schools and trusts using our service, who will generally be involved in the whole end-to-end recruitment journey.

## Legal

LAs can be involved in all levels of recruitment for maintained and non-maintained schools in their own LA and other LAs.

LAs have a legal right to be involved in all stages of selection for a teacher. The law does not restrict this to maintained schools.

This is stated in the following legislation:

* Education Act 1996, c. 3.
* School Staffing (England) Regulations 2009 (SI 2009/2680).

## Improvements we made

When LA users sign in, they have to select the schools in their LA that they want to list jobs at. This ensures they only create and view job listings at the schools they are supporting with recruitment.

{{ appFigure({
  image: {
    file: "setup.png",
    alt: "A screenshot of the Set up your Teaching Vacancies account screen"
  }
}) }}

If they wish to add schools outside of their LA boundary, they have to email our support desk and our product team manually adds the schools to their account. So far, 4 LAs have requested additional schools.

When they get to their dashboard, they can filter the jobs by the schools on the left hand side.

{{ appFigure({
  image: {
    file: "dashboard.png",
    alt: "A screenshot of the Active Jobs dashboard"
  }
}) }}

When listing a job, local authorities are not able to ask candidates to apply using the Teaching Vacancies application form.

## Business rules

LA users can:

1. add schools within their LA to their Teaching Vacancies account.
2. request to add schools outside of their local authority to their Teaching Vacancies account via the Teaching Vacancies support desk.
3. list a teaching job at one or more of the schools in their account.
4. view, edit and delete jobs listed by the schools in their account.

LA users cannot:

1. choose to accept applications through Teaching Vacancies, using the online application form.
2. view any applications received for jobs listed by the schools in their account.

## Uptake

Although we have had 41 LAs sign up for our service using this new feature, 14 of these have listed a vacancy in the last year.

Over the last year, we had 201 vacancies published by LAs.

## Next steps

We will be monitoring usage of this feature in the new academic year. If LAs are no longer supporting schools as much with teacher recruitment as things hopefully return a bit more back to normal, we can decide whether we want to retire this feature.
