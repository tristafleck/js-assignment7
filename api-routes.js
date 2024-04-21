const { MongoClient, ObjectId } = require('mongodb')
const { url } =  process.env.MONGODB_URL || require('./secrets/mongodb.json')
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
	await client.connect()
	return client.db(dbName).collection(collectionName)
}
module.exports = { getCollection, ObjectId }

router.get('/', async (_, response) => {
    // this maps to GET /api/todos
})

router.post('/', async (request, response) => {
    // this maps to POST /api/todos
})

router.put('/:id', async (request, response) => {
    // this maps to PUT /api/todos/:id
})
