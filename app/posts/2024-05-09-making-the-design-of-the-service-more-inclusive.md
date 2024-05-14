---
title: Making the service more accessible
date: 2024-05-13
tags:
  - JN001
  - HN001
  
  - general_updates
--- 

Recently, an audit of the Teaching Vacancies service was conducted to understand how we could make the service more accessible. The website was tested against the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards, by user journey testing with assistive technologies. We have made some changes across the website to ensure it's more inclusive.

## Identified issues

The audit uncovered issues primarily revolving around navigation challenges, issues included:

- heading structure: some pages displayed structured heading hierarchies incorrectly, impacting keyboard and screen reader users
- footer focus order: The focus order of footer elements was found to be illogical
- missing Accessible Rich Internet Applications (ARIA) landmarks: some pages lacked ARIA landmarks, hindering user orientation
- duplicated landmark names: duplicated landmark names were discovered, potentially causing user disorientation
- redundant alternative text: decorative imagery on 'Job' and 'Job Listing' pages presented redundancy issues with alternative text
- screen Reader Compatibility: user journey testing revealed compatibility issues with screen readers, particularly on Mac OS VoiceOver and iOS VoiceOver, impacting keyboard navigation and button responsiveness

## Key changes

Issues were organised into themes and then the WCAG guidelines conformance levels (A,AA,AAA). In total, we have resolved an estimate of 50 accessibility issues across the website.

### Heading structure

On some of the pages, there were missing and skipped headers. We have now resolved all heading structure issues to improve the way people using assistive technology can navigate the site.

### Footer focus order

We have redesigned the footer tab sequence to follow the read-order of top to bottom, instead of focussing from left to right. Additionally, within the footer, the focus indicator is now sufficient and is consistent with the rest of the website.

### Missing ARIA landmarks

On all tested pages, specific content was not contained within an ARIA landmark, for example, the breadcrumbs component. All duplicate and missing landmarks have now been resolved to help assistive technology users orient themselves on pages across the website.

### Redundant alternative text

On the job and job listing pages, there was decorative imagery which had alternative text. This alternative text has now been removed as the information was already provided within the text which sits alongside it. Screen readers will now bypass this so it doesn’t cause repetition. 

### Screen reader compatibility

While testing with Mac OS VoiceOver, an issue was found with the skip to main content link at the start of each page when the cookie banner was present. There were also issues with separators and hidden words being announced by the screen reader and the toggle bullet points button becoming unresponsive while iOS VoiceOver was enabled.

The cookie banner functionality and page hierarchy has been changed when present to ensure users can now use the skip to main content link correctly. 

The code to display separators across the website has also been changed to prevent them being annouced to people using VoiceOver.

We're currently exploring a re-design of the toggle bullet points button to ensure the design is more inclusive.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "An example of the heading level being skipped from H1 to H3 on the Teaching Vacancies home page prior to being resolved.",
    img: { src: "heading-level.png" }
  },
  {
    text: "A GIF showing the improved tab sequence on the footer of the service.",
    img: { src: "footer-tab-sequence.gif" }
  },
  {
    text: "An example of landmarks on the page that were not clear, such as the breadcrumb component, which has since been resolved.",
    img: { src: "aria-landmarks.png" }
  },
  {
    text: "The cookie banner will now be positioned near the top of the page hierarchy when present.",
    img: { src: "cookie-banner.png" }
  }
  ]
}) }}
