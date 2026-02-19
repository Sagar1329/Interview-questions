// Auto-generated from transformations.js

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(p =>
      Promise.resolve(p).then(resolve).catch(reject)
    );
  });
}
promiseRace([Promise.resolve("fast")]).then(console.log);


