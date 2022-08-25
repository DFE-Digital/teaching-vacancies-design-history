---
title: Creating a job listing iteration 2
date: 2022-08-25
tags:
  - HN001
  - JN001
---

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Role"
  }, {
    text: "Title"
  }, {
    text: "Phase missing for a single location",
    img: { src: "phase.png" }
  }, {
    text: "Phase missing for multiple locations",
    img: { src: "phase--multiple.png" }
  }, {
    text: "Key stages"
  }, {
    text: "Working patterns"
  }, {
    text: "Salary and allowances"
  }, {
    text: "Publish and closing dates",
    img: { src: "listing-dates.png" }
  }, {
    text: "Start date"
  }, {
    text: "Application form"
  }, {
    text: "About role",
    img: { src: "about.png" }
  }, {
    text: "Upload additional documents",
    img: { src: "upload.png" }
  }, {
    text: "Check answers - publishing today",
    img: { src: "check--published.png" }
  }, {
    text: "Check answers - scheduling for the future",
    img: { src: "check--scheduled.png" }
  }, {
    text: "Confirmation page - published",
    img: { src: "confirmation--published.png" }
  }, {
    text: "Confirmation page - scheduled",
    img: { src: "confirmation--scheduled.png" }
  }]
}) }}
