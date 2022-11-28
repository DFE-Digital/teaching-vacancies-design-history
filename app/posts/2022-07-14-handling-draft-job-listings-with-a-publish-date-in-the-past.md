---
title: Handling draft job listings with a publish date in the past
date: 2022-07-14
tags:
  - HN001

  - hiring_staff
---

If the user creates a draft job listing, the publish date can end up being in the past.

This means users need to update the publish date before they can publish the job listing.

Previously, the page contained a red status tag which said ‘Action required’ in capital letters.

But this was ambiguous and required the user to scroll down to see it.

To simplify this, we added a blue notification banner that contains:

- a h2 heading that says ‘There’s a problem’
- a warning that says ‘The publish date must be in the future’, which links down to the publish date section

This is visible as soon as the user arrives on the page, and the warning is repeated next to the publish date using blue inset text.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Old design"
  }, {
    text: "New design"
  }]
}) }}
