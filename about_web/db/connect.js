import mongoose from 'mongoose';

let isConnected = false; // Track connection status

export async function connectToDatabase() {
  if (isConnected) {
    //console.log("MongoDB is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
    });

    isConnected = true;
    //console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}
