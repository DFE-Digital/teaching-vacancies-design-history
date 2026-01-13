---
title: Improving the Teaching Vacancies application form to meet the needs of faith schools  
date: 2025-12-03
tags:
  - hiring_staff
  - jobseekers
  - JN001
  - HN001
  - HN003
--- 

Teaching Vacancies has an online application form schools can use to collect applications through the service. However, this form was not developed to meet the needs of faith schools, meaning a portion of schools in scope to access teaching Vacancies were not able to use our form.  

To meet the needs of faith schools, we worked with the relevant stakeholders to develop alternate versions of our form.  

## Key findings

User research highlighted that: 
 
- faith schools encourage applicants of all faiths to apply for roles in their schools, as only a minority of roles require the applicant to be of the faith of the school 
- it is important that the relevant religious information is collected from applicants, but a range of response options are required to meet differing applicant needs 
- jobseekers need to understand why they are being asked about their religious information, and for this to not discourage them from applying for roles 

## What we have done   

For schools that are assigned a faith within [Get Information About Schools (GIAS)](https://www.gov.uk/guidance/get-information-about-schools), we now provide a choice of 3 online application form options within the job listing journey of: 
 - online application form – this form does not include any questions about religion and meets the needs of the majority of schools 
- Catholic Education Service approved online application form – this form has been developed with the Catholic Education Service to meet the needs of Catholic schools 
- online application form with questions about religion – this form has been developed to meet the needs of schools with non-Catholic faiths, but require information on an applicant's religion 

The change allows all schools to access an online application form that asks the required questions to meet their recruitment needs. For schools that need to ask questions about religion an additional ‘Religious information’ section shows in the application form for jobseekers to complete.  

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The job listing journey application form choice page ",
    img: { src: "choose.png" }
  },
  {
    text: "How the jobseeker can provide a religious reference within the Catholic Education Service approved application form.",
    img: { src: "option1.png" }
  },
  {
    text: "How the jobseeker can provide a baptism certificate within the Catholic Education Service approved application form.",
    img: { src: "option2.png" }
  },
  {
    text: "How the jobseeker can provide the date and address of their baptism within the Catholic Education Service approved application form.",
    img: { src: "option3.png" }
  },
  {
    text: "The online application form with questions about religion.",
    img: { src: "option4.png" }
  }
  ]
}) }}

