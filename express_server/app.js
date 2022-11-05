import express from 'express';
import connectDB from './db/conn.js'

const app = express();
const port = 3030;

app.get('/', async (req, res) => {
    const message = await connectDB()
    res.set('Access-Control-Allow-Origin', '*')
    res.send(message)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


export default app