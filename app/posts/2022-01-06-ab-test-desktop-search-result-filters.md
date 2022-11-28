---
title: 'A/B test: move keyword & location fields to the top of search results for desktop users'
description: Moving the fields had no impact on search success, but encouraged searchers to refine searches using filters more often
date: 2022-01-06
tags:
  - searching_for_a_job
---

{% from "figure/macro.njk" import appFigure with context %}

Usage of filters to refine search results was low. We thought that this might be because they were hidden off the bottom of the screen on desktop devices, as the keyword and location fields were taking up space higher up the page on the left hand side.

## Hypothesis

If we move the keyword and location fields to the top of search results for desktop users, more users will engage with the filters and so users will be more likely to find relevant results.

## Who we tested with

We tested with 74,478 jobseekers on desktop devices between 17th November 2021 and 6th January 2022. 50% of users were assigned each variant.

## Findings

If the test were to be repeated in identical conditions:
- 30.25% +/- 0.46% of jobseekers would open a vacancy from a search results page if the keyword and location were in the left hand sidebar above the search filters. 11.7% +/- 0.3% of these jobseekers would use filters to refine a search, and 21.1% +/- 0.4% would refine a search without using filters.
- 30.34% +/- 0.47% of jobseekers would open a vacancy from a search results page if the keyword and location were in a horizontal bar at the top of the search results page. 16.1% +/- 0.4% of these jobseekers would use filters to refine a search, and 19.0% +/- 0.4% would refine a search without using filters.

So, moving the keyword and location fields to the top of search results for desktop users did encourage more users to engage with the filters. However, this had no significant impact on how likely they were to find relevant results.

## Screenshots
The two versions of the search results page on desktop devices which we tested are below.

{{ appFigure({
  image: {
    file: "keyword-location-at-top.png",
    alt: "Variant with keyword and location fields positioned at the top."
  },
  caption: "Variant with keyword and location fields positioned at the top."
}) }}

{{ appFigure({
  image: {
    file: "keyword-location-on-left.png",
    alt: "Variant with keyword and location fields positioned on the left hand side."
  },
  caption: "Variant with keyword and location fields positioned on the left hand side."
}) }}

## Next steps

Based on these findings, we decided to move the fields to the top of the search results page. Of the two designs this had a slightly higher vacancy view rate (even though the difference between the two was not statistically significant) and did make the filters more visible. However, we don’t expect any significant impact on the number of jobseekers viewing listings as a result.
