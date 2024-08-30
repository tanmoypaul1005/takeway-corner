import { iLogo } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className="flex justify-between">
            <Image src={iLogo} alt=""/>

            <div className='flex items-center justify-center space-x-10 text-xl font-semibold'>
                <div className="cursor-pointer">Home</div>
                <div className="cursor-pointer">Service</div>
                <div className="cursor-pointer">Contact us</div>
                <div className="cursor-pointer">Help</div>
                <div className="cursor-pointer">Blogs</div>
                <div className="cursor-pointer">Sing up</div>
                <div className="cursor-pointer">Sing in</div>
            </div>
        </div>
    )
}

export default Header