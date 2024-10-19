import { fetchFood } from '@app/action/food';
import React from 'react'
import FoodCard from './FoodCard';

const FoodItemList = async({id}) => {

  const foodItem=await fetchFood(id);

  console.log(foodItem);

    return (
        <>
        {
            foodItem?.map((item) => ((<FoodCard key={item.id} item={item} />)))
        }
        </>
    )
}

export default FoodItemList