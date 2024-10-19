
import connectMongo from "@util/connectMongo";
import Food from "models/Food";


export async function POST(request) {
    try{
      const new_food = await request.json();
      await connectMongo();
      const newFood = new Food({...new_food});
      const response = await newFood.save();
  
      return Response.json({
        success: true,
        status: 200,
        message: "Food Created Successfully",
        data: response,
      });
    }catch (err) {
      console.error(err);
      return Response.json({
        success: false,
        status: 500,
        message: "Internal Server Error",
        data: null,
      });
    }
  }