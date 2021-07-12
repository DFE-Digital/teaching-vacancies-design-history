---
title: Scope expansion - round 1
description: Initial findings on how we might expand the scope of Teaching Vacancies to support the listing of Teaching Assistant roles.
date: 2021-06-09
related:
  items:
  - text: Research report
    href: https://docs.google.com/presentation/d/1XD0XMsNOMrisJA1sfNxD0WmrirzsKhFgIT-bKcQcfrI/edit#slide=id.gdd98bfbeb2_0_806
  - text: Thematic analysis
    href: https://lucid.app/lucidspark/invitations/accept/inv_baabd507-099d-4d9f-9550-fd90dfa7cc9b
  - text: Lookback recordings
    href: https://lookback.io/org/teaching-vacancies-2/projects/scope-expansion/rounds#round-3545056/
---

{% from "figure/macro.njk" import appFigure with context %}

With time it has become evident that there is a need for schools to list out-of-scope roles on Teaching Vacancies. During research studies and through feedback, hiring staff have frequently asked researchers to expand the service to include support roles. Further evidence of this can be found on the service itself, as hiring staff, despite the scope limitation, have been publishing job listings for non-teacher roles for some time.

Before considering expanding the scope of the service, further research was required to validate assumptions and gather potential user needs around the listing and recruitment of teaching assistant vacancies.

The intention was to answer the following questions:

* What are TAs? How is this role defined in different schools? 
* How do hiring staff recruit TAs? What are the specific requirements when listing these roles? Are they hired locally or nationally?
* What is the typical contract type for TAs?
* How many are recruited in comparison to teachers? Do they expect that number to increase going forward?
* What is the role of agencies in this recruitment?
* What is the cost of hiring TAs  vs teachers?
* Could our application work to recruit TA staff? How does it compare to recruiting teachers? 
* What is the consequence of not listing other support jobs in our service? What are the pros for hiring staff? 
* What would it take to stop using agencies and other paid-for alternatives?

We believed, by expanding the scope to TAs, it may support the Department’s goals to aid schools in COVID and Recovery. In alignment with the COVID recovery plan for schools, we believed that there was likely to be a high demand for not only TAs but tutors going forward. It was therefore vital that we gained an understanding of these roles and whether we would need to open up the service to tutors also.

We had further questions surrounding the role of a tutor.

* Are schools already using tutors?
* Are hiring staff familiar with the title of “tutor” in the context of working within a school? Are they viewed as a teaching assistant role?
* How many “tutor” roles do schools/ trusts typically hire?
* Do hiring staff expect this number to increase going forward?

## Who we tested with

We spoke with 6 hiring staff within in scope state funded schools and trusts in England including:

* 3 x small trusts
* 1 x LA
* 1 SAT
* 1 Headteacher (multiple single maintained schools)

## What did we do?

* 6 remote 1 hour sessions were carried out using Lookback 
* A [discussion guide](https://docs.google.com/document/d/1yX3K2MJmd2yhn6IT1Bl7_vkYgYIeysFBQ3NAF5VdxiI/edit) was followed to ensure the sessions were consistent

Users were given a set of tasks to perform using the [prototype](https://teaching-vacancies-prototype.london.cloudapps.digital/prototypes/application/round-3/):

Task 1: Interview
Task 2: Create a job listing for a Teaching Assistant
Task 3: Receive an application
Task 4: Closing Interview

## Hypothesis

* Expanding the scope to TAs may support the Department’s goals to support schools in COVID and Recovery
* Teaching assistant roles are relatively similar to teacher roles, therefore it is not required to make fundamental changes to the service for hiring staff to be able to list teaching assistants roles on the service
* Hiring staff have an understanding of what school tutors are
* Tutor roles are relatively similar to TA roles and therefore we do not need to make fundamental changes to the service for hiring staff to be able to list tutor roles on the service
* Hiring staff would use Teaching Vacancies to list teaching assistants roles if the scope was expanded
* Expanding the scope of the service to include TAs and tutor roles won’t stop schools/ trusts from listing job vacancies on other job boards

## What we learned

Key things we took away from this piece of research include:

TAs fall under support staff. By expanding the scope to TAs alone, we are naturally encouraging hiring staff to list other support roles.

> Only a small number of changes are required to adjust the current listing process and application form to suit TAs. Having said that, only 2 of the participants we spoke with would consider using the Teaching Vacancies application feature once all support roles could be listed.

Recruitment of TAs is different to that of teachers. TAs are mainly sourced through the local community (word of mouth, school alumni etc) or through agencies when there is an immediate demand.

> "The thing about teaching assistants as well is that because it's a lower pay grade, they normally come from the local area so you're not going to advertise for a TA"

There are concerns over the ‘Teaching Vacancies’ brand being too teacher orientated. Hiring staff lack confidence jobseekers will look at our service for these roles.

> "It's DfE teaching vacancies not education jobs, so you are sort of restricted on that name”

## Design notes

The hypothesis ‘we would not need to make fundamental changes to the service for hiring staff to be able to list teaching assistants roles on the service’ was valid. However, there were a few areas within the design of the listing process that would need to be considered.

### Job details

* users felt there wasn’t a suitable option under the job role
* users specified that TA roles are listed as term time only, an option we do not currently have under working pattern / contract type
* users felt there wasn’t a suitable option under subject
* suitable for NQTs was not always required for this type of role

{{ appFigure({
  image: {
    file: "job-details.png",
    alt: "The job details screen in the create a job flow"
  }
}) }}

### Pay package

Users felt it was important for this type of role to specify actual earnings, with a pro-rata / FTE option to make this clear.

{{ appFigure({
  image: {
    file: "pay-package.png",
    alt: "The pay package screen in the create a job flow"
  }
}) }}

### Application form

* TRN, QTS and induction year were not requirements for this type of role
* users wanted to see barred declarations on the application form

{{ appFigure({
  image: {
    file: "application-form.png",
    alt: "The application form once submitted to hiring staff"
  }
}) }}


## Next steps 

### Research with jobseekers in educational support roles

* How are jobseekers currently searching and applying for educational support staff roles?
* How might we need to adapt our service to meet their needs?

### More research with hiring staff

* Dig deeper into schools’ feelings and motivations towards listing all support roles once we are ready to test pilot designs
