---
title: Changing ‘jobseeker profiles’ to ‘candidate profiles’
date: 2022-10-27
tags:
  - HN002

  - candidate_profiles

---

We previously called profiles for people looking for roles ‘jobseeker profiles’.

However, research showed that the term ‘jobseeker’ does not resonate with hiring staff users. They think it suggests anyone generally seeking employment, rather than specifically qualified people seeking education roles in a school.

Also, this descriptor is used internally to describe the user group of people looking for roles, but this group don’t typically self-identify as jobseekers.

At this stage in the recruitment journey, the users are ‘candidates’, so we changed the name of the feature to ‘candidate profiles’.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Interstitial",
    img: { src: "interstitial.png" }
  }, {
    text: "Candidate profiles",
    img: { src: "candidate-profiles.png" }
  }]
}) }}
