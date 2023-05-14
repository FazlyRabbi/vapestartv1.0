import mongoose from "mongoose";

const connection = {};

async function conectDb() {
  // is already connected
  if (connection.isConnected) {
    console.log(`Already coonected to the database.`);

    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log(`Use previus connection to the database.`);
    }

    await mongoose.disconnect();
  }

  // for connection to database
  const db = await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`New Connecion to the database.`);

  connection.isConnected = db.connections[0].readyState;
}

async function disconnectDb() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnecting from the database");
    }
  }
}

const db = {
  conectDb,
  disconnectDb,
};

export default db;
