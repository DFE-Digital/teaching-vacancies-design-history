---
title: The use of filters when searching
description: Optimising the usability and frequency of filter use when searching.
date: 2021-07-12
---

{% from "figure/macro.njk" import appFigure with context %}

For the period 11 June - 11 July 2021, we believed only 0.16% of searches contained filtered results. We wanted to know why our users weren’t filtering search results.

Based on this data, we had a number of hypotheses:

* keywords and location are enough and our users don't need filters
* our current filter options aren’t relevant or useful
* users can’t find the filters
* we are encouraging a ‘search again’ behaviour (opposed to filtering current results) by the placement of the search form above the filters

We now know that filter use was higher than previously thought during this period as our reporting data was incorrect. For the same period (11 June - 11 July 2021), approximately 10% of searches contained filtered results.

## Hypothesis: Our users can’t locate the filters

We had concerns around the discoverability of our filters on the search results screen. By default the filters were hidden within accordions. 

{{ appFigure({
  image: {
    file: "original-filters.png",
    alt: "A screenshot of our original filters"
  },
  caption: "How the filters looked in their closed and open state.."
}) }}

The GOV.UK design system [guidance on accordions](https://design-system.service.gov.uk/components/accordion/#when-not-to-use-this-component) states:

>“Accordions hide content from users and not everyone will notice them or understand how they work … Accordions work best for simple content and links.”

We wondered if exposing the filters at all times would improve visibility and usage.

### What we did

The updated filter design followed the visual pattern which had already been used on the Find postgraduate teacher training, Register trainee teachers and Manage teacher training applications services. We had confidence knowing these services were using a similar pattern and had been included in numerous rounds of usability testing. 

Exposing the filters by default also represented a usability improvement, largely by removing the barriers to access them. When permanently exposed, there was no interaction required to open the filters before being able to use them. There was also far less chance a user wouldn't notice them.

{{ appFigure({
  image: {
    file: "new-filters-desktop.png",
    alt: "A screenshot of the updated filters at a wide viewport"
  },
  caption: "The updated filters at a wide viewport."
}) }}

{{ appFigure({
  image: {
    file: "new-filters.png",
    alt: "A screenshot of the updated filters at a thin viewport"
  },
  caption: "The updated filters at a smaller viewport in its closed and open state."
}) }}

### How it went

For the period of 11 October -  11 November 2021, approximately 18% of searches contained filtered results. 

The use of filters when searching has significantly increased since the updates were made.

## Hypothesis: We are encouraging searching again over filtering current results

We also suspect we are encouraging a ‘search again’ behaviour (as opposed to filtering the current results) by placing the search form above the filters on the search results screen. 

* Are we influencing our user's behaviour by placing the form in such a prominent position?
* Has a bias towards searching unintentionally been introduced?
* Is there a primary behaviour we want to encourage when viewing search results? Searching again or filtering?

We have planned an A/B test with a variant where the search and filter UI are decoupled. We are curious if this will affect search again frequency vs filter usage.

{{ appFigure({
  image: {
    file: "alternative-search-results.png",
    alt: "A screenshot of an experimental design which decouples search from filtering."
  },
  caption: "An experimental design which decouples search from filtering."
}) }}

## Next steps

We’ll run the A/B test on decoupling search from filtering to compare behaviour. 

Now that we know our original data was incorrect and our users are to a degree, filtering results, we need to decide if our filters are meeting user needs. The following hypotheses could be considered next:

* Keywords and location are enough and our users don't need filters
* Our current filter options aren’t relevant or useful

