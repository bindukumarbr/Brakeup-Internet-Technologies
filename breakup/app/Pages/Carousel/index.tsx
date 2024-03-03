'use client'
import React, { useState } from 'react'
import Slider from "react-slick";
import Image, { StaticImageData } from 'next/image';
import Like from "@/public/assets/Navbar/LikeButtonImg.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@/app/Components/Button';

type imageProps = {
    src: StaticImageData,
    alt: string
}

interface CarouselProps {
    slides: imageProps[]
}


function Carousel({ slides }: CarouselProps) {

    const [active, setActive] = useState(0)

    const verticalSettings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const horizontalSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div></div>,
        prevArrow: <div></div>
    };



    const VSlide = ({ alt, src, index, }: imageProps & { index: number }) => {
        return (
            <div className={`relative flex justify-center items-center aspect-square border-[0.08em] rounded-[0.3em] overflow-hidden mb-[0.5em] cursor-pointer ${active === index && 'border-blue-800'}`} onClick={() => setActive(index)}>
                <Image src={src} alt={alt} className='object-contain' />
            </div>
        )
    }
    const HSlide = ({ alt, src, index, }: imageProps & { index: number }) => {
        return (
            <div className={`relative flex justify-center items-center aspect-square rounded-[0.3em] overflow-hidden mb-[0.5em] cursor-pointer `} >
                <Image src={src} alt={alt} className='object-contain' />
            </div>
        )
    }

    const WhishListIcon = <Image src={Like} alt="Wishlist" className='absolute w-[2.2em] right-[5%] top-[5%] z-10' />


    function SampleNextArrow(props: any) {
        const { className, onClick } = props;
        return (
            <div className={`rotate-90 cursor-pointer bottom-[-1em] left-[50%] translate-x-[-50%] absolute ${className.includes('slick-disabled') && 'opacity-60'}`} onClick={onClick}>{">"}</div>
        );
    }

    function SamplePrevArrow(props: any) {
        const { className, onClick } = props;
        return (
            <div className={`rotate-90 cursor-pointer top-[-1.3em] left-[50%] translate-x-[-50%] absolute ${className.includes('slick-disabled') && 'opacity-60'}`} onClick={onClick}>{"<"}</div>
        );
    }

    return (
        <>
            <div className='text-[2vw] relative'>
                <div className=' items-center hidden sm:flex' >
                    <div className='w-[15%] py-[2em] mr-[3%] mb-[3em]'>
                        <Slider {...verticalSettings}>
                            {slides?.map((item, index) => (
                                <VSlide key={item.alt} {...item} index={index} />
                            ))}
                        </Slider>
                    </div>
                    <div className='w-[80%]'>
                        <div className='border-[0.08em] aspect-square rounded-[0.3em] relative flex justify-center items-center mb-[0.7em]'>
                            {WhishListIcon}
                            <Image src={slides[active].src} alt={slides[active].alt} />
                        </div>
                        <div className="hidden md:grid grid-cols-2 gap-[1em] text-[0.6em]">
                            <Button className=" py-[0.7em] border-[0.1em] border-[#000] rounded-full font-semibold">
                                Add to Cart
                            </Button>
                            <Button className=" py-[0.7em] bg-[#F1BE20] rounded-full font-semibold">
                                Buy Now
                            </Button>
                        </div>
                    </div>


                </div>
                <div className='text-[#959595] absolute sm:text-[0.55em] lg:text-[0.4em]  hidden md:block top-[-1em]'>
                    Home / Products / Brake System /
                    <span className='font-semibold text-[#000]'>
                        &nbsp; ICER Front Brake Pad A3 2022 Limosine
                    </span>
                </div>
            </div>
            <div className='block w-[90%] mx-auto text-[4vw] items-center sm:hidden relative' >
                {WhishListIcon}
                <Slider {...horizontalSettings}>
                    {slides?.map((item, index) => (
                        <HSlide key={item.alt} {...item} index={index} />
                    ))}
                </Slider>

            </div>


        </>

    )
}

export default Carousel