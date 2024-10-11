import Image from 'next/image'
import React from 'react'

const CuisinesCard = ({img="",title}) => {
    return (
        <div className="flex flex-col items-center justify-center">
          <Image
            className="rounded-lg"
            width={150}
            height={150}
            src={img}
            alt=""
          />
          <div className="mt-2 text-sm font-semibold text-center">{title}</div>
        </div>
    )
}

export default CuisinesCard