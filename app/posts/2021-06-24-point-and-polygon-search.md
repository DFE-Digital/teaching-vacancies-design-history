---
title: Point and Polygon location searches
description: A brief history of location search on Teaching Vacancies; how we transitioned from text based search to a point/polygon location system to provide more accurate search results.
date: 2021-06-24
related:
  items:
  - text: Jira ticket
    href: https://dfedigital.atlassian.net/browse/TEVA-871
  - text: Jira ticket
    href: https://dfedigital.atlassian.net/browse/TEVA-1391
---

{% from "figure/macro.njk" import appFigure with context %}

## Introduction
The first iteration of search on Teaching Vacancies was very basic, making use of text-based search to determine where a role was based (For example, searching ‘London’ searched the fields of a job listing for the text ‘London’).
This was followed by a point-based location search, where a location search would plot a point on a map, and all results within a specific radius of that point would be returned to the user.
Our most recent addition to location search on the service is the introduction of polygon search, which this design history will explore in more detail. A polygon search completes a search within a defined area, as opposed to a circle around a specified point, and, in theory, should return more accurate results to a user who searches for an area such as “London”.

## User needs
As a: Jobseeker
I need to: Be able to search for jobs in an accurately defined area
So that: I can find a role in the location that I desire to work in



##  The introduction of polygons

We will first define the difference between a “point” search and a “polygon” search.

A point search will take a single point on the map (for example a postcode) and plot a circle around that point, with the radius of the circle defined by the user. Prior to the introduction of polygons, searching for a location such as “London” would result in a pin being placed at the centre of London and a circle being drawn around that point. Any results that are within that circle are returned to the user.

A polygon search will return results that are within a defined area: the polygon. We have implemented polygons for major towns & cities, counties, unitary authorities, London boroughs, and regions. These areas are defined by the Office for National Statistics (ONS). Teaching Vacancies retrieves the ONS data through various API endpoints (dependent on polygon type).
When the user searches for a location that has an associated polygon (for example “London”, or “Leicestershire”) the search is completed within that polygon; if no polygon exists for the location term used (e.g. “SW3”) then a point location search is completed.


##  How did we improve polygons?

A “polygon” search was initially restricted to the area within the polygon only, the user was not able to define a radius around the searched area. This ensured that only results within the relevant area were returned, however this led to an unsatisfying result when no results were found within the polygon, as we were unable to recommend similar jobs nearby (as we could do with a point search by expanding the radius of the search).

Furthermore, the inability to apply a radius to a polygon search led to confusing behaviour for users, who weren’t aware that we had two different types of location search, and were only able to apply a radius to a point search.
This problem was solved by the introduction of “buffer areas” for polygons. Similar to the radius functionality for a point search, this allows the user to  incrementally increase the area of the polygon.



## What we did next

As we did not initially inform the user that there are two different types of location search being performed on the service the introduction of polygons introduced some new issues. Prior to their introduction, a default radius of 10 miles was applied to all searches that utilised a location. When buffer areas for polygons were introduced this 10 mile default was also applied to polygon searches, which in many cases led to huge areas being searched, resulting in irrelevant search results being returned to users.
If we were to resolve this issue by setting the default search radius to “This area only” (a 0 mile radius) this would introduce new issues, with point searches returning no results as no area would be created in this scenario.

This issue was resolved by removing the search radius selection from the service homepage. When a user completes a location search, we determine whether the entered location is a point or a polygon and apply an appropriate radius to the search. When a point is identified a radius of 10 miles is applied, and when a polygon is identified a radius of 0 miles is applied. This ensures that an appropriate area is searched in both cases, and removes the need for users to be informed of the two different types of searches.
This logic was also applied to job alerts, increasing the location relevance for jobseekers.

## Screenshots
At time of implementation we did not display a map to jobseekers on the service.
The maps shown below are instead a tool that helps us to debug the location search by visualising results.

{{ appFigure({
  image: {
    file: "example-of-a-point-location-search.png",
    alt: "Example of a point location search"
  }
}) }}
{{ appFigure({
  image: {
    file: "example-of-a-polygon-location-search.png",
    alt: "Example of a polygon location search"
  }
}) }}
{{ appFigure({
  image: {
    file: "the-london-polygon-unbuffered.png",
    alt: "The London polygon with no buffer"
  }
}) }}
{{ appFigure({
  image: {
    file: "the-london-polygon-with-a-5-mile-buffer.png",
    alt: "The London polygon with a 5 mile buffer"
  }
}) }}
{{ appFigure({
  image: {
    file: "the-london-polygon-with-a-10-mile-buffer.png",
    alt: "The London polygon with a 10 mile buffer"
  }
}) }}
{{ appFigure({
  image: {
    file: "service-homepage-before-radius-selection-was-removed.png",
    alt: "The Service homepage before radius selection was removed "
  }
}) }}
