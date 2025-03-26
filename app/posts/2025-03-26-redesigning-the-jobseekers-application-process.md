---
title: Redesigning the jobseekers application process 
date: 2025-03-26
tags:
  - general_updates
--- 


After user testing in September and October 2024, we identified a key pain point in the jobseeker application process around the summary page.  
 
The summary page was a long, scroll-heavy layout that made navigation difficult. This was especially true for users who did not complete their application in one sitting. When they saved it as a draft and came back to it later, they would start on this page and had to navigate in and out of the summary form for each section. 
 
For users completing the application in one sitting, it was a more straightforward linear journey as they could click through sections.   

## Key findings from user research
  
User research highlighted several issues with the previous application design: 
 
- the summary view contained too much information, making it hard to quickly identify sections with missing details 
- users couldn’t navigate through each section in a structured way, leading to excessive scrolling and frustration when clicking in and out of different areas — this mostly affected users not completing applications in one sitting 

## Additional insights 

A thorough design review revealed inconsistencies in the step-by-step process and visual cues: 
 
- the step-by-step navigation sometimes disappeared when users exited and returned, making it unclear where they left off 
- the color-coding system was not always intuitive, for example, blue indicated ‘complete’ and white ‘in progress’ for the step-by-step navigation, which conflicted with the summary list tags (green for ‘complete’, yellow for ‘in progress’) 
- scrolling was a bigger issue for users who didn’t complete the application in one sitting, as they frequently returned to the summary screen, whereas those completing it in one go experienced a more seamless, linear flow. 

## What we've done

Considering the length of the application and the likelihood of users completing it over multiple sessions, we decided to follow the GOV.UK Design System task list component. 
  
This change allows: 
 
- a clearer breakdown of tasks, making it easy to see what’s completed and what still needs attention 
- users can leave and return without confusion, always knowing exactly where they left off 
- more flexibility, letting user’s complete sections in any order while providing better visibility of what each section includes upfront
  

 For the final summary screen, we replaced the summary list with summary cards. The aim of this is to help users scan large amounts of information more easily.  
 
By implementing the task list, we now only need to show the full summary when the user is reviewing the application to submit it. This avoids the previous heavy scrolling when coming in and out of sections. 
  
This is a significant change for our users, and we’ve now implemented these changes in the live service. We want to do further user research to ensure the new design meets their needs and continues to improve their experience. 
 
  

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "Previous application draft summary vs new application draft summary",
    img: { src: "previous-application-draft-summary-vs-new-application-draft-summary.png" }
  }
  ]
}) }}


