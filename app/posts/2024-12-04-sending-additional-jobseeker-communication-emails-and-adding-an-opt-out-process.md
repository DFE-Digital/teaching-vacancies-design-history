---
title: Sending additional jobseeker communication emails and adding an opt out process 
date: 2024-20-03
tags:
  - jobseekers
  - JN001
--- 

After reviewing our communications to jobseekers, we identified improvements that would help support them in applying for their next roles by providing additional guidance and reminders.

## What we have done
  
To improve the experience of jobseekers using the service and to provide clearer guidance to support their job search, we made the following updates to our standard service messages between October and December 2024:

- Generated an email sent to jobseekers who have saved a job but have not applied for it, 10 days before the closing date, to ensure they are aware of the upcoming deadline.
- Categorised job roles into the following groups: teaching, middle leadership, leadership, teaching assistant, and support roles.
- For the teaching and middle leadership groups, we included links to relevant guidance pages within our emails.
- For these same groups, we updated several emails to include links to guidance supporting:
    - writing an application
    - teaching interviews
    - interview lessons
- This applies to:
    - “application started but not finished” emails
    - saved jobs emails
    - application rejected emails
    - application submitted emails

## Additional support

We wanted to provide support beyond standard service messaging and therefore:

- Created an opt-out process for additional emails within the account tab.
- Began sending emails during peak recruitment periods to highlight when most opportunities are listed on the service (starting from May 2025).

## Outcome

These changes have enabled us to communicate more effectively with jobseekers and provide further useful support to account holders, helping them progress their teaching careers.

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The your account page with a new opt out of emails section",
    img: { src: "sending.png" }
  }
  ]
}) }}

