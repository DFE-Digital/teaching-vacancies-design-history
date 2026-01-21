---
title: Making the service more accessible
date: 2026-01-06
tags:
  - JN001
  - HN001
  
  - general_updates
--- 

Recently, an audit of the Teaching Vacancies service was conducted to understand how we could make the service more accessible. The website was tested against the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards, by user journey testing with assistive technologies. We have made some changes across the website to ensure it’s more inclusive. 

This is a similar approach to how we [made the service more accessible](/making-the-design-of-the-service-more-inclusive/)
 in 2024.

## Required changes 

Issues were organised into themes and then the WCAG guidelines conformance levels (A, AA, AAA). In total, we have resolved 5 accessibility issues across the website. 

### Heading structure and styling 

On some of the pages, there were missing and skipped headers, or styling had been applied to text to give the appearance of a header. We have now resolved all heading structure issues, and replaced stylings with headers, to improve the way people using assistive technology can navigate the site. 

### Keyboard tabbing 

On the message a candidate page, it was not possible to use a keyboard to tab to the message fields formatting buttons such as bold, italics, undo and redo. We have now updated the message formatting fields to enable these to be interacted with from a keyboard.  

### Autocompletion of fields 

On all pages that collect information about the user, autocomplete was not present for the expected fields. We have added the appropriate autocomplete attributes to enable personal details such as name, address, email and telephone number to be autocomplete.  

### Missing ARIA label 

On our message a candidate page, the text field did not have an accessible name for screen readers or speech recognition software. We have added an ARIA label to the text field to correct this issue and enable screen readers or speech recognition software to interact with the field effectively.  

## Outstanding issues 

We have 1 outstanding issue which relates to radio buttons that reveal additional content not using supported ARIA attributes. We are currently unable to fix this issue, as radio buttons are a standard GOV.UK design system component. We are monitoring this and will fix this issue as soon as we can. 

Following the audit, we have updated our [accessibility statement](https://teaching-vacancies.service.gov.uk/pages/accessibility) to reflect the services accessibility.  

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

