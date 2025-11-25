---
title: Improving the education phase mapping and filters for middle schools and all through schools  
date: 2025-03-06
tags:
  - hiring_staff
  - jobseekers
  - general_updates
  - JN001
  - HN003
--- 

Schools classed as ‘middle’ or ‘all through’ schools on [Get Information About Schools](https://www.gov.uk/guidance/get-information-about-schools) (GIAS) raised concerns that they were not being picked up by the ‘primary’ and ‘secondary’ filters, and so they were not reaching all potential candidates.   

## Key findings
  
User feedback highlighted the below issues and concerns by hiring staff within middle schools and all through schools: 

- any roles within middle schools were not getting the same visibility as primary or secondary school roles despite their roles being within a primary or secondary school (or relevant key stage) 
- middle schools are not as well recognised as a primary or secondary school so jobseekers may not think to look at their schools to find a role 

## What we have done
  
To incorporate middle schools and all through schools into the service more thoroughly, we reviewed the filters and how we map the GIAS data to an education phase within the service.  

After our review, we decided to: 

- remove the ‘middle’ school filter option from the service 
- keep the URL for the middle school filter so we can now direct this traffic to the jobs page instead 
- we remapped all middle schools to be either primary or secondary, in alignment with the GIAS categorisations of middle_deemed_primary or middle_deemed_secondary 
- for all through schools, their education phase is not consistent due to the age ranges taught, so we have allowed all through schools to select the relevant education phase within the job listing journey instead of assigning an education phase  


{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

