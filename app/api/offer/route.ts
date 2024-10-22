import connectMongo from "@util/connectMongo";
import Food from "models/Food";

export async function POST(request) {
    try{
      const new_offer = await request.json();
      await connectMongo();
      const newOffer = new Food({...new_offer});
      const response = await newOffer.save();
  
      return Response.json({
        success: true,
        status: 200,
        message: "Offer Created Successfully",
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
