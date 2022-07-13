---js
{
  tags: false,
  layout: "user-needs",
  description: "User needs",
  pagination: {
    data: "collections.user-need",
    reverse: true,
    size: 50,
    before: function(data) {
      return data.filter(item => {
        return item.data.tags.includes('search-index');
      });
    }
  },
  permalink: "user-needs/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% else %}index{% endif %}.html",
  eleventyComputed: {
    title: "User needs",
    eleventyNavigation: {
      key: data => data.title,
      parent: "home"
    }
  }
}
---
