---
title: Expanding the service to show all school roles when searching for a job
date: 2024-03-02
tags:
  - JS001
  - JS002
  
  - searching_for_a_job
  - candidate_profiles
---

Recently, we allowed [hiring staff to start listing all school roles on the service](/allowing-hiring-staff-to-list-support-roles-on-the-service/).

To help people looking for jobs in schools, we've made some changes to cater for a wider audience.

We are introducing 3 categories for the types of roles hiring staff can now list which will be reflected on the job search journey. These are:

- Teaching
- Teaching support
- Non-teaching support

Changes to the job search journey include:

- Introducing a new design to the job search filter
- Showing all roles in the job search journey before filters are applied
- Updating the job alerts sign up page to include all school roles
- Updating the home page to include all school roles
- A condensed job advert page for non-teaching support roles
- Expanding the candidate profiles feature to anyone interested in working in a school

## Changes to the job search journey

### Updating the job search filter

To ensure people can select the roles that are relevant to them, we have adopted the collapsible filter design present on the [find a tuition partner service](https://www.find-tuition-partner.service.gov.uk/) for job role categories.

### Showing all roles in the job search journey

Expanding the service to show all school roles means that all types of roles will be visible on the search journey if filters are not applied. We will be monitoring the impact this has on teachers searching for roles to understand if  seperating roles should be considered prior to filters being applied.

### Updating the job alerts sign up page to include all school roles

The job alerts page has been expanded to include all job roles and types. Anyone looking for a job in a school can now set up a job alert and be informed about any potential roles they may be interested in.

### Updating the home page to include all school roles

The service home page has been updated to include all schools roles in the jobs by type of school and role accordion.

### A condensed job advert page for non-teaching support roles

Where possible, some roles will show less information on the job advert page if it is not relevant to the role. For example, a non-teaching role in catering will not show if the role is suitable for early career teachers.

### Expanding the candidate profiles feature

X

## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Allowing hiring staff to select teaching, teaching support and non-teaching roles when listing a job",
    img: { src: "type-of-job.png" }
  },
  {
    text: "Expanding the candidate profiles feature to include all school roles",
    img: { src: "candidate-profiles.png" }
  }
  ]
}) }}
