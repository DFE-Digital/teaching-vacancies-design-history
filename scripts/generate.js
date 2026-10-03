/*
  Usage:
  * Put images into `app/images/directory-name`
  * Name them with 01-, 02- prefixes

  Run:
  node scripts/generate.js name-of-directory-holding-images
*/

// Dependencies
const fs = require('fs')
const { DateTime } = require('luxon')

// Arguments
const directoryName = process.argv[2]

if (!directoryName) {
  console.log('No arguments set')
  console.log('Please set a directory name: `node scripts/generate.js name-of-directory`')
  process.exit(1)
}

const deepestDirectory = directoryName.split('/').pop()

let title = deepestDirectory.replace(/-/g, ' ')
title = title.charAt(0).toUpperCase() + title.slice(1)

const datestamp = DateTime.local().toFormat('yyyy-MM-dd')

const imageDirectory = `app/images/${directoryName}`
const postDirectory = `app/posts/${directoryName}`.replace('/' + deepestDirectory, '')

const paths = []

// Run
function start () {
  makeDirectories()
  getExistingImages()
  generatePage()
}

function makeDirectories () {
  if (!fs.existsSync(imageDirectory)) {
    fs.mkdirSync(imageDirectory)
  }

  if (!fs.existsSync(postDirectory)) {
    fs.mkdirSync(postDirectory)
  }
}

function getExistingImages () {
  const files = fs.readdirSync(imageDirectory)

  files.forEach((file, index) => {
    if (!(/\.(png|jpg)$/.test(file))) {
      console.log('Ignoring: ' + file)
      return
    }

    const title = file.replace(/\.(png|jpg)$/, '').replace(/^\d{2}-/, '').replace(/-/g, ' ')
    const image = {
      src: file,
      title: title.charAt(0).toUpperCase() + title.slice(1)
    }
    paths.push(image)
  })
}

function generatePage () {
  let template = ''
  const templateStart = `---
title: ${title}
description:
date: ${datestamp}
---
{% from "screenshots/macro.njk" import appScreenshots with context %}
{{ appScreenshots({
  items: [`

  const templateEnd = `]
}) }}
`

  paths.forEach(function (item, index) {
    template += `${index > 0 ? ', ' : ''}{
      text: "${item.title}",
      img: { src: "${item.src}" }
    }`
  })

  const filename = `${postDirectory}/${datestamp}-${deepestDirectory}.md`

  fs.writeFile(
    filename,
    templateStart + template + templateEnd,
    function (err) {
      if (err) {
        console.error(err)
      }
      console.log(`Page generated: ${filename}`)
    }
  )
}

start()
