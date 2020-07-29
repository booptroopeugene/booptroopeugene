<!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/bbf28a84-4bdb-407b-a2fa-32628d27fa3d/deploy-status)](https://app.netlify.com/sites/eleventy-netlify-boilerplate/deploys) -->
# [BoopTroopEugene.com](https://booptroopeugene.com)
### Based On [Eleventy Netlify Boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate)

Fast and lightweight website using the [Eleventy](https://www.11ty.io/) static site generator. With [Netlify CMS](https://www.netlifycms.org/) baked-in, and deployed on [Netlify](https://www.netlify.com).

Based on the [Eleventy Base Blog](https://github.com/11ty/eleventy-base-blog) repo (see there for additional info on Eleventy usage).

## Features

* Post authors, using a simple folder collection
* Uses the official [Eleventy Navigation](https://www.11ty.dev/docs/plugins/navigation/) plugin to build menus
* Netlify CMS with editor previews (thanks [@biilmann](https://github.com/biilmann)!)
* CSS 2kb minified, inlined for fastest page render
* Optional pipeline for minified inline JS
* Pre-builds and minifies your HTML too
* Uses Markdown files for content
* Uses Nunjucks (or Liquid) templates for layout
* No JS frameworks
* Continuous Deployment workflow via Netlify

### Admin/Author setup

We can only have 5 CMS accounts on the free Netlify plan. For access contact Kyle or another mod/dev. They'll send you an account setup email that will link you to the website and you should be good to go from there.
The website CMS is accessible at https://booptroopeugene.com/admin/

You can optionally use an external login provider when setting up your account.

Now you're all set, and you can start editing content!

## Gotchas

If we change the repo from public to private, we'll need to regenerate our token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate the token, head to "Settings" in Netlify dashboard, go to the "Identity"
section, then scroll to "Services" and click "Edit settings" then "Generate access token in GitHub".

## Local development

### 1. Clone this repository:

```
git clone https://github.com/booptroopeugene/booptroopeugene.git
```


### 2. Navigate to the directory

```
cd booptroopeugene
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies locally

```
npm install @11ty/eleventy
```

### 4. Run Eleventy (builds the site)

```
npm start
``` 
(this runs `npx @11ty/eleventy --serve`)

Or run in debug mode: `DEBUG=* npx @11ty/eleventy`

## Local Dev & Git Workflow 

With `npm start` running, open [localhost:8080](localhost:8080) to view your changes updated on the fly. Create a branch for your work, make your changes, and then submit a pull request for review.

## Bug reports, feature requests, etc

This is an ongoing project and contributions and suggestions are welcome! Feel free to add to the discussion in our discord #website-requests channel, open an issue on GitHub, or submit a PR.