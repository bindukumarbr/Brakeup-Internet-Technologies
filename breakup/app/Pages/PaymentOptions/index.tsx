import { paymentOptions } from "@/app/data/paymentOptions";
import React from "react";
import PaymentOptionsCard from "@/app/Components/PaymentCard";
import Image from "next/image";
import Razorpay from "@/public/assets/Others/Razorpay.png";

const PaymentOptions = () => {
    return (
        <div className="border-[#E1E1E1] border-b-[0.1em] pb-[0.45em]">
            <div className="flex flex-col gap-[0.7em] md:flex-row">
                {paymentOptions.map((item) => (
                    <PaymentOptionsCard {...item} key={item.id}/>
                ))}
            </div>
            <div className="inline-flex items-center my-[1em]">
                <p className="text-[#808080] text-[0.8em]">Secured by</p>
                <Image src={Razorpay} alt="Razorpay" className="w-[7em] ml-[0.5em]" />
            </div>
        </div>
    );
};

export default PaymentOptions;
