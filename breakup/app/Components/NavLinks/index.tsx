import Link from 'next/link';
import Button from '../Button';
import OfffersImg from "@/public/assets/Navbar/Offers.png"
import Image from 'next/image';

const navBarLinks: string[] = ["Brake System", "Air Filters", "Fluids", "Suspension", "Plugs and Coils", "Low Voltage Items"]

const NavLinks: React.FC = () => {
    return (
        <div className='border flex justify-center space-x-[2em] p-[0.5em] text-[0.7em] '>
            {navBarLinks.map(link => (
                <div key={link}>
                    <Link href={link} className='font-semibold cursor-pointer' >
                        {link}
                    </Link>
                </div>
            ))}
            <Button icon={<Image src={OfffersImg} alt='Offer Image' className='w-[1em] mr-[0.2em]'/>} className='bg-[#209016] flex items-center text-white px-[0.5em] py-[0.2em] rounded-[0.5em] text-[0.8em] ml-[20em]!'>
                <span className='ml-[0.2em]'>Offers</span>
            </Button>
        </div>
    );
};

export default NavLinks;
