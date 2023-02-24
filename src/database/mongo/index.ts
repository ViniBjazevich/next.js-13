import { connect, connection, ConnectOptions } from "mongoose";

if (!process.env.NEXT_PUBLIC_MONGO) {
  throw new Error("Missing environment variable.");
}

const connectionString: string = process.env.NEXT_PUBLIC_MONGO;

export async function connectToDatabase() {
  try {
    await connect(connectionString);
    console.log("Connected to database");
  } catch (error) {
    console.error("Unable to connect to database: ", error);
  }
}

export async function closeDatabaseConnection() {
  try {
    await connection.close();
    console.log("Closed database connection");
  } catch (error) {
    console.error("Unable to close database connection: ", error);
  }
}
