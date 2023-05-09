import { MongoClient } from "mongodb"

const connectionString = process.env.ATLAS_URI || ""

const client = new MongoClient(connectionString)

let conn

try {
  conn = await client.connect()
  console.log('Mongodb connected')
} catch (error) {
  console.error(error)
}

let db = conn.db("rallete_db")

export default db
