---
title: Improving guidance and introducing a word limit on the personal statement page
date: 2026-01-29
tags:
  - JN001
  - HN002
  
  - jobseekers
--- 

We identified that the personal statement page on the application form did not provide enough clear guidance for jobseekers. People were unclear about what to include, how long their statement should be, and how detailed their response needed to be.

We also wanted to prevent jobseekers from providing overly long personal statements, which can make applications harder for hiring staff to review consistently.

## Key findings

From reviewing user feedback and the existing content, we found that:

- jobseekers needed clearer guidance on the purpose and expected length of a personal statement
- the page did not clearly encourage applicants to use the job description when structuring their response
- inconsistent terminology was being used across the page
- without a limit, personal statements could become excessively long, leading to a poor experience for hiring staff
- with the introduction of a rich text editor, we needed to understand how best to support and enforce a word limit

### What we have done

To address these issues, we made a set of improvements to the personal statement page. We have:

- updated the introductory content to clearly explain the purpose of the personal statement and set expectations on length
- updated the guidance to explain that schools typically expect personal statements to be around 2 pages, approximately 500 to 1,000 words
- updated the second paragraph to encourage applicants to refer to the job description and include relevant skills, qualities and experience
- updated terminology in the third bullet point, replacing student with pupil for consistency
- introduced a maximum personal statement length of 1,500 words to prevent applicants from submitting excessive information
- investigated how best to support this limit alongside the rich text editor, including options for displaying a word count and enforcing the maximum length

These changes help jobseekers understand expectations while supporting hiring staff with clearer, more consistent applications.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The new personal statement page with updated guidance and word count limit",
    img: { src: "page.png" }
  }
  ]
}) }}