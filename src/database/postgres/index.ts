import { Sequelize } from "sequelize";

if (!process.env.NEXT_PUBLIC_ELEPHANTSQL_POSTGRES) {
  throw new Error("Missing environment variable.");
}

const dbConnectionString: string = process.env.NEXT_PUBLIC_ELEPHANTSQL_POSTGRES;

const sequelize = new Sequelize(dbConnectionString);

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkConnection();

export default sequelize;
