import express from 'express';

const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send("Hello World")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


export default app