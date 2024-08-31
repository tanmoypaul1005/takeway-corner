import { getCategory } from '@/app/action/category';
import Image from 'next/image';
import React from 'react'

const Category = async () => {

    const category = await getCategory();

    return (
        <div>
            <div className="text-center text-[#007E85] text-3xl font-semibold">Services we provide</div>
            <div className="text-base mt-0.5 mb-5 font-semibold text-center text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. </div>
            <div className="flex flex-wrap justify-between gap-y-5">
                {
                    category?.map((cat) => {
                        return (
                                <div key={cat._id} className="flex flex-col max-w-[250px] min-w-[250px] items-center justify-center p-5 bg-white rounded">
                                    <div className="w-full h-44 bg-[#D6F2F2] "></div>
                                    <h1 className="text-black">{cat.title}</h1>
                                </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category