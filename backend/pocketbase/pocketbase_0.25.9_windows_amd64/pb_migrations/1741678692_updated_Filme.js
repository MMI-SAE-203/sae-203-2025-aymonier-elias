/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // add field
  collection.fields.addAt(12, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2495822145",
    "hidden": false,
    "id": "relation2655299758",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lieux",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // remove field
  collection.fields.removeById("relation2655299758")

  return app.save(collection)
})
