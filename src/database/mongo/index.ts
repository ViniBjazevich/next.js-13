import { connect, connection, ConnectOptions } from "mongoose";

const connectionString: string =
  process.env.NEXT_PUBLIC_MONGO || "mongodb://localhost/mydatabase";

// I dont think these are needed since they aren't apart of ConnectOptions
// const options: any = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

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
