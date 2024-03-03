import Image from "next/image";

import BackButtonImg from "@/public/assets/Navbar/BackButtonImg.png";
import LogoImg from "@/public/assets/Navbar/LogoImg.png";
import SearchIconImg from "@/public/assets/Navbar/SearchIconImg.png";
import CartImg from "@/public/assets/Navbar/CartImg.png";
import NavCarImg from "@/public/assets/Navbar/NavCarImg.png";
import DesLogoImg from "@/public/assets/Navbar/DesLogoImg.png";
import Like from "@/public/assets/Navbar/Like.png";
import Profile from "@/public/assets/Navbar/Profile.png";
import Button from "../Button";
import SearchBar from "../SearchBar";
import NavLinks from "../NavLinks";

const NavBar = () => {

  const CarIcon = <Image src={NavCarImg} alt="Car" className="w-[1em] md:w-[1em]" />

  const SelectOptions: any = [
    {
      label: "All Products",
      value: "products"
    },
    {
      label: "Brake Pads",
      value: "brakePads"
    },

  ]

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="text-[4vw] md:text-[1.9vw] lg:text-[1.5vw] lg:hidden">
        <div className="flex items-center justify-between p-[1em] border-b ">
          <div className="flex items-center gap-x-[1em] md:gap-x-[2.5em]">
            <Image src={BackButtonImg} alt="Back Button" className="w-[1.1em]" />
            <Image src={LogoImg} alt="Logo" className="w-[1.6em] ml-[0.9em]" />
          </div>
          <div className="flex items-center gap-x-[1em] md:gap-x-[2.5em]">
            <Image src={SearchIconImg} alt="SearchIcon" className="w-[1em]" />
            <Image src={CartImg} alt="Cart" className="w-[1.2em]" />
            <Button icon={CarIcon} className=" px-[1em] py-[0.5em] rounded-full flex items-center bg-[#27357A]">
              <span className="text-white text-[0.7em] ml-[0.4em]">Garage</span>
            </Button>
          </div>
        </div>
      </nav>

      {/*  Desktop Navigation */}
      <nav className="hidden lg:block text-[1.9vw] lg:text-[1.3vw]">
        <div className="grid grid-cols-[25%,40%,25%] gap-x-[3%] items-center justify-between p-[1em] border-b ">
          <div className="flex items-center gap-x-[0.9em] cursor-pointer">
            <Image src={LogoImg} alt="Logo" className="w-[1.9em] ml-[0.9em]" />
            <Image src={DesLogoImg} alt="Back Button" className="w-[8em]" />
          </div>
          <SearchBar options={SelectOptions} className="" />
          <div className="flex items-center gap-x-[1em] md:gap-x-[2.5em]">
            <Button icon={CarIcon} className=" px-[1em] py-[0.35em] rounded-full flex items-center bg-[#27357A]">
              <span className="text-white text-[0.6em] ml-[0.6em]">My Garage</span>
            </Button>
            <Image src={Profile} alt="SearchIcon" className="w-[1em] cursor-pointer" />
            <Image src={Like} alt="Cart" className="w-[1.2em] cursor-pointer" />
            <Image src={CartImg} alt="Cart" className="w-[1.2em] cursor-pointer" />
          </div>
        </div>
        <NavLinks />
      </nav>



    </>

  );
};

export default NavBar;
