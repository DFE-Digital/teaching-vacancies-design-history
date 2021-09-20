---
title: 'A/B test: radius expansion links in site searches with no results'
description: Radius expansion links helped users find vacancies without distracting them.
date: 2021-06-28
---

{% from "figure/macro.njk" import appFigure with context %}

For some time, when users complete a search that contains a radius, but no results were found, we have presented them with a series of links to alternative search radii which they could try. These links only appear if results are found for each larger radius, and are accompanied by the number of results that would be found in brackets. We wanted to test whether this was helping users to find vacancies when they had been too specific about their search radius. We also wanted to check whether the presence of the links was distracting users from creating job alerts, as creating a job alert is a priority next step for users who are unable to find a vacancy during a quiet period in the annual recruitment cycle.

## Hypothesis

If we include radius expansion links in search results with no results then more users will find vacancies, without being distracted from creating job alerts.

## Who we tested with

We tested with 439,120 jobseekers between 11th May and 28th June 2021. 50% of users were assigned each variant.

## Findings

If the test were to be repeated in identical conditions:

* 18.67% +/- 0.16% would find a vacancy if radius expansion links were included in ‘no results’ searches
* 18.47% +/- 0.16% would find a vacancy if radius expansion links were not included in ‘no results’ searches

There was no evidence that the links had any substantial impact on the job alert creation rate - in both cases, 0.38% +/- 0.03% of jobseekers created a job alert.

## Screenshots

These are the two designs we tested.

{{ appFigure({
  image: {
    file: "links.png",
    alt: "A screenshot of the search results screen with radius links" 
   },
  caption: "With radius links"
}) }}

{{ appFigure({
  image: {
    file: "no-links.png",
    alt: "A screenshot of the search results screen without radius links"
  },
  caption: "Without radius links"
}) }}

## Next steps

Based on these findings, we decided to leave the radius expansion links in place.
