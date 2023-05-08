// models
import Product from "@/models/product";

// next
import { NextApiRequest, NextApiResponse } from "next";

// mongodb
import { MongoClient } from "mongodb";

// utils
import backend from "../../../utils/mongodbConnect";

// dotenv
import dotenv from "dotenv";
dotenv.config();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
     if (req.method === "POST") {
          try {
               const data = req.body;

               backend("INSERT_ONE", undefined, data);

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
