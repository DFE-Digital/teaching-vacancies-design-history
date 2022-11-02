---
title: How school profiles affect creating a job listing
date: 2022-10-26
tags:
  - HN001
  - HN003
---

At the moment hiring staff provide the same information about their school every time they [create a job listing](creating-a-job-listing-iteration-2).

This includes the school or organisation’s:

- education phase
- contact email address
- email address to receive application forms
- description
- commitment to safeguarding

But as hiring staff can now manage this information in their school profile, we can reduce the effort of creating a job listing.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed

### No longer asking for education phase

At the moment, if the location does not have an education phase, hiring staff will have to provide one as part of the flow.

This will no longer be asked for.

### Adding the school’s email address to the contact details page

The contact details page currently has options to:

- select the hiring staff user’s email address
- enter a new email address

If the school or organisation profile has an email address, it’ll be an additional option.

### Adding the school’s email address to the page about receiving applications

The page about receiving applications currently has options to:

- select the hiring staff user’s email address
- enter a new email address

If the school or organisation profile has an email address, it’ll be an additional option.

### Removing ‘Commitment to safeguarding’ from the ‘about role’ page

At the moment, the ‘about role’ page asks hiring staff for their school’s commitment to safeguarding.

We’ll remove this field and let hiring staff view their school’s commitment to safeguarding at the top of the page.

### Telling hiring staff that the description of the school will appear on the job listing

Previously, we removed the field that allows hiring staff to enter a description about the school.

We’ll let hiring staff view their school’s description at the top of the page.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Receiving applications",
    img: { src: "receiving-applications.png" }
  }, {
    text: "Contact details",
    img: { src: "contact-details.png" }
  }, {
    text: "About role",
    img: { src: "about-role--closed.png" }
  }, {
    text: "About role - information expanded",
    img: { src: "about-role--open.png" }
  }]
}) }}
