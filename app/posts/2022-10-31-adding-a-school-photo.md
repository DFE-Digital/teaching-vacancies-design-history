---
title: Adding a school photo
date: 2022-10-31
tags:
- HN003
---

We added a section to the school profile where users can upload a photo of their school. This makes the school profile more personalised.

We added instructions to make sure users upload an image that is the right filesize and file type:

- 640 pixels by 320 pixels
- a PNG or JPG
- smaller than 5MB

Research showed that if users did not understand the technical instructions, they would not know what to do next. So, we added a line that gave users a support contact.

We also changed the page design so the image users upload is now displayed below the heading, rather than in a summary box.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "School photo upload page",
    img: { src: "school-photo-upload-page.png" }
  },
  {
    text: "Check school photo page",
    img: { src: "check-school-photo-page.png" }
  },
  {
    text: "School photo updated page",
    img: { src: "school-photo-updated-page.png" }
  },
  {
    text: "Organisation photo updated page",
    img: { src: "check-school-photo-page.png" }
  },
  {
    text: "Organisation photo upload page",
    img: { src: "organisation-photo-upload-page.png" }
  },
  {
    text: "Organisation photo updated page",
    img: { src: "organisation-photo-updated-page.png" }
  }
  ]
}) }}
