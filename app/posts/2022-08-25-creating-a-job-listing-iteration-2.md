---
title: Creating a job listing iteration 2
date: 2022-08-25
tags:
  - HN001
  - JN001
---

We recently redesigned the way users [create a job listing](/creating-a-job-listing-iteration/).

It tested well, but we decided to make some changes in response to research findings and things we spotted during a review of the design.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed
### Adding a new role of HLTA (higher level teaching assistant)

Research showed that participants were not sure how to advertise HLTAs as they are not considered a teaching assistant, nor a learning support role.

To fix this, we added a new role of ‘HLTA (higher level teaching assistant)’.

### Showing the ‘key stages’ question for certain roles

We realised that the ‘key stages’ question is not applicable if the user selects a role of:

- Learning support, cover supervisor or tutor
- SENDCo (special educational needs and disabilities coordinator)

So, we’ll only show users this question if the user selects a role of:

- Teacher
- Headteacher, deputy or assistant headteacher
- Head of year, department, curriculum or phase
- Teaching assistant
- HLTA (higher level teaching assistant)

For all other roles, the job listing page will show all key stages associated with the school.
### Only asking for education phase when it’s missing from GIAS

Previously, we asked hiring staff users to select an education phase if:

- the school is an all through school
- the location is a trust’s head office
- multiple schools are selected and the schools have different phases

We’ll now:

- ask hiring staff to select a phase if there’s no phase in the data from GIAS
- show the phase that’s stored in GIAS on the job listing

If multiple locations have been selected and at least one of them has a phase, then that will be applied automatically to the job listing.

This is a temporary solution - we’ll look to ask users to select an education phase for each location that’s missing.
### Changing which phases we show

We get information about schools from GIAS. Schools are categorised as:

- primary
- all_through
- not_applicable
- middle_deemed_primary
- secondary
- 16-19
- middle_deemed_secondary
- nursery

When we show this information to job seekers we combine and relabel them.

| GIAS value | Mapped to | Labelled |
|------------|----------|----------|
| nursery | primary | Primary |
| primary | primary | Primary |
| middle_deemed_primary | middle | Middle |
| middle_deemed_secondary | middle | Middle |
| secondary | secondary | Secondary |
| 16-19 | 16 to 19 | 16 to 19 |
| all_through | primary, middle, secondary, 16 to 19 | Primary, Middle, Secondary, 16 to 19 |

This stops jobseekers from finding jobs at nurseries and all through schools.

So we’ll now only map ‘middle_deemed_primary’ and ‘middle_deemed_secondary’ to ‘Middle’.

| GIAS value | Mapped to | Labelled |
|------------|----------|----------|
| nursery | primary | Nursery |
| primary | primary | Primary |
| middle_deemed_primary | middle | Middle |
| middle_deemed_secondary | middle | Middle |
| secondary | secondary | Secondary |
| 16-19 | 16-19 | Sixth form or college |
| all_through | all_through | Through school |

We also changed the ‘16 to 19’ label to ‘Sixth form or college’ to be more descriptive and consistent with the other labels.

### Adding job title hint text for all phases and accounting for multiple locations that are made up of different phases

Previously, we did not provide hint text for a:

- nursery school
- sixth form or college
- through school

So we’ve added examples for this.

| Role | Phase | Hint
|------------|----------|----------|
| Teacher | Nursery | For example ‘Nursery teacher’’ |
| Teacher | Primary | For example ‘Teacher of KS1’ |
| Teacher | Middle | For example ‘Teacher of Maths’ |
| Teacher | Secondary | For example ‘Teacher of Maths’ |
| Teacher | Sixth form or college | For example ‘Teacher of Maths’’ |
| Teacher | Through school | For example ‘Teacher of KS1’ or ‘Teacher of Maths’’ |
| Headteacher, deputy or assistant headteacher | NA | For example ‘Assistant headteacher’ |
| Head of year, department or phase | Nursery | For example, ‘Nursery phase leader’’ |
| Head of year, department or phase | Primary | For example ‘KS1 phase leader’ |
| Head of year, department or phase | Secondary | For example ‘Head of modern foreign languages’ |
| Head of year, department or phase | Middle | For example ‘Head of modern foreign languages’ |
| Head of year, department or phase | Sixth form or college | For example ‘Head of modern foreign languages’ |
| Head of year, department or phase | Through school | For example ‘KS1 phase leader’ or ‘Head of modern foreign languages’ |
| Teaching assistant | NA | For example ‘Level 2 teaching assistant’’ |
| Learning support, cover supervisor or tutor | NA | For example ‘Learning support assistant’ |
| SENDCo | NA | For example ‘SENDCo’ |

We also did not include hint text when multiple phases are selected. In this case, the hint text should be based on the phase of the first location that was selected.

### Handling phase inset text when multiple locations are selected

Previously, we added inset text that says, for example, ‘The advert will say that this is a secondary role’.

But we did not consider what the hint text would say if multiple locations with different education phases are selected.

In this case, it will say ‘The job listing will list the education phases.’

### Adding a filter for key stages

We added a key stages filter to the job listings page. This will allow jobseekers to find relevant jobs across different types of schools.

For example, if a jobseeker wants to teach KS2 but does not mind if the role is at a primary school or middle school,they can now just filter by KS2.

### Conditionally showing key stages based on the phase of education

