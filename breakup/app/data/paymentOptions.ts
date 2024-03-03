import HdfcLogo from "@/public/assets/PaymentOptions/hdfc.png"
import Gpay from "@/public/assets/PaymentOptions/gpay.png"
import { StaticImageData } from "next/image";


interface PaymentOption {
    label: string;
    icon: StaticImageData
    offers: string
    id: number
}

export const paymentOptions: PaymentOption[] = [
    {
        id: 1,
        label: "EMI from ₹244/month",
        icon: HdfcLogo,
        offers: "View plans >"
    },
    {
        id: 2,
        label: "Save up to ₹252",
        icon: Gpay,
        offers: "View plans >"
    },
];
