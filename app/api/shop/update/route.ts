import connectMongo from "@util/connectMongo";
import Shop from "models/Shop";

export const dynamic = "force-dynamic";

export async function POST(request) {
    try {
        await connectMongo();
        const body = await request.json();
        console.log("body", body);

        const shopId = body.shopId;
        const category= body.category;

        const shop = await Shop.findByIdAndUpdate(
            shopId,
            { categories: category },
            { new: true }
        )
        if (!shop) {
            throw new Error('Shop not found');
        }

        return Response.json({
            success: true,
            status: 200,
            message: "Category Created Successfully",
            data: shop,
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
