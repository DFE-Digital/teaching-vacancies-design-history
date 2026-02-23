---
title: Introducing governance emails for job alerts
date: 2026-01-27
tags:
  - JN001
  
  - general_updates
--- 

Currently, job alerts remain active indefinitely unless a user explicitly unsubscribes. Over time, this can result in unused or forgotten alerts, increasing subscription volumes and reducing the relevance of alerts sent to users.

To better manage subscription levels and support good data governance, we wanted to introduce a job alert governance cycle to prompt users to review or unsubscribe from alerts they no longer need.

## Key findings

From reviewing the current behaviour of job alerts, we found that:

- job alerts could remain active for years without user interaction
- users may forget they have set up alerts, particularly if they are no longer job searching
- there was no clear mechanism to encourage users to review or remove old alerts

We had no way to separately monitor unsubscribes that resulted specifically from governance activity.

### What we have done

To address this, we introduced governance emails for job alerts that have not been reviewed for an extended period. We have:

- implemented governance emails that are triggered 12 months after a job alert is created
- implemented governance emails that are triggered 12 months after a job alert was last updated
- created separate email variants for registered users and unregistered users
- ensured email content reflects whether the job alert was created or last updated
- used creation-based wording when the alert has not been changed since it was set up
- used last updated wording when the alert has been modified since creation
- formatted dates in emails in a clear, readable style. For example, 1 December 2025
- added a separate analytical event for unsubscribes triggered via governance emails

These changes help users manage their alerts more easily while allowing us to better understand and govern subscription behaviour.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}
