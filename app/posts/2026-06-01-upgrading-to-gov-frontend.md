---
title: Upgrading to GOV.UK Design System 6.0.0
date: 2026-04-06
tags:
  - JN001
  - HN001
  
  - general_updates
--- 

We recently upgraded the Teaching Vacancies service to [GOV.UK Design System 6.0.0](https://github.com/DFE-Digital/register-early-career-teachers-public/pull/2327).

This update brings a number of visual and structural changes, helping us stay aligned with the latest GOV.UK standards and improving consistency across the service.

## Why we made this change

Keeping up to date with the GOV.UK Design System ensures that our service remains accessible, consistent and familiar to users. Version 6.0.0 introduces updates to colours, typography and component styling, which collectively improve usability and bring the service in line with current guidance.

## What has changed

The most noticeable changes are in the header navigation and the colour palette used across the service.

### Header navigation

The GOV.UK Design System no longer officially supports navigation within the header component. As part of this update, we reviewed how best to adapt our existing navigation while maintaining usability for our users.

We made the decision to manually retain key account-related links, such as signing in, within the header. This ensures that important actions remain easily accessible and familiar to returning users.

### Colour updates

The updated colour palette has had a wider impact across the service. Colours have been adjusted to meet the latest accessibility standards and improve contrast.

The most visible example of this is on the homepage, where the search banner has changed significantly. While this was not the primary goal of the update, the new styling has inadvertently improved colour contrast, making the search functionality more accessible—particularly for users with visual impairments.

## Next steps

We will continue to monitor how these changes affect user behaviour and accessibility. As the GOV.UK Design System evolves, we will keep the service updated to ensure it remains aligned with best practice.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The new home page with an updated colour palette",
    img: { src: "homepage.png" }
  }
  ]
}) }}