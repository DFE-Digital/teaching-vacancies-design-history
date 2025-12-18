---
title: Adding a messaging feature
date: 2025-09-15
tags:
  - hiring_staff
  - jobseekers
  - JN002
  - JN007
  - HN002
--- 

As part of the development of an applicant tracking system (ATS), the ability to send and receive messages within the service was a key feature that was required for our initial launch.  

## Key findings 

User research, and our ATS co-design workshops, highlighted that: 

- the majority of ATS users felt the ability to send (93%) and receive (79%) messages was essential 
- users wanted the ability for multiple people to progress applications, improving efficiency and providing an audit trail 
- users felt they got a higher response rate outside the ATS system and so it was important that candidates got notifications when they received messages 

## What we have done

We have developed an internal messaging feature to enable jobseekers and hiring staff to communicate using the service.  

This addition allows hiring staff to: 
 
- message applicants from the point their application is received (unless the jobseeker withdraws their application) 
- share attachments or links with applicants through the messaging feature 
- use formatting (such as bold, italics and bullet points) within the messaging feature 
- initiate messages from within an individual applicant's dashboard area 
- use a dashboard to view all messages, search messages, archive messages and sort by unread, newest or oldest on top 
- receive a service notification and an email notification once a day for any messages received   

This addition allows jobseekers to: 

- reply to any messages received unless they are marked as ‘not progressing’ (they can receive a message from hiring staff, but not reply) or they withdraw their application   
- initiate a message to hiring staff once they are marked as ‘interviewing’ or ‘job offered’ for a role 
- share any attachments or links with hiring staff through the message feature 
- use formatting (such as bold, italics and bullet points) within the messaging feature 
- receive both a service and an email notification when receiving a message


{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [
  {
    text: "The hiring staff view of the messages feature from an individual application ",
    img: { src: "hiring_staff_view.png" }
  },
  {
    text: "The hiring staff candidate messages dashboard  ",
    img: { src: "dashboard.png" }
  },
  {
    text: "The jobseeker view of the messages feature from an individual application  ",
    img: { src: "application.png" }
  }
  ]
}) }}

