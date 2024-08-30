import { iLogo } from '@/util/imageImports'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div>
            <Image src={iLogo} alt=""/>
        </div>
    )
}

export default Header