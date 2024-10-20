import Category from "models/Category";
import Shop from "models/Shop";
import connectMongo from "util/connectMongo"

export const fetchShop = async () => {
    try {
        await connectMongo();
        const shop = await Shop.find({})
        return shop;
    } catch (e) {
        return null
    }
}

export const fetchShopDetails = async (id) => {
    try {
        await connectMongo();
        const shop = await Shop.findOne({ _id: id })

        // Fetch category details
        const categoryDetails = await Promise.all(
            await shop.categories.map(async (categoryId) => {
                const category = await Category.findOne({_id:categoryId});
                return category;
            })
        );

        return { ...shop._doc, categories: categoryDetails }
    } catch (e) {
        console.log(e)
        return null
    }
}