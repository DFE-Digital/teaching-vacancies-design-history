---
title: 'A/B test: popular searches (quick links) on home page'
description: The popular searches quick links were implemented because we deemed it unlikely that they would worsen users' search experiences
date: 2022-08-16
---

## Introduction: 
We ran this A/B test to see whether adding "popular searches''/quick links (based on the most popular keywords, and with the intention to change these seasonally) below the search boxes would worsen the jobseeker search experience.  The reason they may have worsened the jobseeker search experience is because the search results displayed after clicking on a link were not filtered by a location entered by a user - therefore, the results may not have been relevant to users. We wanted to test whether this was true, so that we could make an informed decision about whether to introduce the quick links for SEO benefit (the benefit would come from these links appearing further up the homepage than the internal landing page links below).

We tested two variants with users: the default home page without quick links, and the homepage with "popular searches" quick links underneath the search boxes.


## Date work was completed: 
30th March 2022 (A/B test turned off)


## Hypothesis: 
If quick links are displayed then users will click on them, and these will lead to them seeing less relevant results.


## Who we tested with: 
We tested with 200,302 jobseekers between 1st February and 21st February 2022. Half of users were assigned to each variant of the homepage.


## Limitations:
This was affected by the subject filters A/B test. Since all of the quick links use filters, if a user clicked on a subject quick link when the subject filters variant was not active, their search experience will have been disrupted. This is because they will not have seen the filters displayed, despite a subject filter being used on a subject landing page. However, we were able to isolate some data from the period before the subject filters were introduced.


## Findings:
- Users do use the quick links when they are shown to them
  - we could not measure directly when the quick links were used, however, we were able to compare the volumes of users directed to landing pages from internal link clicks between the two variants to gauge if the quick links were being used
  - 7.47% of users visited a landing page from an internal link click when quick links were present, compared to 7.25% of users when they were not present
  - this was a significant difference at the 90% confidence level

- Desktop users were more likely to use the quick links
  - on mobile, visits to landing pages from internal link clicks was 6.99% with quick links, and 6.88% without
  - however, on desktop, visits to landing pages from internal link clicks was 8.86% with quick links, and 7.86% without
  - this could be because the quick links are harder to click/tap on mobile, as well as being less obvious to users on a smaller screen

- Displaying quick links did not necessarily cause less relevant search results for users
  - the document download rate (DDR) was 10.62% without quick links and 10.51% with quick links
  - moreover, the job saved rate was 0.46% without quick links and 0.42% with quick links, and this was significantly similar at the 85% confidence level


## Next steps:
Based on these findings we decided to implement the "popular searches" quick filters. This is primarily for SEO benefit - which will take time to be measurable and apparent - but we were satisfied that their presence would not lead users towards having a poor search experience.

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Without quick links",
    img: { src: "without-quick-links.png" }
  }, {
    text: "With quick links",
    img: { src: "with-quick-links.png" }
  }]
}) }}
