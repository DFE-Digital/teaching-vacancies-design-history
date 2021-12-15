---
title: Notifications for hiring staff users
description: Creating a notification system to notify hiring staff users when an application has been received for one of their job listings.
date: 2021-12-09
related:
  items:
  - text: Jira ticket
    href: https://dfedigital.atlassian.net/browse/TEVA-2125
  - text: Jira ticket
    href: https://dfedigital.atlassian.net/browse/TEVA-2057
---

{% from "figure/macro.njk" import appFigure with context %}

## Introduction
Following the introduction of the application feature (allowing users to apply for jobs directly through Teaching Vacancies) we needed to implement a feature to notify hiring staff when an application has been submitted for one of their listings.
This need was met by creating a notifications page within the hiring staff dashboard.

## How it works:

A notifications link was added to the site’s header when the user is logged in as a hiring staff user. The number of unread notifications is displayed next to this link.
{{ appFigure({
  image: {
    file: "notification in nav banner.png",
    alt: "The header showing the notifications link"
  },
  caption: "Notifications in service header"
}) }}

The link takes the user to the notifications page. New applications are marked as such within this page. This status persists until the user navigates away from this page, at this point the notifcations are treated as "read".
{{ appFigure({
  image: {
    file: "new notification received.png",
    alt: "The format of the notification"
  },
  caption: "Notification received"
}) }}
{{ appFigure({
  image: {
    file: "notifications page.png",
    alt: "Populated notifications page"
  },
  caption: "The notifications page"
}) }}


A notification on the service is created for all hiring staff users in that organisation when a new application is received for a job listing. As shown in the image above, the notification includes a link to the submitted application.

If the hiring staff has MAT level access then the name of the school within the trust that the job is based in is given in the notification. If the job is based at more than one school within the trust, or the trust’s head office, then the name of the trust is displayed instead.

Notifications are shown in chronological order, with the most recent notification at the top of the page. 30 notifications are shown per page, standard pagination was implemented when the number of notifications exceeds 30.

If an applicant withdraws their application at any time then the link in the notification takes the hiring staff user to the Job listing page and a notification banner is displayed informing the user that the application has been withdrawn
{{ appFigure({
  image: {
    file: "application withdrawn.png",
    alt: "Hiring staff view when attemting to view a withdrawn application"
  },
  caption: "Clicking on a withdrawn application"
}) }}

## Email notifications
In addition to the notifications that are sent through the service, hiring staff receive an email notification informing them that an application (or applications) has been received for their listing.
The email alert differs from the service notification in that it is only sent to the hiring staff user who created the job listing, not all members of the organisation. An email is sent at 6am each morning if at least one jobseeker has applied for the role in the preceding 24 hours; if more than one has applied then the link text is updated to display the number of people who applied.
If the hiring staff user has two (or more) active listings that both received an application within the last 24 hours then both listings are displayed on the email received.

{{ appFigure({
  image: {
    file: "notification email.png",
    alt: "Email notification receiver by hiring staff"
  },
  caption: "Notification email"
}) }}
