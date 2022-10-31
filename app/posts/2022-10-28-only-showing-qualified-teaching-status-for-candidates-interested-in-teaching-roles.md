---
title: Only showing qualified teaching status for candidates interested in teaching roles
date: 2022-10-28
tags:
- HN002
- JN002
---

Previously, qualified teaching status (QTS) was included in [candidate profiles](/creating-a-jobseeker-profile-iteration-2/) for all roles on the service.

QTS is relevant to teaching roles and gives hiring staff confidence that the candidates have the right experience for the following roles:
- Teacher
- Headteacher, deputy or assistant headteacher
- Head of year, department, curriculum or phase
- SENDCo (special educational needs and disabilities coordinator)

These candidates can say that they have QTS, or are on track to receive it if they are currently in teacher training.

We iterated the candidate profile design so qualified teaching status (QTS) is only included on profiles where the candidate is interested in teaching roles, or teaching and support roles.

Now, it will not say ‘Does not have QTS’ on profiles where the candidate is exclusively looking for support or SENDCo (special educational needs and disabilities coordinator) roles, as this is not a requirement for the job:
- Teaching assistant
- HLTA (higher level teaching assistant)
- Learning support, cover supervisor or tutor

This makes candidate profiles more inclusive of all the roles in scope on the service, rather than focussing on teaching roles specifically.



## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Candidate profiles",
    img: { src: "candidate-profiles.png" }
  }, {
    text: "Teacher candidate profile",
    img: { src: "teacher-candidate-profile.png" }
  }, {
    text: "Teaching assistant candidate profile",
    img: { src: "teaching-assistant-candidate-profile.png" }
  }]
}) }}
