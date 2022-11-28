---
title: Preventing job seekers from turning on their candidate profile if they do not add their personal details or job preferences
date: 2022-11-16
tags:
  - JN002
  - HN002
  
  - candidate_profiles
---

Previously, we allowed job seekers to turn on their profile without adding their:

- personal details
- job preferences
- qualified teaching status
- qualifications
- work history
- statement about themselves

Research shows that job seekers will naturally fill out their entire profile before turning it on, because this is the best way of showcasing themselves to prospective employers.

But if a profile is turned on without adding personal details or job preferences it’ll have knock on effects.

For example:

- without a name, we’d have to put a placeholder name of ‘Anonymous 1’ (or similar) when displaying the profile to hiring staff
- without job preferences, we’ll not be able to show the candidate profile to hiring staff because we cannot map the profile to a relevant school

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

If the job seeker turns on their profile without adding their personal details or job preferences, they’ll see an error summary at the top of the page.

The possible error messages are:

- You must complete your personal details before you turn on your profile
- You must complete your job preferences before you turn on your profile

Clicking on these links takes the job seeker to the relevant section of their profile.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Sections not started yet",
    img: { src: "not-started.png" }
  }, {
    text: "Sections incomplete",
    img: { src: "incomplete.png" }
  }]
}) }}
