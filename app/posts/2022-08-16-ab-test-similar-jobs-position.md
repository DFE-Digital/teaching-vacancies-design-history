---
title: 'A/B test: position of similar jobs feature (desktop view)'
description: We decided to keep the similar jobs feature at the bottom of job listings on the desktop view of the service
date: 2022-08-16
tags:
  - general_updates
---


## Introduction:
We ran this A/B test to see whether changing the position of the similar jobs feature on the desktop version of the site would increase the similar jobs click rate.We also measured  document downloads, GMI/apply clicks and saved job conversion rates to make sure we were not reducing engagement in these areas as a result of this action.


## Date work was completed:
26th April 2022 (A/B test turned off)


## Hypothesis:
If similar jobs are displayed on the left of job listings, under the timeline, then the similar job link click rate will increase and engagement with listings will not be reduced.


## Who we tested with:
We tested with 109,548 jobseekers between 18 March 2022 and 26 April 2022. 50% of desktop users were assigned to each variant.


## Findings:

- More users clicked on similar jobs as a result of the change in position:
  - The similar job click rate was 2.64% when they are displayed on the left, compared to 2.03% when they were displayed at the bottom of the job listing.
  - This was a significant difference at the 95% confidence level.
  - This is likely to be because the similar jobs feature is more immediately visible to users in this position as they do not have to scroll down to the bottom of a listing to see them.

- Displaying the similar jobs on the left of listings  reduces engagement in other areas of the listing, as indicated by a lower document download rate (DDR)
  - The DDR when similar jobs were displayed on the left was 16.86%, compared to 17.21% when they were displayed at the bottom of the job listing
  - This was a significant difference at the 85% confidence level.
  - This could be because users experience the "paradox of choice" when shown a multitude of jobs: they view more jobs, but actually engage with them less, perhaps because they are overwhelmed by comparing them all.


## Next steps:
Based on these findings, we decided to keep the similar jobs feature in it’s original position at the bottom of job listings on the desktop view of the service. This was because, although placing them on the left increased the click rate on similar jobs, engagement with the job listings decreased, which we believe won’t be beneficial in helping users to achieve their goals


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Similar jobs on left-hand side of listing",
    img: { src: "similar-job-on-left-hand-side-of-listing.png" }
  }, {
    text: "Similar jobs at bottom of listing",
    img: { src: "similar-jobs-bottom-of-listing.png" }
  }]
}) }}
