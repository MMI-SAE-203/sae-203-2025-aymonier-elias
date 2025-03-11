/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4286007220",
    "max": 0,
    "min": 0,
    "name": "titre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3828436749",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "affiche",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1462424745",
    "max": 0,
    "min": 0,
    "name": "synopsis",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 1,
    "name": "genre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "annimations",
      "action",
      "espace",
      "humour",
      "serieu"
    ]
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url794509965",
    "name": "wikipedia",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

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

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "date2862495610",
    "max": "",
    "min": "",
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

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

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3853627462",
    "max": 0,
    "min": 0,
    "name": "vo",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

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

  // add field
  collection.fields.addAt(12, new Field({
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
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_817884911")

  // remove field
  collection.fields.removeById("text4286007220")

  // remove field
  collection.fields.removeById("file3828436749")

  // remove field
  collection.fields.removeById("text1462424745")

  // remove field
  collection.fields.removeById("select2203071480")

  // remove field
  collection.fields.removeById("url794509965")

  // remove field
  collection.fields.removeById("file4182342110")

  // remove field
  collection.fields.removeById("date2862495610")

  // remove field
  collection.fields.removeById("text3890977616")

  // remove field
  collection.fields.removeById("text3853627462")

  // remove field
  collection.fields.removeById("relation3353481431")

  // remove field
  collection.fields.removeById("relation2655299758")

  // remove field
  collection.fields.removeById("text292808888")

  return app.save(collection)
})
