// mongodb
import { MongoClient, ObjectId } from "mongodb";

// next
import Router from "next/router";

import { NextApiRequest } from "next";

const backend = async (
     method: string,
     params?: string,
     data?: NextApiRequest
) => {
     try {
          const clientConnection = await MongoClient.connect(
               process.env.MONGO_URI!
          );
          const productsCollection = clientConnection
               .db()
               .collection("products");

          switch (method) {
               case "FIND_ALL": {
                    const products = await productsCollection.find().toArray();
                    return products;
               }
               case "FIND_ONE": {
                    const product = await productsCollection.findOne({
                         _id: new ObjectId(params),
                    });
                    return product;
               }
               case "GENERATE_PATHS": {
                    const productIds = await productsCollection
                         .find({})
                         .project({ _id: 1 })
                         .toArray();
                    return productIds;
               }
               case "INSERT_ONE": {
                    await productsCollection.insertOne(data!);
               }
          }

          clientConnection.close();
     } catch (error) {
          Router.push("/_error");
     }
};
export default backend;
