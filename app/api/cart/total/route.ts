import connectMongo from "@util/connectMongo";
import Cart from "models/Cart";

export async function GET() {
    try{
  
      await connectMongo();
     
      const category =await Cart.find({});
  
      return Response.json({
        success: true,
        status: 200,
        message: "Category Fetched Successfully",
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