---
title: Creating a jobseeker profile
date: 2022-07-15
tags:
  - HN001
---

{% from "email/macro.njk" import appEmail with context %}

We want to give jobseekers the ability to create profiles to allow them to:

- share their experience and qualifications with schools
- enter the types of teaching jobs they’re interested in
- apply to jobs more quickly

Hiring staff could then browse profiles and invite jobseekers to apply for jobs.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works
### Emailing trainee teachers

We’re planning to send an email to trainee teachers in November 2022, telling them  about the service and the benefits of creating a profile.

Clicking the link takes users to create an account.

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "Find your first teaching job on GOV.UK",
  content: "

As a trainee teacher, you can start thinking about your first teaching job.

You can find teaching jobs on GOV.UK

# Create a profile

A profile allows you to:

- share your qualifications and experience with schools
- specify the types of teaching jobs you’re looking for

When you turn on your profile, schools will be able to contact you about relevant teaching roles.

Create a profile:

https://www.example.com

#  Get support

Get support, report a problem or give feedback at [teaching.vacancies@education.gov.uk](mailto:teaching.vacancies@education.gov.uk).
  "
}) }}



### Creating an account

To create an account, users will provide an email address and password.

Once they have created an account, they’ll be given the option to create a profile.

### Creating a profile

If they choose to create a profile, they’ll be taken to the profile page.

It has sections for:

- Personal details - name and contact details
- Job preferences - role, age group, key stage, subject, working pattern
- Teaching status
- Degrees
- Other qualifications
- Work experience
- About you

Users can click into each section and fill it out. Once they have filled out the section, they return to the profile page.

### Previewing a profile

Users can preview their profile by clicking ‘Preview profile’. We have not designed this yet.

### Turning on the profile

Users can turn on their profile at any time.

Once the user clicks ‘Turn on profile’ they’re taken to a page that:

- tells them the consequence of turning on their profile
- asks them to confirm the action

Clicking ‘Turn on profile’ takes the user back to the profile page with a success message that says ‘Profile turned on’.

It also contains a green status tag of ‘Active’ next to the h1 heading.

### Turning off the profile

Users can turn off their profile at any time.

Once the user clicks ‘Turn off profile’ they’re taken to a page that:

- tells them the consequence of turning off their profile
- asks them to confirm the action

Clicking ‘Turn off profile’ takes the user back to the profile page with a success message that says ‘Profile turned off’.

It also removes the green status tag of ‘Active’ next to the h1 heading.

## What we want to find out

We want to find out if jobseekers:

- understand what a profile is (from the email)
- would choose to create a profile
- find it easy to create a profile
- would turn their profile on before it’s complete
- would turn their profile off
- understand what happens after they turn their profile on
- understand what each section of the profile relates to
- find that the email is too focused on creating a profile
- find that the confirmation page after creating an account is too focused on creating a profile

## Further considerations

We want to consider:

- giving users the ability to add location preferences so that they do not get contacted about jobs that are too far away
- giving users options to state that they’re looking for jobs, or are not looking but happy to hear about new roles
- giving users a way to stop their profile being seen by their current employer
- giving users location as a job preference
- the consequences of turning off a profile after it’s been saved by a school
- updating the content of the email job seekers receive after creating an account



{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Job listings"
  }, {
    text: "Interstitial",
    img: { src: "copied.png" }
  }, {
    text: "Title"
  }, {
    text: "Publish and closing dates",
    img: { src: "publish-closing-dates.png" }
  }, {
    text: "Start date"
  }, {
    text: "Check answers",
    img: { src: "check.png" }
  }, {
    text: "Confirmation"
  }]
}) }}
