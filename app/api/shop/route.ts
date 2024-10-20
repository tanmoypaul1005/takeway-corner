import connectMongo from "@util/connectMongo";
import Category from "models/Category";
import Shop from "models/Shop";

export async function POST(request) {
  try {
    const new_shop = await request.json();
    await connectMongo();
    const newShop = new Shop({ ...new_shop });
    const response = await newShop.save();

    return Response.json({
      success: true,
      status: 200,
      message: "Shop Created Successfully",
      data: response,
    });
  } catch (err) {
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
  try {

    await connectMongo();

    const shop = await Shop.findOne({ _id: "670ea0260426a364af4e5290" })


    // Fetch category details
    const categoryDetails = await Promise.all(
      shop.categories.map(async (categoryId) => {
        const category = await Category.findById(categoryId);
        return category;
      })
    );

    return Response.json({
      success: true,
      status: 200,
      message: "Category Fetched Successfully",
      data: { ...shop._doc, categories: categoryDetails },
    });
  } catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
}