import Image from 'next/image'
import React from 'react'
import Product1 from "@/public/assets/ProductImages/image 334.jpg";

const FrequentlyBought = () => {
    return (
        <div className='text-[3vw] md:text-[1.3vw] lg:text-[1vw]'>
            <div>
                <p className='font-semibold mb-[1em]'>Frequently bought together</p>
                <Image src={Product1} alt='Product 01' className='border rounded-[0.5em] shadow mb-[0.5em] aspect-square w-[10.3em]' />
                <p className='font-semibold text-[0.9em] leading-[0.9em]'>ICER Front Brake Pads</p>
                <p className='font-semibold text-[0.9em]'>Brake Pads</p>
                <p className='font-bold mt-[0.5em] mb-[1em]'>₹3,609</p>
            </div>

            <div className='bg-[#F7F7F7] grid gap-y-[1.5em] md:text-[0.9em] grid-cols-[20%,5%,20%,5%,20%] md:grid-cols-[15%,3%,15%,3%,15%,34%] p-[1.7em] rounded-[0.7em] shadow  justify-between items-center mb-[2em]'>
                <div>
                    <p className='text-[#8F8F8F]'>1 Item</p>
                    <p className='font-semibold'>₹2,386</p>
                </div>
                <div className='text-[#8F8F8F]'>+</div>
                <div>
                    <p className='text-[#8F8F8F]'>2 Add-ons</p>
                    <p className='font-semibold'>₹2,386</p>
                </div>
                <div className='text-[#8F8F8F]'>=</div>
                <div>
                    <p className='text-[#8F8F8F]'>Total</p>
                    <p className='font-semibold'>₹6,795</p>
                </div>
                <div className='col-span-5 md:col-span-1 rounded-full border-[#000000] border-[0.1em] py-[1em] px-[1em] inline-flex justify-center'>
                    Add 3 items to cart
                </div>
            </div>

            <p className='font-semibold text-[#1B45B7] mt-[0.9em] text-[1.2em] border-t-[0.1em] pt-[1.2em]'>{"View all 419 reviews >"}</p>

        </div>
    )
}

export default FrequentlyBought;