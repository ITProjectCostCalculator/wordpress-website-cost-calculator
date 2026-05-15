module.exports = function(eleventyConfig) {
  // Pass through copy for static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/alaska");

  // Add date filter
  eleventyConfig.addFilter("date", function(dateObj, format) {
    if (!dateObj) return "";
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateObj).toLocaleDateString('en-US', options);
  });

  // Add custom collection for blog categories
  eleventyConfig.addCollection("categories", function(collectionApi) {
    let categories = new Set();
    collectionApi.getFilteredByTag("blog").forEach(item => {
      if (item.data.category) {
        categories.add(item.data.category);
      }
    });
    return Array.from(categories);
  });

  // Disable BrowserSync snippet injection on the admin page to prevent React crashes
  eleventyConfig.setBrowserSyncConfig({
    snippetOptions: {
      ignorePaths: "/alaska/**"
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
