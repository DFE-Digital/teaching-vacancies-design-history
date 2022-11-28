module.exports = function (eleventyConfig) {
  // Browser Sync
  eleventyConfig.setBrowserSyncConfig({
    rewriteRules: [{
      match: /\/image\/(\d+)(x)?(\d+)?/g,
      replace: '/images'
    }],
    serveStatic: ['public'],
    serveStaticOptions: {
      extensions: ['html']
    }
  })

  // addCollection receives the new collection's name and a
  // callback that can return any arbitrary data (since v0.5.3)
  eleventyConfig.addCollection('bySize', (collectionApi) => {
    // see https://www.11ty.dev/docs/collections/#getall()
    const allPosts = collectionApi.getAll()

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    const countPostsByTag = new Map()
    allPosts.forEach((post) => {
      // short circuit eval sets tags to an empty array if there are no tags set
      const tags = post.data.tags || []
      tags.forEach((tag) => {
        const count = countPostsByTag.get(tag) || 0
        countPostsByTag.set(tag, count + 1)
      })
    })

    // Maps are iterators so we spread it into an array to sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const sortedArray = [...countPostsByTag].sort((a, b) => b[1] - a[1])

    // this function returns an array of [tag, count] pairs sorted by count
    // [['bonfires', 4], ['books', 3], ['boats', 2], ...]
    return sortedArray
  })


  // Template libraries
  eleventyConfig.setLibrary('njk', require('./lib/libraries/nunjucks'))
  eleventyConfig.setLibrary('md', require('./lib/libraries/markdown'))

  // Plugins
  eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'))
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'))

  // Filters
  eleventyConfig.addFilter('date', require('./lib/filters/date'))
  eleventyConfig.addFilter('fixed', require('./lib/filters/fixed'))
  eleventyConfig.addFilter('includes', require('./lib/filters/includes'))
  eleventyConfig.addFilter('markdown', require('./lib/filters/markdown'))
  eleventyConfig.addFilter('notifyPlaceholders', require('./lib/filters/notify-placeholders'))
  eleventyConfig.addFilter('pretty', require('./lib/filters/pretty'))
  eleventyConfig.addFilter('slug', require('./lib/filters/slug'))
  eleventyConfig.addFilter('slugs', require('./lib/filters/slugs'))
  eleventyConfig.addFilter('sort', require('./lib/filters/sort'))
  eleventyConfig.addFilter('tokenize', require('./lib/filters/tokenize'))
  eleventyConfig.addFilter('totalFromRows', require('./lib/filters/total-from-rows'))
  eleventyConfig.addFilter('widont', require('./lib/filters/widont'))

  // Transforms

  // Collections

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/documents')
  eleventyConfig.addPassthroughCopy('./app/images')
  eleventyConfig.addPassthroughCopy({
    'node_modules/govuk-frontend/govuk/assets': 'assets'
  })

  // Enable data deep merge
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addCollection('search-index', collection => {
    return collection.getFilteredByTag('search-index').filter(item => {
      return !item.data.tags.includes('user-need')
    })
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    },
    templateFormats: ['njk', 'md'],
    passthroughFileCopy: true
  }
}
