---
title: Automatically deleting old draft jobs listings
date: 2022-07-19
tags:
  - HN001
  - hiring_staff
---

{% from "email/macro.njk" import appEmail with context %}

Users can create draft job listings, but sometimes they do not go on to publish them.

This is problematic because:

- the list of draft jobs can get very long
- when we update the structure of a job listing, we cannot easily deprecate the older ones
- they take up resources

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

We’ll delete any draft job listings that have not been updated in the last 60 days.

We’ll notify users that the draft job listing will be deleted 7 days before, and again 1 day before.

## Emails

### 7 days to go

{{ appEmail({
  subject: "6 draft job listings will be deleted in 7 days",
  content: "

Dear ((name))

You currently have 6 draft job listings that have not been updated for over 2 months.

These job listings will be deleted in 7 days on 19 August 2022.

If you would like to keep these job listings, please make changes or publish them.

Manage draft job listings:

((link))

# Get help

Report a problem or give feedback on how we can improve the service.

https://teaching-vacancies.service.gov.uk/support_request/new

  "
}) }}

### 1 day to go

{{ appEmail({
  subject: "6 draft job listings will be deleted in 1 day",
  content: "

Dear ((name))

You currently have 6 draft job listings that have not been updated for over 2 months.

If you do not make any changes or publish them, they’ll be deleted tomorrow (19 August 2022) at 11:59pm.

Manage draft job listings:

((link))

# Get help

Report a problem or give feedback on how we can improve the service.

https://teaching-vacancies.service.gov.uk/support_request/new

  "
}) }}
