
const express = require('express')
const app = express()

const { getCollection, ObjectId } = require('./api-routes')

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.static('public'))

//const todos = [
//	{ id: 1, item: 'Learn JavaScript', complete: false },
//	{ id: 2, item: 'Learn Express', complete: false },
//	{ id: 3, item: 'Build a To Do App', complete: false }
//]

app.get('/', async (_, response) => {
	const collection = await getCollection('todos-api', 'todos')
	const todos = await collection.find().toArray()
	console.log(todos)
	response.sendFile('index.html', { root })
})

app.get('/api/todos', (_,response) => {
	response.json(todos);
});

// GET /api/todos

// POST /api/todos

app.post('/api/todos', async (request, response) => {
	const result = await collection.insertOne({ item, complete })
	const {item} = request.body;
	const id = todos.length + 1;
	const complete = false;
	todos.push({id, item, complete });
	response.json({id});
});

// PUT /api/todos/:id
app.put('/api/todos/:id', async (request, response) => {
	
	const todo = await collection.findOne({ _id: new ObjectId(id) })
	const complete = !todo.complete
	const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { complete } })
	const task = todos.find(todo => todo.id.toString() == id)
	task.complete = !task.complete;
	response.json(task);
});



const message = `Server running: http://localhost:${port}`
app.listen(port, () => console.log(message))
