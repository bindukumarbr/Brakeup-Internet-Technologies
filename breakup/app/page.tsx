import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('./Pages/Carousel'));
const FrequentlyBought = dynamic(() => import('./Pages/FrequentlyBought'));
const PaymentOptions = dynamic(() => import('./Pages/PaymentOptions'));
const Pincode = dynamic(() => import('./Pages/Pincode'));
const Specifications = dynamic(() => import('./Pages/Specifications'));
const ProductInfo = dynamic(() => import('./Pages/ProductInfo'));

import { carouselImages } from "./data/carouselImages";

export default function Home() {
  return (
    <main className="md:grid grid-cols-[47%,47%] gap-[6%] items-start justify-center p-[1.5em]">
      <Carousel slides={carouselImages} />
      <section className="grid gap-y-[2em] mt-[1em]">
        <ProductInfo />
        <Pincode />
        <PaymentOptions />
        <Specifications />
        <FrequentlyBought />
      </section>
    </main>
  );
}
