/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // remove field
  collection.fields.removeById("file4182342110")

  // add field
  collection.fields.addAt(6, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url125318298",
    "name": "band_annonce",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "file4182342110",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "bande_annonce",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // remove field
  collection.fields.removeById("url125318298")

  return app.save(collection)
})
