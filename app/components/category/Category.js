import { getCategory } from '@/app/action/category';
import Image from 'next/image';
import React from 'react'

const Category = async () => {

    const category = await getCategory();

    return (
        <div>
            <div className="text-center text-[#007E85] text-3xl font-semibold">Services we provide</div>
            <div className="text-base mt-0.5 font-semibold text-center text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </div>
            {/* <div className="flex justify-between">
            {
                category?.map((cat) => {
                    return (
                        <div key={cat._id}>
                            <div className="bg-[#D6F2F2] flex justify-center items-center p-5 rounded-full">

                            <Image  style={{maxHeight:50,minHeight:50,maxWidth:50,minWidth:50}} src={cat.icon} alt={cat.title} width={20} height={20} />
                            </div>

                            <h1>{cat.title}</h1>
                        </div>
                    )
                })
            }
            </div> */}
        </div>
    )
}

export default Category