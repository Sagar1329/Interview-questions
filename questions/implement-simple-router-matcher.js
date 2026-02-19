// Auto-generated from transformations.js

function matchRoute(routes, path) {
  return routes.find(route => route === path) || null;
}
console.log(matchRoute(["/home", "/about"], "/about"));
