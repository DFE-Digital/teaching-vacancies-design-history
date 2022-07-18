---
title: Creating a jobseeker profile
date: 2022-07-15
tags:
  - HN002
  - JN002
  - JN003
  - JN006
  - JN009
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

You can find teaching jobs on GOV.UK.

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
- Teaching status - qualified teaching status (QTS), early career teacher (ECT)
- Degrees
- Other qualifications
- Work experience
- About you

Users can click into each section and fill it out. Once they’ve filled out the section, they can return to the profile page.

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

- understand what a profile is before they create one
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
    text: "Create account"
  }, {
    text: "Account created"
  }, {
    text: "Profile"
  }, {
    text: "Personal details - name",
    img: { src: "personal-details--name.png" }
  }, {
    text: "Personal details - phone",
    img: { src: "personal-details--phone.png" }
  }, {
    text: "Personal details - review",
    img: { src: "personal-details--review.png" }
  }, {
    text: "Preferences - roles",
    img: { src: "preferences--roles.png" }
  }, {
    text: "Preferences - phase",
    img: { src: "preferences--phase.png" }
  }, {
    text: "Preferences - key stages",
    img: { src: "preferences--key-stages.png" }
  }, {
    text: "Preferences - subjects",
    img: { src: "preferences--subject.png" }
  }, {
    text: "Preferences - working patterns",
    img: { src: "preferences--working-patterns.png" }
  }, {
    text: "Preferences - review",
    img: { src: "preferences--review.png" }
  }, {
    text: "Teaching status - QTS",
    img: { src: "teaching-status--qts.png" }
  }, {
    text: "Teaching status - early career teacher",
    img: { src: "teaching-status--ect.png" }
  }, {
    text: "Teaching status - review",
    img: { src: "teaching-status--review.png" }
  }, {
    text: "Qualifications - type",
    img: { src: "qualifications--type.png" }
  }, {
    text: "Qualifications - key stages",
    img: { src: "qualifications--type--another-uk-qualification.png" }
  }, {
    text: "Qualifications - subjects",
    img: { src: "qualifications--type--non-uk.png" }
  }, {
    text: "Qualifications - details",
    img: { src: "qualifications--details.png" }
  }, {
    text: "Qualifications - review",
    img: { src: "qualifications--review.png" }
  }, {
    text: "About",
    img: { src: "about.png" }
  }, {
    text: "About - review",
    img: { src: "about--review.png" }
  }, {
    text: "Profile - some filled out",
    img: { src: "profile--filled.png" }
  }]
}) }}
