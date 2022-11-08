---
title: Handling incomplete sections of a candidate profile
date: 2022-11-08
tags:
  - JN002
---

When a jobseeker [creates a candidate profile](/creating-a-jobseeker-profile-iteration-2), there are situations that can lead to having incomplete sections.

This can happen when the jobseeker:

- enters their name but leaves before answering whether they want to provide a phone number
- enters some job preferences but leaves before completing them all
- enters the type of qualification but leaves before filling out the other details

Also, we’re planning to prepopulate a candidate profile using the jobseeker’s latest job application. This may result in incomplete sections in places where the job application form and candidate profile differs.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

Incomplete sections are distinguished by:

- using adding a blue border along the left hand side of the section
- including an instruction to prompt the jobseeker to complete the section
- including a green button to complete the section

Clicking the green button takes the jobseeker to the first unanswered question, before being taken down the rest of the flow.

The provided answers will be shown. If the jobseeker changes an answer, they’ll be taken to the first unanswered question before being taken down the rest of the flow.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Incomplete sections",
    img: { src: "incomplete.png" }
  }]
}) }}
