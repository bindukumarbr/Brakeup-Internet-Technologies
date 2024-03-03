"use client"

import Image from 'next/image';
import React, { SelectHTMLAttributes } from 'react';
import SearchIconImg from "@/public/assets/Navbar/SearchIconImg.png";

interface SearchProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: { value: string; label: string }[];
}

const SearchBar: React.FC<SearchProps> = ({ className, options, ...rest }) => {

  return (
    <div className={`flex border rounded-[1em] overflow-hidden text-[1.5em] bg-[#F7F7F7] ${className} `}>
      <select defaultValue={"1"} className='bg-[#F7F7F7] mr-[0.8em] outline-none py-[0.7em] text-[0.4em] font-bold w-[20%] text-center' {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value} className='text-[1.2em] py-[0.6em]'>
            {option.label}
          </option>
        ))}
      </select>
      <input type="text" className='outline-none px-[0.5em] text-[0.4em] font-semibold w-[78%]' placeholder='What are you looking for?' />
      <div className='bg-[#F1BE20] w-[8%] flex items-center justify-center cursor-pointer'>
        <Image src={SearchIconImg} alt='Search Icon' className='w-[0.5em]' />
      </div>
    </div>
  )
}

export default SearchBar;