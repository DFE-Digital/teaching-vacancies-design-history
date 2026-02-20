---
title: Improving how hiring staff can sort job listings
date: 2026-02-10
tags:
  - HN001
  - HN002
  
  - hiring_staff
--- 

Through user feedback, we identified that hiring staff were struggling to find some of the filters available in the job listing management area. While the filters existed, their placement and design differed from the filters used on other pages, such as the jobs search page, which peole were already familiar with.

This inconsistency made it harder for users to sort and filter their job listings, particularly when managing multiple roles across different job states.

## Key findings

From feedback and observation, we learned that:

- Hiring staff expected filters to behave and appear consistently across the service
- The existing closing date and job title filters were not easily discoverable
- Users were already comfortable with the filter and sort pattern used on the jobs page
- Switching between pages with different filter layouts caused confusion and slowed task completion

### What we have done

To address these issues, we updated the job listing management pages to align with the filter and sort design used on the jobs page. We have:

- Replaced the existing closing date and job title filters with the jobs page filter design
- Applied the updated design consistently across active jobs, draft jobs, closed jobs and jobs awaiting feedback
- Kept the default selections and available filter options unchanged, ensuring no loss of existing functionality
- Implemented the jobs page filter layout within the existing job listings frame, so sort confirmation text appears on the left and filters are positioned on the right

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The old sorting functionality where the sorting was done via text links",
    img: { src: "old.png" }
  },
  {
    text: "The new sorting functionality done via a dropdown which is more consistent with other areas of the service",
    img: { src: "new.png" }
  }
  ]
}) }}