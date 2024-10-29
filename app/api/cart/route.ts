import connectMongo from "@util/connectMongo";
import Cart from "models/Cart";
import User from "models/User";
import mongoose from "mongoose";

export async function POST(request) {
    try {
        const new_cart = await request.json();

        await connectMongo();

        const userId=await User.findOne({email:new_cart?.email});
        if(!userId){
            return Response.json({
                success: false,
                message: "User not found",
                status: 400,
                data:new_cart?.email
            });
        }

        // Validation checks
        if (!new_cart.quantity || typeof new_cart.quantity !== 'number' || new_cart.quantity <= 0) {
            return Response.json({
                success: false,
                message: "Invalid quantity",
                status: 400,
            });
        }

        if (!new_cart.food || !mongoose.Types.ObjectId.isValid(new_cart.food)) {
            return Response.json({
                success: false,
                message: "Invalid food ID",
                status: 400,
            });
        }

        // if (!new_cart.user || !mongoose.Types.ObjectId.isValid(userId?._id)) {
        //     return Response.json({
        //         success: false,
        //         message: "Invalid user ID",
        //         status: 400,
        //     });
        // }

        const findCart = await Cart.findOne({ user: userId?._id, food: new_cart.food });
        if (findCart) {
            return Response.json({
                success: false,
                message: "Cart Already Exists",
                status: 400,
            });
        }

        const _newCard={
            quantity:new_cart.quantity,
            food:new_cart.food,
            user:userId?._id
        }
        const cart = new Cart({..._newCard});
        await cart.save();
      
        return Response.json({
            success: true,
            message: "Cart Created Successfully",
            status: 201,
            data: cart,
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