---
title: Notifying hiring staff about matching jobseeker profiles
date: 2022-10-05
tags:
  - HN002
  - JN002
  - JN006
  - JN009
---

{% from "email/macro.njk" import appEmail with context %}

We’ll email hiring staff about matching jobseeker profiles:

- after a job listing is created
- after a new jobseeker profile is turned on

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## Emails

The line ‘at ((location))’ will not be included for vacancies that have been listed at multiple locations.

### After creating a job listing

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "((number_of_profiles)) jobseeker profiles match ((vacancy_title)) vacancy",
  content: "

Dear ((first_name))

There are ((number_of_profiles)) jobseeker profiles that match your ((vacancy_title)) at ((location)).

You can view the profiles and if you think jobseekers could be suitable, you can invite them to apply.

View profiles:
((link))

# Get support

Get support, report a problem or give feedback at [teaching.vacancies@education.gov.uk](mailto:teaching.vacancies@education.gov.uk).
  "
}) }}

### After a new jobseeker profile matches a job and there’s only one matching vacancy


<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "((number_of_profiles)) new jobseeker profiles match ((vacancy_title)) vacancy",
  content: "

Dear ((first_name))

There are ((number_of_profiles)) new jobseeker profiles that match your ((vacancy_title)) at ((location)).

You can view the profiles and if you think jobseekers could be suitable, you can invite them to apply.

View profiles:
((link))

# Get support

Get support, report a problem or give feedback at [teaching.vacancies@education.gov.uk](mailto:teaching.vacancies@education.gov.uk).
  "
}) }}

### After a new jobseeker profile matches a job and there’s more than one matching vacancy

<!-- markdownlint-disable MD025 MD001 -->
{{ appEmail({
  subject: "((number_of_profiles)) new jobseeker profiles match ((number_of_vacancies)) of your vacancies",
  content: "

Dear ((first_name))

There are ((number_of_profiles)) new jobseeker profiles that match ((number_of_vacancies)) of your vacancies.

You can view the profiles and if you think jobseekers could be suitable, you can invite them to apply.

View jobseeker profiles that match your ((vacancy_title)) vacancy at ((location)):
((link))

View jobseeker profiles that match your ((vacancy_title)) vacancy at ((location)):
((link))

# Get support

Get support, report a problem or give feedback at [teaching.vacancies@education.gov.uk](mailto:teaching.vacancies@education.gov.uk).
  "
}) }}
