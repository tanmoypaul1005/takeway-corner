
import connectMongo from "@util/connectMongo";
import Cuisines from "models/Cuisines";

export async function POST(request) {
    try{
      const new_cuisines = await request.json();
      await connectMongo();
      const newCuisines = new Cuisines({...new_cuisines});
      const response = await newCuisines.save();
  
      return Response.json({
        success: true,
        status: 200,
        message: "Cuisines Created Successfully",
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




export async function GET() {
  try{

    await connectMongo();
   
    const category =await Cuisines.find({});

    return Response.json({
      success: true,
      status: 200,
      message: "Cuisines Fetched Successfully",
      data: category,
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