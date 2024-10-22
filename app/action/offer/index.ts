import Offer from "models/Offer";
import connectMongo from "util/connectMongo";

export const fetchOffer = async (id) => {
    try {
        await connectMongo();
        const food = await Offer.find({})
        return food;
    } catch (e) {
     return null
    }
}