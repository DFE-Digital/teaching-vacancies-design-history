# Design history for Teaching Vacancies

A place for us to document our service designs for the GOV.UK Teaching Vacancies service.

<https://teaching-vacancies-design-history.london.cloudapps.digital/>

## Set up

Clone this repo.

Use Terminal to navigate to the directory and run `npm install`.

If the install is successful, run `npm start`.

Follow the prompts in Terminal to open the design history locally.

## Writing an entry

Start with the [google docs template](https://docs.google.com/document/d/1Axk-IHSpwXuCzeopqvWbqwfRvKMqOU7WbSvC8PHeawg/edit?usp=sharing).

Get your entry reviewed by your peers. 

## Adding an entry to the design history

Duplicate an existing entry. You will find them in the `/posts` directory.

Give the `.md` file a unique name and date it to reflect when the work was done.

Once you have finished adding the content of the post, check it looks ok then raise a pull request.

Get the PR reviewed by a peer.

Once the pull request is approved, merge it.

[GOV.UK PaaS](https://www.cloud.service.gov.uk/) will then take over and the entry will be live shortly.

## Adding images

Take decent screen captures of your work. 

Optimise the image file sizes using [TinyPNG](https://tinypng.com/).

Create a directory for the images in `/images`.

The directory name needs to match your post name (besides the date).

Use the image macro to include an image in your post.

With caption:

```
{{ appFigure({
  image: {
    file: "file-name.png",
    alt: "A description of the image"
  },
  caption: "An optional caption"
}) }}
```

Without caption:

```
{{ appFigure({
  image: {
    file: "file-name.png",
    alt: "A description of the image"
  }
}) }}
```

## Need help?

A friendly developer will be able to support you when troubleshooting most issues.

You can also reach out to [other interaction designers across the DfE](https://ukgovernmentdfe.slack.com/archives/C013E0LRL5S). Many are also using this tool.  

## Technical notes

The design history uses the [GOV.UK Design System](https://design-system.service.gov.uk) and the
[Eleventy](https://www.11ty.dev) static site generator.

It is deployed to [GOV.UK PaaS](https://www.cloud.service.gov.uk/) using Github Actions.
