---
title: Prompting hiring staff to complete their organisation profile
date: 2022-10-07
tags:
  - JN004
  - JN005
  - JN007
  - JN009

  - school_profiles

---

{% from "figure/macro.njk" import appFigure with context %}
{% from "email/macro.njk" import appEmail with context %}

We recently designed a way for hiring staff to [complete their organisation profile](/creating-an-organisation-profile).

As part of this, organisations can add their logos and photos of the schools to their profile.

We’ll make hiring staff aware of this by:

- showing them an interstitial after they sign in
- sending them an email
- by adding information to the confirmation page after creating a job listing

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

### Showing an interstitial page after signing in

Hiring staff will be shown an interstitial page prompting them to add an organisation logo and photo of the organisation.

They can click ‘Add logo and photo’ to be taken to their organisation profile.

Or they can click ‘Skip to job listings’ to take them to the list of job listings.

{{ appFigure({
  image: {
    file: "interstitial.png",
    alt: "Interstitial"
  },
  caption: "Interstitial"
}) }}

### Sending hiring staff an email to prompt them to add an school logo and photo of the school

When we launch the feature, hiring staff will be sent an email to prompt them to add an organisation logo and photo of the organisation.

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "Add your logo and photo to your organisation profile",
  content: "

Dear ((first_name))

You can now upload your logo and photo to your organisation profile.

The details you add to your organisation profile will be included in your job listings.

Add logo and photo to your organisation profile:
((link))

# Get support

Get support, report a problem or give feedback at [teaching.vacancies@education.gov.uk](mailto:teaching.vacancies@education.gov.uk).
  "
}) }}

### Adding a prompt to complete the organisation profile to the create job listing confirmation page

After creating a job listing, if there’s missing information from the organisation profile, we’ll prompt hiring staff to complete it and provide a link to do so.

{{ appFigure({
  image: {
    file: "confirmation.png",
    alt: "Confirmation page"
  },
  caption: "Confirmation page"
}) }}
