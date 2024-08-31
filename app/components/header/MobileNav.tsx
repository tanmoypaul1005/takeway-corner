"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { iMenu } from '../../../util/imageImports'
import DrawerDefault from './DrawerDefault'

const MobileNav:React.FC = () => {

    const [isMobileNav, setMobileNav] = useState<boolean>(false);

    const handleDrawer = () => {
        setMobileNav(!isMobileNav)
    }

    return (
        <>
        <div onClick={handleDrawer} className='flex items-center justify-center cursor-pointer'>
            <Image width={30} height={30} src={iMenu} alt="Logo" />
        </div>
        {isMobileNav &&<DrawerDefault open={isMobileNav} closeDrawer={handleDrawer} />}
        </>
    )
}

export default MobileNav        