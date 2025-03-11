/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // remove field
  collection.fields.removeById("text3890977616")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number3890977616",
    "max": null,
    "min": null,
    "name": "dure",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3890977616",
    "max": 0,
    "min": 0,
    "name": "dure",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("number3890977616")

  return app.save(collection)
})
