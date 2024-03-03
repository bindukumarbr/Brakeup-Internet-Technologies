"use client"

import { useState } from "react"

const Counter: React.FC = () => {

    const [count, setCount] = useState(1)

    const increaseCount = () => {
        setCount(count + 1)
    }
    const decraseCount = () => {
        count - 1 >= 0 && setCount(count - 1)
    }

    return (
        <div className=" px-[1.3em] border-[0.1em] border-[#000000] rounded-full inline-flex items-center cursor-pointer">
            <p onClick={decraseCount} className="text-[2em] mr-[0.5em]">-</p>
            <p className="mr-[1em]">{count}</p>
            <p onClick={increaseCount} className="font-semibold text-[1.5em]">+</p>
        </div>
    )
}

export default Counter