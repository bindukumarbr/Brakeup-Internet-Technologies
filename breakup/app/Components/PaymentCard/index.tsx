import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface PaymentOptionsProps {
    label: string,
    icon: StaticImageData,
    offers: string
}

const PaymentOptions: React.FC<PaymentOptionsProps> = ({ label, icon, offers }) => {

    return (
        <div className=' border-[0.126em] border-[#005DB6] text-[3.5vw] md:text-[1.2vw] grid grid-flow-row grid-rows-2 rounded-[0.9em] w-full overflow-hidden'>
            <div className='font-semibold bg-[#F8FBFF] p-[0.8em] text-[1em]'>{label}</div>
            <div className='flex items-center justify-between p-[0.8em]'>
                <div className='flex items-center gap-x-[0.5em]'>
                    <Image src={icon} alt='HDFC' className='w-[2em]' />
                    <span className='text-[#808080]'>& more</span>
                </div>
                <p className='text-[#1B45B7] font-bold cursor-pointer'>{offers}</p>
            </div>

        </div>
    )
}

export default PaymentOptions