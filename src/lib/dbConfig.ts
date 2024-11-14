import mongoose from "mongoose";

type ConnectionObj = {
  isConnected?: number;
};

const connection: ConnectionObj = {};
export default async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database instance");
    return;
  }

  try {
    const db = await mongoose.connect(
      process.env.NEXT_PUBLIC_MONGODB_URI || "",
      {}
    );
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Error connecting to database instance --> ", error);
    process.exit(1);
  }
}

// export async function dbDisconnect(): Promise<void> {
//   if (connection.isConnected) {
//     await mongoose.disconnect();
//     console.log("Disconnected from MongoDB");
//     connection.isConnected = 0;
//   }
// }
