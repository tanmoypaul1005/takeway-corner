import Cuisines from "models/Cuisines";
import Food from "models/Food";
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


export const fetchCuisinesDetails = async (cuisinesId) => {
    try {
        await connectMongo();
        const cuisines = await Cuisines.findOne({_id:cuisinesId});
        return cuisines;
    } catch (e) {
     return null
    }
}


export const fetchCuisinesFood = async (cuisinesId) => {
    try {
        await connectMongo();
        const shop = await Food.find({cuisines:cuisinesId});
        return shop;
    } catch (e) {
     return null
    }
}