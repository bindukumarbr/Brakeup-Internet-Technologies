import Image from "next/image";
import React from "react";
import Stars from "@/public/assets/Others/Stars.png";
import Counter from "@/app/Components/Counter";
import Button from "@/app/Components/Button";
import Car from "@/public/assets/Navbar/Shape.png";

function ProductInfo() {
    return (
        <div className="grid gap-y-[1em] text-[4vw] mt-[2em] md:text-[1.5vw] md:mt-0 lg:text-[1vw]">
            <p className="font-semibold">ICER Front Brake Pad A3 2022 Limousine </p>
            <div className="flex items-center">
                <Image src={Stars} alt="Stars" className="w-[5em] mb-[0.1em]" />
                <span className="font-semibold">4.0 </span> &nbsp;(261 Reviews)
            </div>
            <div className="space-x-[0.7em]">
                <span className="font-bold">₹5042</span>
                <span className="line-through text-[#B2B2B2] text-[0.8em]">₹6,000</span>
                <span className="text-[#209016] font-semibold">16% OFF</span>
            </div>
            <div className="space-x-[0.7em] flex items-center">
                <span>
                    <Counter />
                </span>
                <span className="text-[#F83E16] font-semibold">Only 2 left</span>
            </div>
            <div className="hidden md:flex items-center justify-center bg-[#F3F7F2] rounded-full p-[1em] border-[0.1em] border-[#3A721E]">
                <Image src={Car} alt="" className="w-[1.5em] mr-[0.7em]" />
                <p className="font-semibold">Fits for</p> &nbsp;
                <span className="underline font-semibold">
                    {" "}
                    Mercedes-AMG GT 63 S E Prefomance
                </span>
            </div>
            <div className=" grid grid-cols-2 gap-[1em] md:hidden ">
                <Button className=" py-[0.7em] border-[0.1em] border-[#000] rounded-full font-semibold">
                    Add to Cart
                </Button>
                <Button className=" py-[0.7em] bg-[#F1BE20] rounded-full font-semibold">
                    Buy Now
                </Button>
            </div>
        </div>
    );
}

export default ProductInfo;
