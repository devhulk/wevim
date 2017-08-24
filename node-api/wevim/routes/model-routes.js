const fs = require('fs')
let MongoClient = require('mongodb').MongoClient
let assert = require('assert')
let ObjectId = require('mongodb').ObjectID

class Model {
  static getRoutes(app, router) {
    //  list
    router.post('/list/:modelName', (request, response) => {
      let modelName = request.params.modelName
      let options = request.body
      // Connection URL
      let mongoUrl = app.get('mongoUrl')

      // Use connect method to connect to the server
      MongoClient.connect(mongoUrl, (connectError, db) => {
        assert.equal(null, connectError)

        // Get the documents collection
        var collection = db.collection(modelName)

        if(options.hasOwnProperty('find') && options.find.hasOwnProperty('_id')) {
          let objectId = new ObjectId(options.find._id)
          options.find = {
            _id: objectId
          }
        }


        // Find some documents
        collection.find(options.find).toArray((findError, data) => {
          assert.equal(findError, null)

          response.json(data)
          db.close()
        })
      })
    })

    //  create
    router.post('/create/:modelName', (request, response) => {
      let modelName = request.params.modelName
      let options = request.body

      // Connection URL
      let mongoUrl = app.get('mongoUrl')

      // Use connect method to connect to the server
      MongoClient.connect(mongoUrl, (connectError, db) => {
        assert.equal(null, connectError)

        // Get the documents collection
        var collection = db.collection(modelName)

        collection.insertMany(options.data, (findError, data) => {
          assert.equal(findError, null)

          response.json(data)
          db.close()
        })
      })

    })

    //  update
    router.post('/update/:modelName', (request, response) => {
      let modelName = request.params.modelName
      let options = request.body

      // Connection URL
      let mongoUrl = app.get('mongoUrl')

      // Use connect method to connect to the server
      MongoClient.connect(mongoUrl, (connectError, db) => {
        assert.equal(null, connectError)

        // Get the documents collection
        var collection = db.collection(modelName)

        if(options.hasOwnProperty('find') && options.find.hasOwnProperty('_id')) {
          let objectId = new ObjectId(options.find._id)
          options.find = {
            _id: objectId
          }
        }
        collection.update(options.find, options.data, (findError, data) => {
          assert.equal(findError, null)

          response.json(data)
          db.close()
        })
      })
    })

    //  delete
    router.post('/delete/:modelName', (request, response) => {
      let modelName = request.params.modelName
      let options = request.body
      let id = options.id

      // Connection URL
      let mongoUrl = app.get('mongoUrl')

      // Use connect method to connect to the server
      MongoClient.connect(mongoUrl, (connectError, db) => {
        assert.equal(null, connectError)

        // Get the documents collection
        var collection = db.collection(modelName)

        // Find some documents
        let objectId = new ObjectId(id)
        collection.deleteOne({"_id": objectId}, (findError, modelName) => {
          assert.equal(findError, null)

          response.json(modelName)
          db.close()
        })
      })
    })
  }

}

module.exports = Model
