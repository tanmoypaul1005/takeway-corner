import Shop from "models/Shop";
import connectMongo from "util/connectMongo"

export const fetchShop = async () => {
    try {
        await connectMongo();
        const shop = await Shop.find();
        return shop;
    } catch (e) {
     return null
    }
}