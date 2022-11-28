---
title: Adding a school logo iteration 2
date: 2022-10-27
tags:
  - HN002

  - school_profiles

---

We recently designed a [school profile flow](/creating-a-school-profile/#updating-the-school-profile), that included adding a school logo.

We’ve now improved this page to make the instructions clearer. Research showed that if users did not understand the technical instructions, they would not know what to do next. So, we added a line that gave hiring staff a way to contact support.

We did not use a summary list on the ‘check answers’ page. Instead the logo hiring staff upload is displayed below the heading in order to use the space more appropriately.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Upload school logo",
    img: { src: "upload-school-logo.png" }
  }, {
    text: "Upload school logo - check answers",
    img: { src: "upload-school-logo--check.png" }
  }, {
    text: "Upload school logo - success message",
    img: { src: "upload-school-logo--success.png" }
  }, {
    text: "Upload organisation logo",
    img: { src: "upload-org-logo.png" }
  }, {
    text: "Upload organisation logo - check answers",
    img: { src: "upload-org-logo--check.png" }
  }, {
    text: "Upload organisation logo - success message",
    img: { src: "upload-org-logo--success.png" }
  }]
}) }}
