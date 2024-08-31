import Image from 'next/image'
import React from 'react'
import { iMenu } from '../../../util/imageImports'

const MobileNav:React.FC = () => {
    return (
        <div className='flex items-center justify-center cursor-pointer'>
            <Image width={30} height={30} src={iMenu} alt="Logo" />
        </div>
    )
}

export default MobileNav        