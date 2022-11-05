import { MongoClient } from 'mongodb';


const url = 'mongodb://root:example@database:27017'
const client = new MongoClient(url)

// Database Name
const dbName = 'to_do_list'

async function connectDB() {
    try {
        await client.connect();
        var result = await client.db(dbName).command({ ping: 1 })
    } finally {
        await client.close();
    }

    return result
}

export default connectDB;