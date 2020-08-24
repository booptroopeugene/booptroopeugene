const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");
const UglifyJS = require("uglify-es");
const htmlmin = require("html-minifier");
const slugify = require("slugify");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {

  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Configuration API: use eleventyConfig.addLayoutAlias(from, to) to add
  // layout aliases! Say you have a bunch of existing content using
  // layout: post. If you don’t want to rewrite all of those values, just map
  // post to a new file like this:
  // eleventyConfig.addLayoutAlias("post", "layouts/my_new_post_layout.njk");

  // Merge data instead of overriding
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Slice first two items in array (for featured blog posts)
  eleventyConfig.addFilter("firstTwo", arr => {
    return arr.slice(-2);
  });

  // Date formatting (human readable)
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  // Minify CSS
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addFilter("jsmin", function (code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  // Minify HTML output
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.indexOf(".html") > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  // Universal slug filter strips unsafe chars from URLs
  eleventyConfig.addFilter("slugify", function (str) {
    return slugify(str, {
      lower: true,
      replacement: "-",
      remove: /[#*+~.·,()'"`´%!?¿:@]/g
    });
  });

  //  Make a search index string by removing duplicated words and removing less useful, common short words
  eleventyConfig.addFilter("squash", function (str) {
    var content = new String(str);

    // all lower case, please
    var content = content.toLowerCase();

    // remove all html elements and new lines
    var re = /(<.*?>)/gi;
    var plain = content.replace(re, ' ');

    // remove duplicated words
    var words = plain.split(' ');
    var deduped = [...(new Set(words))];
    var dedupedStr = deduped.join(' ')

    // remove short and less meaningful words
    var result = dedupedStr.replace(/\b(\.|\,|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi, '');
    //remove newlines, and punctuation
    result = result.replace(/\.|\,|\?|-|—|\n/g, '');
    //remove repeated spaces
    result = result.replace(/[ ]{2,}/g, ' ');

    return result;

  });

  // Minify CSS
  eleventyConfig.addFilter("isodate", function (str) {
    return new Date(str).toISOString();
  });

  /* add eleventy passthrough copies to include other files in the site build */
  // Netlify stuff
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("netlify.toml");
  eleventyConfig.addPassthroughCopy("admin");
  // Folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy("static/img");
  eleventyConfig.addPassthroughCopy("_includes/assets/");
  // Test service worker file
  eleventyConfig.addPassthroughCopy("simpleSW.js");
  // Favicons
  ["favicon.ico", "android-chrome-192x192.png", "android-chrome-512x512.png", "apple-touch-icon.png", "browserconfig.xml", "favicon-16x16.png", "favicon-32x32.png", "mstile-70x70.png", "mstile-144x144.png", "mstile-150x150.png", "mstile-310x150.png", "mstile-310x310.png", "safari-pinned-tab.svg", "site.webmanifest"].forEach(favicon => eleventyConfig.addPassthroughCopy(favicon))

  

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: false
  };

  eleventyConfig.setLibrary("md", markdownIt(options)
    .use(markdownItAnchor, opts)
  );

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
    pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
