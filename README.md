# Webpack with Workbox service worker

Exploring Webpack with Workbox service workers to cache .js bundles + CDN links.

## Instructions

1.  Clone this repo
2.  Install `serve` globally: `npm install -g serve`
3.  Run `yarn install`
4.  Run `yarn build`
5.  Run `serve ./dist`

## But... why? ¯\\\_(ツ)_/¯

- Tiny core app bundle because no React (2KB). 
- React loads in 22ms, from the service worker cache, rather than the horrendously slow 175ms from unpkg.
- 💯 perf score. 

## Next
1. Cached app shell
2. Asset handling
