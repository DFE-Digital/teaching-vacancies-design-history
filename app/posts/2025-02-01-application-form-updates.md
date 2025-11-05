---
title: Application form updates
date: 2025-02-01
tags:
  - jobseekers
  - JN003
  - JN002
--- 


Recent user research showed we could make it easier for jobseekers to understand what to include in their application.

## Key findings

User research highlighted that: 

- jobseekers did not always notice the optional fields on our application form and thought they were mandatory  
- when entering their work history, jobseekers often didn’t notice the gaps flagged by the system. When asked to go back and explain these gaps, they struggled to find the right section to complete before moving on with their application.
- there was confusion around the references jobseekers needed to provide in their application 

## Additional insights
  
The recruitment process for schools must follow the [Keeping Children Safe in Education (KCSIE) guidance](https://www.gov.uk/government/publications/keeping-children-safe-in-education--2). We consulted with this document, and the internal policy team, whilst reviewing our references process.  

## What we have done
  
Across December 2024 and January 2025, we made the following changes to the service: 

- changed our national insurance number question to have a radio response option, to try and make the design clearer and show that this was optional
- updated the work history screen to have a summary card design for the work history entries to reduce the level of information on the page 
- introduce the error messaging and alertsto make gaps more apparent.
- relocated most of the reference's guidance onto the reference page to help jobseekers consult what information they need to provide 
- updated the references guidance to provide clarity on which references jobseekers need to give 
- added a new question into the reference page asking if the reference was their current or most recent employer  
- added validation to prevent jobseekers from completing the reference section without a reference for their current or most recent employer as KCSIE mandates this reference 

The above changes should improve the understanding and quality of completion of our application form by jobseekers.  

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The previous national insurance number question  ",
    img: { src: "one.png" }
  },
  {
    text: "The new national insurance number question ",
    img: { src: "two.png" }
  },
  {
    text: "The previous gap screen (two entries with a gap) ",
    img: { src: "three.png" }
  },
  {
    text: "The new gap screen (two entries with a gap) ",
    img: { src: "four.png" }
  },
  {
    text: "The new gap screen (three entries with gaps) ",
    img: { src: "five.png" }
  },
  {
    text: "The previous reference home screen",
    img: { src: "six.png" }
  },
  {
    text: "The new reference home screen",
    img: { src: "eight.png" }
  }
  ]
}) }}


