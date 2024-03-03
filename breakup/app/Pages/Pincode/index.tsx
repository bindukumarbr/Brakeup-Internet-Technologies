import React from 'react'

const Pincode = () => {
    return (
        <div className="text-[4vw] md:text-[1.4vw] lg:text-[1vw] border-[#E1E1E1] border-b-[0.1em] pb-[1em]">
            <h2 className="font-semibold mb-[0.5em]">Delivery Option</h2>
            <div className="flex border-[0.15em] border-[#e2e2e2] rounded-[0.6em] overflow-hidden py-[1em] md:w-[75%]">
                <input className="w-[70%] px-[1em] outline-none" placeholder="Enter Pin-code" maxLength={6} pattern="^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$" defaultValue={560078} />
                <div className=" w-[30%] border-s-[0.15em] border-s-[#e2e2e2] font-bold flex justify-center text-center">Check</div>
            </div>
            <p className="text-[0.8em] text-[#646464] mt-[0.5em]">Please enter PIN code to check delivery time.</p>
        </div>
    )
}

export default Pincode;