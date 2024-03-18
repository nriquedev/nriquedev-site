# The Site

This is a personal site where I intend to collect all the things I learn while playing with different things in the are of web development.

## Static Site Generator Used

This site has been built using:
- [11ty](https://www.11ty.dev/) SSG 
- [Nunjucks](https://mozilla.github.io/nunjucks/) template engine
- [Github Actions](https://docs.github.com/en/actions) and [Github pages](https://pages.github.com/) to build and deploy the site

## Worflow to build and deploy

The site is build via Github Actions in this repository. Once the site is built, a GH workflow is triggered to deploy the built site to Github Pages in a different repository (nriquedev.github.io) where the static files are stored and served.





