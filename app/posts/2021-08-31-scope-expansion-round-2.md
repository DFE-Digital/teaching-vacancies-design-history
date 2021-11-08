---
title: Second round of user research on listing education support roles
description: Key takeaways from the second round of user testing with hiring staff on listing education support roles
date: 2021-08-31
related:
  items:
  - text: Research report
    href: https://docs.google.com/presentation/d/1pvfWbCraM_7qt5USercF1H1XnQ9wb-cMBVnvnObP2Kg/edit#slide=id.gdd98bfbeb2_0_792
  - text: Research playback
    href: https://docs.google.com/presentation/d/1Ujt-ohlRpcIdTYiAAeSbltGMfUZzmo2L0pasCqXEYj8/edit#slide=id.gdd98bfbeb2_0_792
  - text: Thematic analysis
    href: https://lucid.app/documents/view/761ed40b-9e9a-43f5-8fd1-6a8c3e2f56ce
  - text: Lookback recordings
    href: https://lookback.io/org/teaching-vacancies-2/projects/scope-expansion/rounds#round-8139688
  - text: Card sorting activity
    href: https://app.optimalworkshop.com/optimalsort/8w352848/7f252v8a/shared-results/53t2n7vx12hr31nl32gl12wi6837303m
---

{% from "figure/macro.njk" import appFigure with context %}

We recently expanded the scope of the service to allow hiring staff to list education support roles. We released this MVP (minimum viable product) following an [initial round of research](/scope-expansion-round-1/) with both hiring staff and jobseekers.

We then carried out a second round of user research, this time just with hiring staff. We wanted to:

* test the changes made to the job listing journey
* gather additional user needs around the listing of education support vacancies (if any)
* uncover any additional challenges schools face when recruiting education support staff


## Overarching user need

These were the needs identified in the initial research with hiring staff.

**As a hiring staff user**
I need:
* to reduce the time I spend on publishing a job advert so that I can recruit more efficiently.

* education support roles to have wide exposure so that it increases my chance of filling the position with high quality candidates.


## Who we tested with

In the second round of research we spoke with 7 hiring staff who work in state funded schools and trusts in England. We also spoke with one hiring staff in an independent school (which is out of scope). 4/8 had heard of Teaching Vacancies but had not used it. Only one had used Teaching Vacancies before.

## What did we want to learn

* What are education support roles?
* How does the listing process for these roles differ from teaching and leadership roles?
* What challenges do hiring staff face when recruiting for these roles?
* What are the specific requirements when listing these roles?
* Are education support staff hired locally or nationally?
* What is the cost of hiring education support staff?
* How effective are the new draft designs for listing these types of roles?
* Would hiring staff use Teaching Vacancies to list these roles having seen the new designs?
* What would be the consequences of not being able to list these jobs on our service? What would be the advantages?



## Hypothesis

* Hiring staff use similar methods of recruitment for teaching assistants and other education support roles.
* Hiring staff don’t put a large budget towards listing education support roles and mainly use free sites to advertise.
* If we were to support hiring staff to list education support roles, we would increase the use of Teaching Vacancies across schools (for both teaching and non teaching roles) resulting in a cost saving.
* Although hiring staff won’t be able to receive applications for support roles, they will still want to list these roles on the service.
* Expanding the scope of the service to include educational support roles won’t stop schools or trusts from listing job vacancies on other job boards.
* When expanding the scope of the service to education support roles, a more refined hiring staff journey tailored to each type of job role will prevent hiring staff from listing out of scope roles (for example, finance, admin, business managers).


## What did we test

* 8 remote 1 hour usability testing sessions using Lookback. We followed a discussion guide to ensure the sessions were consistent.
* 10 participants took part in a card sorting activity.

## Task 1: Usability test
The usability testing sessions focused on how users interact with the new process to create a job listing.

### Job role

Previously the Job role field was optional and in the job details step. We now ask for the job role in the first step of the flow, and the question is mandatory. Asking for a job role first means we gain the ability to only show relevant fields to that role further along the job creation flow.

