const HIDDEN_TAG_FRAGMENTS = ['JN', 'HN', 'index', 'user-need', 'all']

function isPublicCategoryTag (tag) {
  return !HIDDEN_TAG_FRAGMENTS.some(fragment => String(tag).includes(fragment))
}

function postsByCategory (collectionApi) {
  const counts = new Map()

  collectionApi.getAll().forEach((post) => {
    const tags = post.data.tags || []
    tags.forEach((tag) => {
      if (!isPublicCategoryTag(tag)) {
        return
      }

      counts.set(tag, (counts.get(tag) || 0) + 1)
    })
  })

  return [...counts].sort((a, b) => b[1] - a[1])
}

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

  // [tag, count] pairs for public categories, largest first
  eleventyConfig.addCollection('bySize', (collectionApi) => {
    return postsByCategory(collectionApi)
  })

  eleventyConfig.addCollection('categoryTags', (collectionApi) => {
    return postsByCategory(collectionApi).map(([tag]) => tag)
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
      const tags = item.data.tags || []
      return !tags.includes('user-need')
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
