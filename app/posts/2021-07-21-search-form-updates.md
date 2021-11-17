---
title: Updating the search for a job form 
description: Usability improvements to the search form on the service start page.
date: 2021-07-21
---

{% from "figure/macro.njk" import appFigure with context %}

We identified a number of usability improvements we wanted to make to the search form on our service start page.

## Where we started

This is what the search form looked like as of June 2021.

{{ appFigure({
  image: {
    file: "initial-search.png",
    alt: "A screenshot of our original search form"
  },
  caption: "The default state of the search form."
}) }}

{{ appFigure({
  image: {
    file: "initial-search-with-filters-open.png",
    alt: "A screenshot of our original search form with search radius open and filters exposed."
  },
  caption: "The search form with search radius open and filters exposed"
}) }}

We wanted to remove the placeholders in the text fields as they present [a number of usability issues](https://adamsilver.io/blog/placeholders-are-problematic/). 

We also wanted to ensure the search radius field was visible at all times. The current behaviour meant that it was progressively disclosed only if the user added at least one numeric character in the location field. We then assumed it was a postcode. At this stage, radius searches were only allowed on what we called points, i.e. a specific postcode, not a region. 

To minimise additional friction on this step, we thought we could try removing the “Add more filters” UI as well, the reasoning being it would make it easier to make a broad search, then allow them to filter on search results. We also questioned what our users are even filtering at this stage as they are yet to make a search to filter on.

## What we did

By removing the placeholder text, rewording form labels and hint text, exposing the search radius and removing the filters we hope this experience of performing an initial search is more straightforward for more users.

{{ appFigure({
  image: {
    file: "updated-search.png",
    alt: "A screenshot of the updated search form"
  },
  caption: "The updated and simplified search form."
}) }}

## Next steps

Have our updates made things better or worse? Our hunch is better, but we will keep an eye on things. We have a niggling feeling that the “use current location” feature could be removed to further simplify this form, but we have not prioritised any actions regarding this. It would be good to see how often it is being used first.
