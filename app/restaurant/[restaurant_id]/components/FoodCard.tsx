import Image from 'next/image'
import React from 'react'

const FoodCard = () => {
    return (
        <div className="flex justify-between border-[1px] rounded  p-3">
        <div className="">
          <div className="text-xl font-bold">Basmati kacchi - 1:1</div>
          <div className="text-base font-medium">TK 300</div>
          <div>
            1:1 - Popular dish prepared of slow-cooked aromatic basmati rice
            layered with potatoes, marinated mutton pcs, in a delicate blend
            of whole spices
          </div>
        </div>
        <div>
          <Image
            className="rounded-md"
            width={200}
            height={200}
            src="https://images.deliveryhero.io/image/fd-bd/Products/2046151.jpg?width=%s"
            alt=""
          />
        </div>
      </div>
    )
}

export default FoodCard