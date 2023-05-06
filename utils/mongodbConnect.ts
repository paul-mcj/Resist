// mongodb
import { MongoClient, ObjectId } from "mongodb";

const backend = async (method: string, params?: string) => {
     try {
          const clientConnection = await MongoClient.connect(
               process.env.MONGO_URI!
          );
          const productsCollection = clientConnection
               .db()
               .collection("products");

          if (method === "FIND_ALL") {
               const products = await productsCollection.find().toArray();
               return products;
          } else if (method === "FIND_ONE") {
               const product = await productsCollection.findOne({
                    _id: new ObjectId(params),
               });

               return product;
          } else if (method === "GENERATE_PATHS") {
               const products = await productsCollection
                    .find({})
                    .project({ _id: 1 })
                    .toArray();

               return products;
          }

          clientConnection.close();
     } catch (error) {
          // fixme: redirect to 404 error page that client cannot be connected to!
     }
};
export default backend;