We’ll only show the key stage question if the education phase has more than one key stage.

We’ll only show the relevant key stages for the phase of education.

| GIAS value | Key stage checkboxes | Show question |
|------------|----------|----------|
| nursery | Early years | No |
| primary | Early years, KS1, KS2 | Yes |
| middle_deemed_primary | KS1, KS2, KS3 | Yes |
| middle_deemed_secondary | KS2, KS3, KS4 | Yes |
| secondary | KS3, KS4 | Yes |
| 16 |-19 KS5 | No |
| all_through | Early years, KS1, KS2, KS3, KS4, KS5 | Yes |

### Changes to full time working pattern option

Full-time working patterns can be flexible, include additional training days, or vary for different roles.

To make this clearer, we added a ‘Details’ field when ‘Full time’ is selected.

We changed the hint text so it says:

- ‘Usually at least 36.5 hours a week’ if the role is HLTA (higher level teaching assistant); Teaching assistant; Learning support, cover supervisor or tutor
- ‘Usually at least 27.5 hours a week’ if the role is Teacher; Headteacher, deputy or assistant headteacher; Head of year, department, curriculum or phase

There’s no hint text if the role is SENDCo (special educational needs and disabilities coordinator).
### Adding an ‘additional allowances’ question

Previously, we removed this field because we thought it was more related to what the school can offer the applicant, which is covered later.

But, research showed that teaching and learning responsibility (TLR) or special educational needs (SEN) allowances were separate from the information about the school community, faculty, and continuing professional development hiring staff users included in the ‘About the role’ page.

So, we added a question to the salary details page. The label says ‘Do you want to include additional allowances?’ and the radio buttons are:

- ‘Yes’
- ‘No’

The ‘Yes’ radio button reveals a text area labelled ‘Additional allowance’.

### Removing the ability to enter a custom closing time

Previously, closing time had options for:

- 9am
- 12pm (midday)
- 11:59pm
- Another time

Selecting ‘Another time’ revealed an input to enter any time.

As it’s more effort to build this, we decided to remove this option and add another fixed time option of 5pm.
### Changing the label for ‘start date’

Previously, the label was ‘Start date’. Research showed that one participant was not sure whether this was the date the job starts, or the date the job will be published.

So we changed the label to ‘Job start date’.
### Improve content on the ‘using the application form’ page

Previously, content at the top of the page said:

> This application form provided by the service:
>
> - is always up to date with the keeping children safe in education guidelines
> - provides a simple experience
> - makes it easy to shortlist or reject applications’

In research:

- one participant was not sure how the form worked from a shortlisting point of view
- some participants were not sure if a jobseeker account would store their information for faster applications
- one participant was not sure who was required to complete the form

So we changed:

- ‘makes it easy to shortlist or reject applications’ to ‘makes it easy for you to view, shortlist or reject applications in one place’
- ‘provides a simple experience’ to ‘provides a quick and simple experience for applicants’

We also moved this bullet to the top so that the information relating to applicants comes first.

### Changing the question about whether the role is suitable for ECTs

Previously, we asked users to select the ‘Suitability for early career teachers (ECTs)’ with radio button options for:

- We’ll only accept an ECT
- We’ll consider an ECT
- We will not consider an ECT

We found that hiring staff users could not think of a scenario when 'only accept an ECT' might be used. It was even seen as discriminatory by some participants.

Instead, we’ll now ask ‘Is this role suitable for an early career teacher (ECT)?’ with options for:

- Yes
- No
### Remove hint about the upload order of additional documents

Previously, we added hint text that said ‘Files are displayed in the order you upload them.’

But research shows that users did not read the hint, and users will only typically upload 1 or 2 files anyway.

So we decided to remove this part of the hint.

### Changing the confirmation page content

Previously, we did not include a link to change the listing when the job has been published as opposed to scheduled, so we added a link to do this.

We also made the content more consistent and concise.

If the job listing has been scheduled, there’s a line below the green confirmation box.

Regardless of whether the job listing has been scheduled or published, the rest of the content is the same.

There’s a heading of ‘Next steps’ followed by a list of bullets to:

- view the job listing
- make changes to the job listing
- manage jobs

## Further considerations

We want to consider:

- adding guidance about what can be entered for ‘Full-time equivalent salary’
- moving the question about suitability for ECTs to a separate page to help hiring staff answer more honestly
- how to make it clear that ‘about the school’ will be included in the job listing
- how we stop users from repeating the safeguarding statement


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Role"
  }, {
    text: "Title"
  }, {
    text: "Phase"
  }, {
    text: "Key stages"
  }, {
    text: "Working patterns"
  }, {
    text: "Salary and allowances"
  }, {
    text: "Publish and closing dates",
    img: { src: "listing-dates.png" }
  }, {
    text: "Start date"
  }, {
    text: "Application form"
  }, {
    text: "About role",
    img: { src: "about.png" }
  }, {
    text: "Upload additional documents",
    img: { src: "upload.png" }
  }, {
    text: "Check answers - publishing today",
    img: { src: "check--published.png" }
  }, {
    text: "Check answers - scheduling for the future",
    img: { src: "check--scheduled.png" }
  }, {
    text: "Confirmation page - published",
    img: { src: "confirmation--published.png" }
  }, {
    text: "Confirmation page - scheduled",
    img: { src: "confirmation--scheduled.png" }
  }]
}) }}
