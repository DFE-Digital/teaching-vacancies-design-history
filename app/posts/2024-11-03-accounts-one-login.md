---
title: Changing jobseeker accounts to GOV.UK One Login
date: 2024-11-03
tags:
  - searching_for_a_job
  - general_updates
  - JN002
--- 

GOV.UK One Login is replacing all other ways to sign in to services on GOV.UK. Now, GOV.UK One Login can be used to access some government services, but in the future, it will be used to access all services on GOV.UK. 

Within the Department for Education (DfE), most digital services aimed to transition over to GOV.UK One Login before the end of 2024, to join up accounts for users. The Teaching Vacancies (TV) service went live with GOV.UK One Login in November 2024 which replaced our existing jobseeker accounts. We provided an account merger process to prevent any loss of existing account information.   

## What we have done
  
As part of the move to GOV.UK One Login, we removed our existing jobseeker sign in and account creation processes and directed users to GOV.UK One Login instead. To access TV, users only needed a basic GOV.UK One Login account. Meaning an email address and password suffices and identify verification isn’t required. 

This change means that: 
 
- jobseekers must use GOV.UK One Login to access TV. Meaning all users would need to create a new account unless they already held a GOV.UK One Login account 
- if jobseekers created a GOV.UK One Login account using the same email address as their TV account, it would automatically save their existing account details and show these within their new GOV.UK One Login account 
- if jobseekers created a GOV.UK One Login account using a different email address to the previously held TV account email, they can transfer their information after signing in 
- any jobseekers who had not accessed TV before would need to create a GOV.UK One Login account to begin using the service 

To ensure all users were notified of the change in login approach, an email was sent to all jobseeker account holders on launch with details of the change. We also added notification banners across the service to highlight that accounts could be merged if they used different email addresses for their old TV account and GOV.UK One Login. Interstitial pages were shown upon a first login via GOV.UK One Login. 

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The jobseeker sign in page with a notification banner informing people about the GOV.UK One Login switch",
    img: { src: "signin.png" }
  },
  {
    text: "The notification banner that highlighted old accounts on a different email address could be transfered to a GOV.UK One Login account.",
    img: { src: "banner.png" }
  },
  {
    text: "One of the transfer account details pages asking people for the email address they used on their old Teaching Vacancies account",
    img: { src: "merge.png" }
  },
  {
    text: "The confirm email address page asking users to enter a secure code sent to their email address.",
    img: { src: "merge2.png" }
  },
  {
    text: "The profiles page with a notificaton banner informing users their account details have been merged from a previous account to their GOV.UK One Login account.",
    img: { src: "merge3.png" }
  },
  {
    text: "The account found page used to inform users an old account has been found with the entered email address.",
    img: { src: "found.png" }
  }
  ]
}) }}


