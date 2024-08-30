import { iLogo } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className="flex justify-between">
            <Image src={iLogo} alt=""/>

            <div className='flex items-center justify-center space-x-3'>
                <div>Home</div>
                <div>Service</div>
                <div>Contact us</div>
                <div>Help</div>
                <div>Blogs</div>
            </div>
        </div>
    )
}

export default Header