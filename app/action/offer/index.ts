import Offer from "models/Offer";
import Shop from "models/Shop";
import connectMongo from "util/connectMongo";

export const fetchOffer = async () => {
    try {
        await connectMongo();
        const offer = await Offer.find({})
        return offer;
    } catch (e) {
     return null
    }
}


export const fetchOfferDetails = async (id) => {
    try {
        await connectMongo();
        const offer = await Offer.findOne({_id:id});


        // Fetch category details
        const productDetails = await Promise.all(
            await offer.products.map(async (categoryId) => {
                const products = await Shop.findOne({_id:categoryId});
                return products;
            })
        );

        return { ...offer._doc, shop: productDetails };
    } catch (e) {
     return null
    }
}