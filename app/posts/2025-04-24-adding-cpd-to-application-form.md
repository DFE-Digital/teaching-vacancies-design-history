---
title: Adding training and continuing professional development (CPD) section to the application form and candidate profiles 
date: 2025-04-25
tags:
  - searching_for_a_job
  - JN002
  - JN003
  - HN002
--- 

In August and September 2023, we conducted a thorough review of all the user feedback received into Teaching Vacancies relating to our application form.  

We identified an unmet jobseeker and hiring staff need to specify any training and CPD completed.  

## Key findings
  
Previous user research and feedback highlighted that: 
 
- it was not possible for jobseekers to include all their training as this did not fit into any of the existing application form or profile sections   
- some jobseekers were trying to add training and CPD into the ‘Qualifications’ section, but not all the fields were relevant, and this made the journey problematic 
- hiring staff could not see the further training and CPD undertaken by prospective candidates which could be relevant to the role they were applying for  

## Initial design - May 2024

In May 2024, we released our initial version of the ‘Training and continuous professional development CPD’ section into candidate profiles and the application form.  

This change allowed jobseekers to add training and CPD into its own section on their profile or application form and provide the following details: 
 
- Name of course or training 
- Training provider 
- Grade (optional) 
- Year awarded  

## First iteration – September 2024 

We conducted user research on our application form during September 2024 and made the following changes based on user feedback: 

- We conducted user research on our application form during September 2024 and made the following changes based on user feedback: 
- added hint text to the top of the page to provide guidance on what could be included in the section  
- added a ‘Course length’ field as there were multiple versions of the same courses, but they had varying lengths and completion levels   
- renamed the ‘Year awarded’ field to ‘Date completed’ as this was better understood by jobseekers  
- moved the optional ‘Grade’ box to be the last field on the page for ease of completion 

## Second iteration – March 2025 

A second round of user research was conducted on our application form in March 2025, and we made the following changes: 

- made the ‘Training provider and ‘Course length’ fields optional as they were not relevant to all training and CPD courses 

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The 'Add training and continuing professional development (CPD)' page in the 'Training and continuing professional development (CPD)' section of the Teaching Vacancies application form looked when it was launched in May 2024.",
    img: { src: "cpd.png" }
  },
  {
    text: "The 'Add training and continuing professional development (CPD)' page in the 'Training and continuing professional development (CPD)' section of the Teaching Vacancies application form showing the changes made after user research in September 2024.",
    img: { src: "research.png" }
  },
  {
    text: "The 'Add training and continuing professional development (CPD)' page in the 'Training and continuing professional development (CPD)' section of the Teaching Vacancies application form showing the changes made after user research in March 2025",
    img: { src: "iteration.png" }
  }
  ]
}) }}



