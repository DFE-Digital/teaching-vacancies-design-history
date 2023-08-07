---
title: Improving the creating an account journey for jobseekers
date: 2023-07-21
tags:
  - JN002
  - searching_for_a_job
---

We've been exploring how we can reduce support requests on our service when jobseekers struggle creating accounts. 

Previously, if jobseekers did not press the confirmation link to confirm their email address in a given amount of time the link became invalid. This then required manual approval from service support if the jobseeker wanted to continue creating an account.

We've redesigned this journey to enable jobseekers to re-request a verification link to be sent to their email if they try to sign-in or select the verification link in the email after it has expired.

This will prevent a known pain point for jobseekers when creating an account, and reduce the time needed from support teams to help with accounts.

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Making the expiry time clearer on the check your email page",
    img: { src: "check-your-email-page.png" }
  },
  {
    text: "Notifying users who try to sign in before confirming their email",
    img: { src: "confirmation-email-notification.png" }
  },
  {
    text: "Confirmation of resending people confirmation emails",
    img: { src: "email-has-been-resent.png" }
  },
  {
    text: "Telling users the email link has expired",
    img: { src: "link-has-expired.png" }
  },
  {
    text: "Making the confirmation email clearer",
    img: { src: "email-confirmation.png" }
  },
  {
    text: "Letting user know what they can do with their new account",
    img: { src: "account-created.png" }
  }
  ]
}) }}
