---
title: 'A/B test: subject filters'
description: Subject filters were implemented because users do engage with them when they are present, and because they will be necessary to enable future work of mapping search terms to filters.
date: 2022-03-30
---

## Introduction

We ran this A/B test to see how jobseekers would interact with subject filters if they were introduced, and whether using the filters would improve the relevance of results and job alerts to users. There were two variants: the current version of the service without subject filters, and the test variant that contained subject filters on both the "search results" and "create a job alert" pages.


## Hypothesis 
IF subject filters are present THEN users will engage with them AND will receive more relevant search results and job alerts.


## Who we tested with 
We tested with 264,313 jobseekers between 22 February 2022 and 15 March 2022. 50% of users were assigned to each variant.


## Limitations
These tests were running when we introduced subject SEO/internal landing pages that use filters. Clicking on these meant that subject filters were applied even when users were not shown the subject filters variant (i.e. the default variant) on the search results page. Moreover, if a user then clicked the search CTA on this page, the filter would be removed and so their search experience was significantly disrupted. 

Consequently, the A/B test does not show reliable results, especially when it comes to measuring the relevance of search results, as the disrupted search experience adversely affected these. However, we still gained useful insight into the usage of these features.


## Findings
-  About 1% of users appear to use subject filters when they are displayed on the page
-  The numbers are higher on desktop (3%) than on mobile (0.5%)
-  This could be due to the fact that they are more prominent and easier to use on the desktop view of the service


## Next steps
We implemented the subject filters despite the bug (discussed under the "limitations" section) meaning that we could not accurately measure how the subject filters affected the relevance of results and job alerts for jobseekers. However, we knew that subject filters would be necessary for mapping search terms to filters, and the A/B test did prove that users engage with them when they are present, therefore, we decided to keep them.


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Without subject filters",
    img: { src: "without-subject-filters.png" }
  }, {
    text: "With subject filters",
    img: { src: "with-subject-filters.png" }
  }]
}) }}
