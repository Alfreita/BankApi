import { MongoClient } from "mongodb";
import dotEnv from "dotenv";

dotEnv.config();

const URL = process.env.MONGOURL;
const DBNAME = process.env.DBNAME;
const DBCOLECTION = process.env.DBCOLECTION;

if (!URL) {
  throw new Error("Error in mongoURL ");
}
if (!DBNAME) {
  throw new Error("Error in mongodb name ");
}
if (!DBCOLECTION) {
  throw new Error("Error in mongodb collection ");
}
var client = new MongoClient(URL);
const ConnectDB = async () => {
  try {
    await client.connect();
    const db = client.db(DBNAME);
    const dbCollection = db.collection(DBCOLECTION);
    return dbCollection;
  } catch (error) {
    throw new Error(error);
  }
};

export const InsertUser = async (user: any) => {
  try {
    const connected = await ConnectDB();
    await connected.insertOne(user);
    await client.close();
  } catch (error) {
    await client.close();
    throw new Error(error);
  }
};
export const FindUser = async (email: string) => {
  try {
    const connected = await ConnectDB();
    const filterOne = {
      email: email,
    };
    const userFound = await connected.findOne(filterOne);
    await client.close();
    return userFound;
  } catch (error) {
    await client.close();
    throw new Error(error);
  }
};
