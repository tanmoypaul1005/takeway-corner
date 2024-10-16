import Cuisines from "models/Cuisines";
import connectMongo from "util/connectMongo"

export const fetchCuisines = async () => {
    try {
        await connectMongo();
        const shop = await Cuisines.find();
        return shop;
    } catch (e) {
     return null
    }
}