import { connectToDatabase } from "@/db/connect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PUT(req) {
  try {
    // Parse the incoming request body
    const body = await req.json();
    //console.log("Received body:", body);
    // Validate the data
    const { email, about, linkdin } = body;

    if (!email || !about || !linkdin) {
      return NextResponse.json(
        { error: "Email, about, and linkedin fields are required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Update the user's record in the database
    const updatedUser = await User.findOneAndUpdate(
      { email }, // Find user by email
      { about, linkdin }, // Fields to update
      { new: true } // Return the updated user
    );

    if (!updatedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
