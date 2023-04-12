---
title: Hiding a candidates profile from schools and trusts
date: 2023-04-05
tags:
  - JN002
  
  - candidate_profiles
---

We added a section to the school profile where users can hide their profile from schools and trusts. This makes the school profile more personalised.

This feature allows job seekers to:

- hide their profile from their current or previous employers
- hide their profile from any schools
- hide their profile from all schools within a trust
- hide their profile from the head office of a trust

The search does not show:

- schools outside of England 
- private or independent schools


Research conducted in February 2023 highlighted the benefits of providing a feature for teachers to hide their profiles from schools and trusts. Although some users didn't see the need to hide their own profile, they did think it would be useful for others.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Choosing if you want to hide your profile from schools or trusts",
    img: { src: "hide1.png" }
  },{
    text: "Hiding your profile search page",
    img: { src: "hide2.png" }
  }, {
    text: "Selecting I cannot find the school I am looking for",
    img: { src: "hide3.png" }
  },{
    text: "Editing your hidden schools and trusts",
    img: { src: "hide4.png" }
  },{
    text: "Detecting if a school is within a trust",
    img: { src: "hide5.png" }
  },{
    text: "Deleting a school or trust from your hidden schools or trusts",
    img: { src: "hide6.png" }
  },{
    text: "Review page for hidden schools and trusts",
    img: { src: "hide7.png" }
  }]
}) }}