We initially researched and launched with just one new field under Job role, which was Education support. Shortly after we added ‘Teaching assistant’. This was the most significant change we made to the job creation flow.

We follow the main ‘Job role’ question with further details depending on which role the user selects.

If the user selects Teacher, we ask for more details. Is the role suitable for early career teachers? Does the role have SEND responsibilities (special educational needs and disabilities)? The additional details are then able to be used when jobseekers filter search results.


{{ appFigure({
  image: {
    file: "step1.png",
    alt: "The job role screen in the create a job flow"
  }
}) }}

If the user selects Leadership, Teaching assistant or Education support we only ask whether the role has SEND responsibilities.

{{ appFigure({
  image: {
    file: "step1a.png",
    alt: "Second step of the job role screen in the create a job flow'"
  }
}) }}

We ask for no further details if the user selects SENDCo as the main role.

### How did this test?

* Not having a suitable option for out of scope roles (for example, finance, admin, business managers) wasn't enough to tell hiring staff they weren't to be listed on the service. Instead, they assumed these roles were to be placed under education support.

> "TA, admin, site staff would go in education support”

On 01 Sept 2021, 22 support roles had been listed as education support roles, 12 of which were out of scope. A rise in non education support roles could impact the jobseeker search experience. To prevent this, we created a distinct 'Teaching assistant' job role alongside Education support. We hope this will allow jobseekers to further refine their search rather than having to scroll through multiple out of scope roles.

* We were instructing hiring staff to place key stage and phase leaders within the leadership job role, but we found key stage and phase leaders are considered to be teachers with additional responsibilities. So we updated the hint text for the Leadership job role to remove key stage and phase leaders.

### Job details

We now ask for less information on the Job details step. Job role has been moved to its own step as well as the fields asking about working patterns.

{{ appFigure({
  image: {
    file: "step2.png",
    alt: "The job details screen in the create a job flow"
  }
}) }}

### Working patterns

We’ve added a new working pattern option, Term time, which we identified as a common option when talking to jobseekers and hiring staff about education support and teaching assistant roles.

We added an optional field asking for details on how many hours or days the role covers.

{{ appFigure({
  image: {
    file: "step3.png",
    alt: "The working pattern screen in the create a job flow"
  }
}) }}

### How did this test?

* We know jobseekers want specificity on working hours, yet hiring staff did not provide enough information. As working hours cannot always be guaranteed, we found hiring staff were advertising a higher number of hours than staff would actually be required to work. Those who didn’t specify the hours or days would include a more detailed description of the working pattern in the job description.

* It varied amongst hiring staff whether working a full school day was classed as full time or part time, resulting in job listings with the same required hours being listed under different working patterns.

> "I think this might be slightly confusing because if someone applies for a full time job at a school, they are going to assume they will be working all day”

* Hiring staff rarely selected more than one working pattern, despite describing the roles they were advertising as both term time and full/part time.

Hiring staff advertise term time roles as ‘term time +_’  to cover things like paid training days.

### Pay Package

If the term time options include either Part time, Job share or Term time, we show a new field, Actual salary, on the Pay package step.

We included the actual salary as we found it can be both time consuming and frustrating for jobseekers to have to work out their actual earnings from the full time equivalent (FTE) or grade scale provided. This can be misleading, particularly for lower paid support roles.  

{{ appFigure({
  image: {
    file: "step4.png",
    alt: "The pay package screen in the create a job flow"
  }
}) }}

### How did this test?

* Half of the participants would use the actual salary field as they felt it was important to give jobseekers clarity on their earnings. The remaining half would have left this blank. They either felt seeing a lower salary could put applicants off or felt they (or their current systems) would not accurately work this out.

> "I never quite trust our budgeting software to get it right so I wouldn’t put that in"


### Applying for the job

The initial design included information explaining that hiring staff aren't able to accept education support applications through the service at this time. We removed this information after receiving some feedback.

