---
title: Finding schools
date: 2022-07-18
tags:
  - HN003
  - JN004
  - JN005
  - JN007
  - JN008
---

Research shows that some jobseekers find it useful to be able to find jobs at schools that they know or are within their local area.

We’ve looked at giving hiring staff the ability to create school profiles.

This would allow jobseekers to:

- find jobs at a school
- create a job alert for a school
- add the school to a list of favourites
- send their profile to a school

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## How it works

### School list page

Clicking ‘Schools’ from the primary navigation menu takes users to a page showing all the schools on the service, regardless of whether or not they have jobs available.

Users have the ability to filter the list by:

- age group of the school
- schools that are special schools
- schools that have jobs available

### School details page

Clicking on a school takes the user to the school details page. It contains:

- type of school
- education phase
- age range
- school size
- ofsted report
- contact details
- how early career teachers are supported
- the benefits of working at the school
- the location
- additional documents like a school brochure

If the user is signed in, they can add the school to their favourites list.

If the user has a profile, they can send their profile to the school.

If the school has jobs available, there’s a link to the jobs.

We have not designed these journeys yet.

## What we want to find out

We want to find out if jobseekers:

- find the school details page useful
- will add schools to their favourites
- understand what it means to send their profile to a school
- would send their profile to a school
- what filters would be useful on the schools list

## Further considerations

We want to consider:

- giving users the ability to add location preferences so that they do not get contacted about jobs that are too far away
- giving users options to state that they’re looking for jobs, or are not looking but happy to hear about new roles
- giving users a way to stop their profile being seen by their current employer
- the consequences of turning off a profile after it’s been saved by a school
- defaulting the filters that are applied on the job list page and school list pages based on the jobseeker’s preferences from their profile
- giving users the ability to search for a school
- adding a school logo and photo
- giving hiring staff the ability to turn on their school profile

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "School list"
  }, {
    text: "School details"
  }, {
    text: "Send profile to school",
    img: { src: "send-profile.png" }
  }]
}) }}
