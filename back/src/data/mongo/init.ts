import mongoose from "mongoose";

interface ConnectionOptions {
  mongoUrl: string;
  dbName: string;
}

export const mongoConnection = async ({ mongoUrl, dbName }: ConnectionOptions) => {
  try {
    await mongoose.connect(mongoUrl, {
      dbName,
    });
    console.log(`Mongo connected with ${dbName}`);
  } catch (error) {
    console.error("Mongo Connection Error");
    throw error;
  }
}

// Se acordó transformar la clase a función debido a que las propiedades de las clases se guardan en memoria del server, aumentan costos.
// No es necesario crear una clase para realizar algo básico como la conexión a la DB
// Complejidad de lectura de clases (la mayoría del team estamos en un nivel inicial de junior)
//
// export class MongoDatabase {
//   static async connect(options: ConnectionOptions) {
//     const { mongoUrl, dbName } = options;
//     try {
//       await mongoose.connect(mongoUrl, {
//         dbName,
//       });
//       console.log("Mongo Connected!");
//     } catch (error) {
//       console.error("Mongo Connection Error");
//       throw error;
//     }
//   }
// }
