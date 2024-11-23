import { connectToDatabase } from "@/db/connect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function PUT(req) {
    // Parse the incoming request body
    const body = await req.json();
    //console.log("Received body:", body);

    await connectToDatabase();
    const UserData = await User.findOne({email:body.email})
    return NextResponse.json(UserData, {status:200})
}
