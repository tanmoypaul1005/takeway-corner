import { getCategory } from '@/app/action/category';
import { iLink } from '@/util/imageImports';
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
                            <div key={cat._id} className="flex flex-col max-w-[320px] min-w-[320px] p-3 bg-white rounded">
                                <div className="w-full h-44 bg-[#D6F2F2] "></div>
                                <h1 className=" text-[#007E85] font-bold text-xl mt-5">{cat.title}</h1>
                                <div className="my-2 text-[#555555] text-sm font-">
                                    Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est velitolm.
                                </div>
                                <Image className="cursor-pointer" src={iLink} alt={cat.title} width={100} height={100} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category