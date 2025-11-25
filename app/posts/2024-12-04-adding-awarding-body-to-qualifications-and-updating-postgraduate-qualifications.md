---
title: Adding awarding body to qualifications and updating postgraduate qualifications  
date: 2024-12-04
tags:
  - hiring_staff
  - jobseekers
  - general_updates
  - JN001
  - HN003
--- 

Following the jobseeker application testing in September to October 2024, we realised that jobseekers came across a few difficulties within the Qualifications section.  
 
As a result, we decided to change the placement of content and options for an improved user experience. We also updated the PDF download of the application form to match the site changes.   

## Additional insights
  
The awarding body for qualifications is asked for within <a href="https://www.gov.uk/government/publications/keeping-children-safe-in-education--2/" target="_blank" rel="noopener noreferrer">Keeping Children Safe in Education (KCSIE) guidance</a> so we needed to provide a field for this to be compliant.  

## What we have done
  
We have made changes across several of our qualification screens which included removing the initial hint text at the beginning of the qualifications journey within a jobseeker application. 

We made the following changes to the ‘Add a postgraduate qualification’ page within the application journey and mirrored the changes within our candidate profiles feature:

- updated ‘Postgraduate degree’ to be ‘Postgraduate qualification’ and added hint text beneath this heading 
- updated the postgraduate qualification entry screen to read ‘qualification’ instead of ‘degree’ 
- added hint text to the postgraduate qualification entry screen 

We made the following changes to the GCSE, AS and A level pages: 

- added an optional space for jobseekers to specify the awarding body for GCSE, AS and A level pages as recommended by KCSIE 

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "Where the highlighted hint text was removed",
    img: { src: "application.png" }
  },
  {
    text: "Where ‘Postgraduate degree’ was changed to ‘Postgraduate qualification’",
    img: { src: "qualification.png" }
  },
  {
    text: "The ‘Add a postgraduate qualification’ entry screen",
    img: { src: "postgraduate.png" }
  }
  ]
}) }}

