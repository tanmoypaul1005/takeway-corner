import Image from 'next/image'
import React from 'react'

const CuisinesCard = () => {
    return (
        <div className="flex flex-col items-center justify-center">
          <Image
            className="rounded-lg"
            width={150}
            height={150}
            src="https://images.deliveryhero.io/image/foodpanda/cuisine-images/BD/193.png?height=192"
            alt=""
          />
          <div className="mt-2 text-sm font-semibold text-center ">Biryani</div>
        </div>
    )
}

export default CuisinesCard