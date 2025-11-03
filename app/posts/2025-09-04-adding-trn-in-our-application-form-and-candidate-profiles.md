---
title: Adding Teacher Reference Number (TRN) in our application form and candidate profiles 
date: 2025-09-04
tags:
  - searching_for_a_job
  - candidate_profiles
  - JN002
--- 

In August 2024, we reviewed the data held within Teaching Vacancies as part of a departmental review of the teacher trainee journey. We reviewed this with the aim of improving transitions between departmental services to provide a seamless user experience.  

During this review, we identified that Teaching Vacancies does not hold a unique identification number for all users to aid in the transitions between services. There is a National Insurance number field, but this is optional and only within our application form.  

## What we have done
  
Within the professional status section of the application form and candidate profiles, we have added a TRN field. The TRN field is mandatory if the jobseeker answers ‘Yes’ to the Qualified Teacher Status (QTS) question on holding QTS. This is due to all QTS holders having a TRN. If the jobseeker answers ‘No’ or ‘I’m on track for QTS’, then the TRN field is optional.  

## Key findings 
  
User research was conducted on our application form during September 2024. The TRN addition was included, which highlighted that nearly all jobseekers expected to provide their TRN within the application form. Those that didn’t also did not have QTS and left the field blank.  

Making providing a TRN mandatory for QTS holders did not appear to create any barriers as QTS holders either knew (or knew where to locate), their TRN and were happy to do so during an application process.  

However, the design of the error messaging did cause confusion to some jobseekers as they could select ‘Yes’ to holding QTS and ‘No’ to a TRN, but the error would happen when trying to submit the page. Although jobseekers did manage to work out why the page was erroring, this was not as seamless as we would have liked.  

### Iteration 1

Based on the user research feedback, in April 2025 we decided to: 

- remove the radio button response from the TRN question and have the input field directly on the page 
- added hint text under the QTS question to warn jobseekers that they will need to provide their TRN 

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The professional status section of the Teaching Vacancies application with the changes made as described in the previous paragraph",
    img: { src: "application.png" }
  },
  {
    text: "The professional status section of the Teaching Vacancies application with the changes made as described in the previous paragraph.",
    img: { src: "application2.png" }
  } 
  ]
}) }}


