/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // remove field
  collection.fields.removeById("relation3353481431")

  // remove field
  collection.fields.removeById("relation2655299758")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // add field
  collection.fields.addAt(10, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_817884911",
    "hidden": false,
    "id": "relation3353481431",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "invite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_817884911",
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
})
