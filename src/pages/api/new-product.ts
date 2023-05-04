// models
import Product from "@/models/product";

// next
import { NextApiRequest, NextApiResponse } from "next";

// mongodb
import { MongoClient } from "mongodb";

// dotenv
import dotenv from "dotenv";
dotenv.config();

// fixme: make it a util function,, as it used in many components in this app!!!
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
     if (req.method === "POST") {
          try {
               const data = req.body;

               const clientConnection = await MongoClient.connect(
                    process.env.MONGO_URI!
               );

               const db = clientConnection.db();

               const productsCollection = db.collection("products");

               const result = await productsCollection.insertOne(data);

               console.log(result);

               clientConnection.close();

               // successful insertion of data should show this message
               res.status(201).json({
                    message: "Product has be successfully added to database!",
               });
          } catch (error) {
               res.status(500).json({
                    message: `Product could be not be added to database. ${error}`,
               });
          }
     }
};

export default handler;
