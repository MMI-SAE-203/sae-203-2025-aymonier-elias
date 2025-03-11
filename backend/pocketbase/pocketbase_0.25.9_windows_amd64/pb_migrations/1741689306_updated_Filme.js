/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // update collection data
  unmarshal({
    "name": "Films"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // update collection data
  unmarshal({
    "name": "Filme"
  }, collection)

  return app.save(collection)
})
