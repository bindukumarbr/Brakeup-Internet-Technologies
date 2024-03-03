import React from 'react';
import { specifications } from '@/app/data/specifications';


const Specifications: React.FC = () => {
    return (
        <div className='border-[#E1E1E1] border-b-[0.1em] text-[4vw] md:text-[1.4vw] lg:text-[1vw] pb-[1.2em]'>
            <p className='font-semibold mb-[1em]'>Specifications</p>
            <div className='grid grid-cols-2 grid-flow-row relative gap-y-[1em]'>
                {specifications.map(({ label, value, }, index) => (
                    <div key={value} className="">
                        <p className='text-[#535353]'>{label}</p>
                        <p className='font-semibold text-[0.9em] '>{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Specifications;

