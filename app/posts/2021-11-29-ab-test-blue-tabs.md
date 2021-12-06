---
title: 'A/B test: remove blue contents tabs from job listing'
description: Removing the tabs increased clicks on ‘Get More Information’ links and had little impact on anything else.
date: 2021-11-29
---

{% from "figure/macro.njk" import appFigure with context %}

First impressions of our listing page were dominated by a set of blue contents buttons near the top of the listing. This was particularly obvious on mobile devices, where screen space is limited.

## Hypothesis

If we remove the blue contents buttons from the listing page, users will be more likely to engage with meaningful content on the page, and so be more likely to apply for a relevant role.

## Who we tested with

We tested with 623,146 jobseekers between 1st August and 29th November 2021. 50% of users were assigned each variant.

## Findings

If the test were to be repeated in identical conditions:
- 2.21 +/- 0.05 % of jobseekers would click on a ‘Get More Information’ link to an external site chosen by the publisher if the blue contents buttons were present
- 2.39 +/- 0.05 % of jobseekers would click on a ‘Get More Information’ link to an external site chosen by the publisher if the blue contents buttons were absent
There would be no statistically significant difference between the proportions of jobseekers who downloaded a document (8.2%), saved a job (0.17%) or applied for a job (0.16%). It is possible that running the test for several months longer might yield a very small but statistically significant difference, but if so, it would be so small it would be safe to ignore.

So, removing the buttons drives up the number of clicks on ‘Get More Information’ and has little impact on anything else. Possibly this behaviour is just casual users who want to click on something clicking on that button because they can no longer click on the blue contents buttons instead.

## Screenshots

The listing page with and without contents buttons on desktop looked like this:

{{ appFigure({
  image: {
    file: "desktop-present.png",
    alt: "A screenshot of the listing page with blue navigation buttons present." 
   },
  caption: "The listing page on a desktop device with blue navigation buttons present."
}) }}

{{ appFigure({
  image: {
    file: "desktop-absent.png",
    alt: "A screenshot of the listing page with blue navigation buttons absent." 
   },
  caption: "The listing page on a desktop device with blue navigation buttons absent."
}) }}

The listing with and without contents buttons on mobile looked like this:

{{ appFigure({
  image: {
    file: "mobile-present.png",
    alt: "A screenshot of the listing page with blue navigation buttons present." 
   },
  caption: "The listing page on a mobile device with blue navigation buttons present."
}) }}

{{ appFigure({
  image: {
    file: "mobile-absent.png",
    alt: "A screenshot of the listing page with blue navigation buttons absent." 
   },
  caption: "The listing page on a mobile device with blue navigation buttons absent."
}) }}

## Next steps

Based on these findings, we decided to remove the blue buttons from the listing page, on the basis that they make no difference  either way to almost all user behaviour, that they are not a standard GDS pattern and that they are taking up valuable screen real estate.
