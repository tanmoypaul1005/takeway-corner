export const dynamic = "force-dynamic";
import Category from "../../../models/Category";
import connectMongo from "../../../util/connectMongo";

export async function POST(request) {
  try{
    const new_category = await request.json();

    await connectMongo();
   
    const newCategory = new Category({...new_category});
    const response = await newCategory.save();

    return Response.json({
      success: true,
      status: 200,
      message: "Category Created Successfully",
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