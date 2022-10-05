---
title: Making hiring staff aware of jobseeker profiles
date: 2022-10-05
tags:
  - HN002
  - JN002
---

{% from "figure/macro.njk" import appFigure with context %}
{% from "email/macro.njk" import appEmail with context %}

We recently designed a way for hiring staff [to view jobseeker profiles and invite jobseekers to apply for a job](/viewing-jobseeker-profiles-and-inviting-jobseekers-to-apply-for-a-job).

We’ll make sure hiring staff are aware of jobseeker profiles by:

- sending them an email
- showing them an interstitial after they sign in
- adding information to the confirmation page after creating a job listing

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

### Sending hiring staff an email about jobseeker profiles

When we launch the feature, hiring staff will be sent an email about jobseeker profiles.

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "View jobseeker profiles",
  content: "

Dear ((first_name))

You can now view jobseeker profiles and invite them to apply.

A jobseeker’s profile includes their:

- qualified teaching status
- job preferences
- experience
- qualifications

You can invite jobseekers to apply for any job listings you create.

You’ll also be notified about any jobseeker profile that matches your job listings.

View jobseeker profiles:
((link))

# Get support

Get support, report a problem or give feedback at [teaching.vacancies@education.gov.uk](mailto:teaching.vacancies@education.gov.uk).
  "
}) }}

### Showing an interstitial page after signing in

Hiring staff will be shown an interstitial page about how jobseeker profiles work.

They can click ‘View jobseeker profiles’ to be taken to the list of jobseeker profiles.

Or they can click ‘Skip to job listings’ to take them to the list of job listings.

{{ appFigure({
  image: {
    file: "interstitial.png",
    alt: "Interstitial telling hiring staff about jobseeker profiles"
  },
  caption: "Interstitial telling hiring staff about jobseeker profiles"
}) }}

### Adding information about jobseeker profiles to the confirmation page that’s seen after creating a job listing

After creating a job listing, if there are matching jobseeker profiles for that vacancy, we’ll tell the hiring staff user and provide a link to view them.

{{ appFigure({
  image: {
    file: "confirmation.png",
    alt: "Confirmation page telling hiring staff about matching jobseeker profiles"
  },
  caption: "Confirmation page telling hiring staff about matching jobseeker profiles"
}) }}
