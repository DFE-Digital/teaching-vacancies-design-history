---
title: Changing the homepage to be the job listings page
date: 2022-11-15
tags:
  - general_updates
  - searching_for_a_job
---
The current homepage is cluttered and contains a lot of information that the majority of users do not find useful.

We think we can help users find jobs more quickly if we bypass the homepage and take users directly to the list of jobs.
## Data analysis
### Where users go after landing on the homepage

Between 1 September 2021 and 31 August 2022, out of 1.29 million visits:

- 54% go to the search results page (695,000)
- 26% leave the site (335,000)
- 6.28% go to one of the landing pages (80,100)
- 6% go to a ‘popular search’
- 0.67% go to the publisher sign (8,600)
- 0.29% go to the jobseeker sign in (3,700)

This data shows that the most of our users perform a search.

### Where users land when arriving at the service

Between 1 September 2021 and 31 August 2022, out of 14.2 million visits:

- 35% (5.03 million) of users arrive on the job listings page
- 19% (2.75 million) of users arrive on vacancy pages
- 9% (1.29 million) of users arrive on the homepage
- 37% (5.26 million) of users land elsewhere

This data shows that most of our users do not arrive on the homepage.

## What we changed

The new homepage retains all of the current functionality, but has been changed.

### Starting users on the list of jobs

Research shows that most of our users search for a job.

The new homepage means that jobseekers can now find jobs more quickly.

The new design also gives jobseekers a better sense of the service because they can see:

- how many jobs there are, which is good for credibility
- the range of roles and education phases we advertise for
- that we list special education needs roles on the service

The new design exposes the full range of filters to allow jobseekers to narrow down their search quickly. This is helpful because data shows that users who perform a refined search are more likely to click through to a job listing.

### Making it clearer that the the service only lists jobs in England

Research shows that some of our users do not realise that the service only lists state-funded jobs in England.

The current homepage has some copy within the body of the page but most users do not read it.

In the new homepage, we added ‘(England only)’ to the ‘City, county or postcode’ field. This should be a lot easier to spot.

### Removing the links to sign in and create an account from the body of the page

The current homepage has ‘sign in’ and ‘create account’ links within the body of the page.

Research shows that less than 1% of users click these links. So, as they’re available from the header and footer, we removed them.

### Moving landing page links to the footer

The current homepage has accordions containing landing page links.

Only 6% of job seekers click on a landing page link. Research shows this is mostly support staff who do not know exactly what they’re looking for.

The new homepage addresses this because jobseekers can instantly see the filter options for all the roles.

We retained the links to the landing pages from within the footer, meaning they’re accessible from every page. As part of this work, we decided to create top level pages for:

- jobs by type of school and role
- school and teaching jobs by location
- teaching jobs by subject

{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Current homepage",
    img: { src: "current.png" }
  }, {
    text: "New homepage",
    img: { src: "new.png" }
  }]
}) }}