{{ appFigure({
  image: {
    file: "step6 original.png",
    alt: "The applying for the job screen in the create a job flow"
  }
}) }}

### How did this test?

* Telling hiring staff they cannot accept applications directly through Teaching Vacancies was problematic. Some believed this meant education support roles cannot be advertised and therefore thought they could go no further. As none of the participants were aware of the Teaching Vacancies application form and tracking system prior to this they were not clear on what it was or when it would be available.  

> “When I draft an education support vacancy listing, it prompts me to choose how applicants should apply and advises that it is not possible for candidates to apply directly through teaching services. I do not wish for direct applications, but it will not permit me to go further with the form.”

* It wasn’t clear to hiring staff how they could include a link to an online application form

* Hiring staff questioned whether they would be able to upload a copy of their own application form, not seeing that there was an option to do this in the next step.

> “It would be good if we can add our own application form in the same way as for teacher vacancies but it seems that you are working on this."



### Other key takeaways

{{ appFigure({
  image: {
    file: "homepage.png",
    alt: "The Teaching Vacancies homepage"
  }
}) }}

* Hiring staff were not clear what they were meant to do when reaching the homepage and the link to sign in was not easily located. Upon arriving at the site, participants either:

1. entered the job title they were listing in the keyword search
2. selected the ‘list a teaching job link’ in the footer
3. went to sign in via the ‘apply for jobs’ box

* Alongside advertising amongst parents and the local community, local authority sites are widely used to advertise support roles. Local authority sites are not education specific, so hiring staff feel they cast a wider net and attract people from all professions to a job in education. However, these current methods are not reaching candidates with the desired experience. This lack of experience has become a bigger challenge for schools as they recover from the pandemic.

* Hiring staff need to advertise on multiple sites to increase the likelihood of reaching quality candidates, but prefer to receive and manage their applications (for all roles) in one place. Receiving a PDF copy of an application via email felt easier because it meant they could advertise on multiple platforms but receive applications in one place.

* It is not uncommon for jobseekers with assisted digital needs to apply for support roles nor is it uncommon for hiring staff with assisted digital needs to manage applications. We need to think about how we might further assist both sets of assisted digital users.


## Task 2: Card sorting activity

We conducted a card sorting activity to validate our designs and the assumptions we had made on how hiring staff categorise job roles.

### What we did

* We gave 10 users 15 cards, with a job title on each card.
* Each user arranged the cards into groups and gave each group an appropriate title.
* We analysed the findings using Optimal Workshop.

### We did this to:
* validate the assumptions we had made on the job role step
* make iterations to the job roles based on how hiring staff categorise these roles
* get insight into how some out of scope roles are grouped in case they are considered in the future

## Key findings

* Hiring staff were familiar with the term ‘education support’ and believed it to incorporate teaching assistants and other student-facing in-scope roles including high level teaching assistants, behaviour support, learning mentors and cover supervisors. The majority also included pastoral care within this category (with an increased demand for pastoral roles due to covid recovery.)

* Head of English / Head of Year roles mostly fell within a form of ‘teaching’ or ‘extended leadership’ category rather than the Senior Leadership Team SLT.

* There was no clear agreement on where to place the SENDCo role (supporting our current design which separates out the SENDCo role).

## Next steps


* Make iterations to the service based on our findings.

* We will continue to monitor the support roles being listed on the service, respond to feedback and observe patterns and behaviours of both hiring staff and jobseekers as they start to use Teaching Vacancies to list education support roles.

* Work is being done on how we can increase the reach of support roles on the service.

* Work is being done on how we might improve the search function to ensure jobseekers can easily find the roles they are looking for. This is imperative since the addition of new roles to the service.

## Looking ahead

* Think about how we might further support the needs of hiring staff if we were to enable them to receive applications for support roles on the service.

* Further analysis on what other roles we should consider adding to the service (business managers / finance / administrative staff) and how we might need to adapt the service to meet any additional needs.
