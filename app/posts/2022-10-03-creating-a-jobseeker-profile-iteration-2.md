---
title: Creating a jobseeker profile iteration 2
date: 2022-10-03
tags:
  - HN002
  - JN002
  - JN003
  - JN006
  - JN009
---

{% from "email/macro.njk" import appEmail with context %}

We recently designed a way for [jobseekers to create a profile](/creating-a-jobseeker-profile).

It tested well overall but we made some changes based on research, and some issues we spotted ourselves.


## User needs

{% from "user-needs/macro.njk" import appUserNeeds %}
{{ appUserNeeds({ items: collections['user-need'] | slugs(tags)}) }}

## What we changed
### Changing the content on the confirmation page after creating an account

We changed:

- ‘You can now [search for teaching jobs]’ to ‘You can now ‘[search and apply for teaching jobs]’
- ‘...schools can contact you about relevant jobs’ to ‘...schools will be able to contact you about relevant jobs’

### Moving ‘Turn on profile’ to the bottom of the profile page before it’s turned on

Previously, the ‘Turn on profile’ and ‘Preview profile’ actions were at the top of the profile page.

Research showed that most users expected to find these actions at the bottom after filling out their profile.

So, we added a section to the bottom titled ‘Preview and turn on profile’. It contains:

- a link that says ‘Preview profile’
- a paragraph that says ‘When you turn on your profile, it’ll be visible to hiring staff.’
- a button that says ‘Turn on profile’

Clicking ‘Turn on profile’ will turn on the profile.

After a profile has been turned on, the ‘Turn off profile’ and ‘Preview profile’ actions appear at the top.

When the user turns off their profile the action will remain at the top.

### Removing content at the top of the profile

Previously, we had a line at the top of the page that said ‘Add more information to increase the chance of being contacted.’

Research showed that this line was unnecessary as jobseekers want to fill out their profile to showcase themselves to potential employers, so we removed this line.

### Removing the descriptions of each section of the profile

Previously, we had descriptions of each of the profile sections. They were repetitive and research showed that most users did not read them, so we removed them.
### Using links instead of buttons

Previously, each section had a green button that took users to fill out each section of the profile.

We replaced the buttons with links so that ‘Turn on profile’ could be distinguished more clearly.

### Adding a location preferences
We added the option to enter location preferences.

Jobseekers can specify multiple locations and distances from that location in which they’d like to work.
### Changing ‘age group’ to ‘Education phase’

Previously, we incorrectly labelled the education phase as ‘Age group’.

We corrected this to ‘Education phase’.
### Combining degree and qualifications

Previously, we had separate sections for degrees and other qualifications.

We decided to combine them as there was no reason to separate degrees.

We named the section ‘Qualifications’.

### Changing ‘Work experience’ to ‘Work history’

Previously, the section was called ‘Work experience’.

But this overlapped with the section called ‘About you’ where we ask the jobseeker to enter their skills and experience.

So, we changed the section to be ‘Work history’, which also better matches what the section consists of.
### Removing ‘Main duties’ from work history

The work history section of the application form asks for ‘Main duties’.

We decided to remove this field because:

- it’s more information to ask jobseekers to provide
- it only asks for a brief amount of information, which is both vague and limiting (jobseekers want to showcase themselves)
- this information will be provided in the user’s personal statement or the ‘About you’ section of the profile

### Removing ‘Key stages/subjects’ from work history

The work history section of the application form asks for ‘Subjects and key stages taught’.

We decided to remove this field because:

- it’s more information to ask jobseekers to provide
- this is only relevant for teaching jobs
- this information will be provided in the user’s personal statement or ‘About you’ section of the profile

### Removing ‘Are you an early career teacher (ECT)?’ question

Previously, we had a field that asked users whether or not they’re an ECT.

We decided to remove this because the term ECT is not widely used or understood.

It’s also not necessary to help hiring staff find a suitable candidate. Hiring staff users can check whether they have QTS and when they qualified.


{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [{
    text: "Create account"
  }, {
    text: "Account created"
  }, {
    text: "Profile empty",
    img: { src: "profile.png" }
  }, {
    text: "Personal details - name",
    img: { src: "personal-details--name.png" }
  }, {
    text: "Personal details - phone",
    img: { src: "personal-details--phone.png" }
  }, {
    text: "Personal details - review",
    img: { src: "personal-details--review.png" }
  }, {
    text: "Preferences - roles",
    img: { src: "preferences--roles.png" }
  }, {
    text: "Preferences - phase",
    img: { src: "preferences--phase.png" }
  }, {
    text: "Preferences - key stages",
    img: { src: "preferences--key-stages.png" }
  }, {
    text: "Preferences - subjects",
    img: { src: "preferences--subject.png" }
  }, {
    text: "Preferences - working patterns",
    img: { src: "preferences--working-patterns.png" }
  }, {
    text: "Preferences - location",
    img: { src: "preferences--location.png" }
  }, {
    text: "Preferences - location check",
    img: { src: "preferences--location-check.png" }
  }, {
    text: "Preferences - review",
    img: { src: "preferences--review.png" }
  }, {
    text: "Teaching status - QTS",
    img: { src: "teaching-status--qts.png" }
  }, {
    text: "Teaching status - review",
    img: { src: "teaching-status--review.png" }
  }, {
    text: "Qualifications - type",
    img: { src: "qualifications--type.png" }
  }, {
    text: "Qualifications - another UK qualification",
    img: { src: "qualifications--type--another-uk-qualification.png" }
  }, {
    text: "Qualifications - a qualification not from the UK",
    img: { src: "qualifications--type--non-uk.png" }
  }, {
    text: "Qualifications - details",
    img: { src: "qualifications--details.png" }
  }, {
    text: "Qualifications - review",
    img: { src: "qualifications--review.png" }
  }, {
    text: "Work history - details",
    img: { src: "work-history--details.png" }
  }, {
    text: "Work history - review",
    img: { src: "work-history--review.png" }
  }, {
    text: "About",
    img: { src: "about.png" }
  }, {
    text: "About - review",
    img: { src: "about--review.png" }
  }, {
    text: "Profile - filled out and turned on",
    img: { src: "profile--filled.png" }
  }, {
    text: "Turn off profile",
    img: { src: "turn-off.png" }
  }, {
    text: "Turn off profile - success message",
    img: { src: "turn-off--success.png" }
  }, {
    text: "Turn on profile",
    img: { src: "turn-on.png" }
  }, {
    text: "Turn on profile - success message",
    img: { src: "turn-on--success.png" }
  }]
}) }}
