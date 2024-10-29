"use server"
import connectMongo from "@util/connectMongo";
import Cart from "models/Cart";
import User from "models/User";

export const getCart = async (email) => {
    try{
      await connectMongo()
      const user=User.findOne({email:email});
      if(user){
        const cart=Cart.findOne({user:user._id});
        return cart?.length;
      }else{
        return null
      }
  
    }catch(error){
      return null
    }
  }