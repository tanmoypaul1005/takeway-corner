
import { MongoClient } from "mongodb";
import bcryptjs from 'bcryptjs';
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function POST(request) {
  try {
    const { email, password,name } = await request.json();

    if (!email || !email.includes("@") || !password || password.trim().length < 6) {
      return new Response(
        JSON.stringify({
          success: false,
          status: 422,
          message: "Invalid input.",
          data: null,
        }),
        { status: 422 }
      );
    }

    await client.connect();
    const db = client.db();

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return new Response(
        JSON.stringify({
          success: false,
          status: 422,
          message: "User already exists.",
          data: null,
        }),
        { status: 422 }
      );
    }

    const hashedPassword = await bcryptjs.hash(password, 12);

    const result = await db.collection("users").insertOne({
      email,
      password: hashedPassword,
      name
    });

    return new Response(
      JSON.stringify({
        success: true,
        status: 201,
        message: "User created successfully.",
        data: result,
      }),
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({
        success: false,
        status: 500,
        message: "Internal Server Error",
        data: null,
      }),
      { status: 500 }
    );
  }
}