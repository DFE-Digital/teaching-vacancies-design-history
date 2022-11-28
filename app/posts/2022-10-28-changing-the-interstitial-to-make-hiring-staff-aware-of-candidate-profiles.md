---
title: Changing the interstitial to make hiring staff aware of candidate profiles
date: 2022-10-28
tags:
- HN002

- school_profiles
---

We recently designed [an interstitial page to make hiring staff aware of candidate profiles](/making-hiring-staff-aware-of-jobseeker-profiles/). We’ve improved the copy on this page to make it clearer and more specific.

Previously, the interstitial told users what they could expect to see on a candidate profile:

- Qualified teaching status
- Job preferences
- Experience
- Qualifications

We removed qualified teaching status as it is not required for all roles on the service. This makes the feature more inclusive of support roles, rather than just focussing on teaching roles.

We have also made it clearer that the candidates will only be visible for a school if they have specified they are willing to travel to the school’s location, and that they are interested in an education phase that the school covers.

For organisations, we have broadened this to specify that the candidates are willing to travel to at least one of their school’s locations, and that they are interested in an education phase that at least one of their schools covers.


## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "School interstitial",
    img: { src: "school-interstitial.png" }
  }, {
    text: "Organisation interstitial",
    img: { src: "organisation-interstitial.png" }
  }]
}) }}
