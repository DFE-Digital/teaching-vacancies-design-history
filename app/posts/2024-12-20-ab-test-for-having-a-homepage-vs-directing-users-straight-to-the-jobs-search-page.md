---
title: AB test for having a homepage vs directing users straight to the jobs search page 
date: 2024-12-20
tags:
  - jobseeker
  - JN001
--- 

We wanted to test a hypothesis that sending jobseekers directly to the jobs search page would increase job searches or result in more relevant searches being made. 

## What we tested

To test our hypothesis, we ran an AB test from 3 December to the 17 December 2024. We sent half of the service traffic to the home page, (like usual), and the other half were sent straight to the jobs search page.  

We decided on a primary and secondary metric to measure this. Our primary metric was bounce rate, and the secondary metric was clicks per page.   

There was a negligible difference between the results during the AB test. Our homepage does direct users to relevant places – for example, pre-filtered job results, sign in, create a job alert pages. This meant that removing the home page would be a big change to the service set up and design.  

## Output

Due to the results, no changes will be made, as there is insufficient evidence to warrant this change being worthwhile or necessary.   

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The homepage which was the control or current process",
    img: { src: "home.png" }
  },
  {
    text: "The job results page which was the variant",
    img: { src: "jobs.png" }
  }
  ]
}) }}

