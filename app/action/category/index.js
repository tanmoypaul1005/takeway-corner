export const dynamic = "force-dynamic";
import Category from "@/models/Category";
import connectMongo from "@/util/connectMongo";


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