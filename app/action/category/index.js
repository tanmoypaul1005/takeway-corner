export const dynamic = "force-dynamic";
import connectMongo from "@util/connectMongo";
import Category from "models/Category";


export const getCategory = async () => {
    try {
        await connectMongo();
        const category = await Category.find({});
        return  category;
    } catch (err) {
        console.error(err);
        return null;
    }
}