import { connect, connection, ConnectOptions } from "mongoose";

const connectionString: string =
  process.env.NEXT_PUBLIC_MY_SECRET || "mongodb://localhost/mydatabase";

// I dont think these are needed since they aren't apart of ConnectOptions
// const options: ConnectOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

export async function connectToDatabase() {
  try {
    console.log({connectionString});
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
// connectToDatabase();

// export default connection;
