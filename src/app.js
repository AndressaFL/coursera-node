import express from "express";

const app = express();

app.use(express.json())

const books = [
    {id: 1, "name": "Harry Potter"},
    {id: 2, "name": "Atomic Habits"}
]
app.get('/', (req, res)=> {
res.status(200).send('Library');
})

app.get('/books', (req, res)=> {
    res.status(200).json(books)
})

app.post('/books', (req, res)=>{
    books.push(req.body);
    res.status(201).send('Book added succefully')
})


export default app