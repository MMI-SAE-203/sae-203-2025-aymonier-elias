/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // remove field
  collection.fields.removeById("text292808888")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_21851994")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text292808888",
    "max": 0,
    "min": 0,
    "name": "heure",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
