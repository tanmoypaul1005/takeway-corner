import Food from "models/Food";
import connectMongo from "util/connectMongo";

export const fetchFood = async ({id}) => {
    try {
        await connectMongo();
        const food = await Food.find({shop: id})
        return food;
    } catch (e) {
     return null
    }
}