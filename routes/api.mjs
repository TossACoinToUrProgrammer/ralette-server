import express from "express"
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb"

const router = express.Router()

router.get("/updates", async (req, res) => {
  let collection = await db.collection("updates")
  let results = await collection.find({}).toArray()
  res.send(results).status(200)
})

router.get("/news", async (req, res) => {
  let collection = await db.collection("news")
  let results = await collection.find({}).toArray()
  res.send(results).status(200)
})

export default router
