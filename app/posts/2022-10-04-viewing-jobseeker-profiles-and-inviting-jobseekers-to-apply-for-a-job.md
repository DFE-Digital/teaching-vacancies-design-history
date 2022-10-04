---
title: Viewing jobseeker profiles and inviting jobseekers to apply for a job
date: 2022-10-04
tags:
  - HN002
  - JN002
  - JN006
---


We recently designed a way for [jobseekers to create a profile](/creating-a-jobseeker-profile).

We’ve now designed a way for hiring staff to view relevant jobseeker profiles and invite them to apply for their jobs.


## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

Users can click ‘Jobseeker profiles’ at the top of every page.

The page shows a list of jobseeker profiles that are a potential match for vacancies at the school or organisation.

Clicking on the name of a jobseeker takes the user to the jobseeker profile details page.
### Showing jobseeker profiles that match the school or organisation

For schools, we’ll only show jobseeker profiles that:

- have set a location preference that’s within the vicinity of the school
- have set an education phase preference that matches the school, if the school has an education phase

For organisations that have multiple locations, we’ll only show jobseeker profiles that:

- have set a location preference that is within the vicinity of at least one of the locations
- have set an education phase preference that matches at least one of the locations, if at least one of the locations has an education phase

### Showing preferences next to each jobseeker profile

Each jobseeker profile in the list shows:

- qualified teaching status (QTS)
- preferred roles
- preferred key stages
- preferred working patterns

We’ll also show the preferred education phase if the organisation has multiple locations with different education phases.

We’ll also show subjects if the school has an education phase of:

- Middle school
- Secondary school
- Sixth form or college
- Through school

### Ordering the list of jobseeker profiles by newest first

The list of jobseeker profiles is ordered by newest first.

Hiring staff will be sent an email notification whenever a new jobseeker profile matches a vacancy.

Clicking the link to view the new profiles will take them to the jobseeker profiles list page.

Ordering the list by newest first means it’ll be easier for hiring staff to find the jobseeker profiles that relate to the notification.

### Jobseeker profile details page

The jobseeker profile details page shows:

- Qualified teaching status (QTS)
- Contact details
- Job preferences
- About
- Work history
- Qualifications

An ‘Invite to apply for a job’ button will be included at the top of the page if the school has at least 1 job that matches the jobseeker’s preferences.

A ‘Previous invitations’ link will be included at the top of the page if the jobseeker has been invited to apply for a job.

### Inviting jobseekers to apply for a job

Clicking ‘Invite to apply for a job’ takes the hiring staff user to a page that lists all of the active jobs that match the jobseeker’s job preferences.

Hiring staff can choose which jobs to select.

There’s some warning text that says, for example, ‘Tony Stark will be sent an email to tell them they’ve been invited to apply for the jobs you selected’.

Clicking ‘Send invite to apply’ sends the invite and takes the hiring staff user back to the jobseeker profile page with a success message that says ‘Invited to apply for a job’.

We want to consider how the invite to apply for a job flow works when there’s only 1 matching job.
### Seeing previous invitations

Clicking ‘Previous invitations’ takes the hiring staff user to a page showing a list of previous invites to apply for a job.

The list shows:

- the jobs the jobseeker was invited to apply for
- the hiring staff user who sent the invite
- the date and time the invite was sent

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Jobseeker profiles list - hiring staff work at a school",
    img: { src: "jobseeker-profiles.png" }
  }, {
    text: "Jobseeker profiles list - hiring staff work at an organisation with multiple schools",
    img: { src: "jobseeker-profiles--organisation.png" }
  }, {
    text: "Jobseeker profile",
    img: { src: "jobseeker-profile.png" }
  }, {
    text: "Invite to apply for a job",
    img: { src: "invite.png" }
  }, {
    text: "Invite to apply for a job - success message",
    img: { src: "invite--success.png" }
  }, {
    text: "Previous invitations to apply for a job",
    img: { src: "invitations.png" }
  }]
}) }}
