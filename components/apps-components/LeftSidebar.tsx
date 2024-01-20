'use client'

import logo from '../../public/logo.svg'
import { IoBasketballSharp, IoStatsChart } from "react-icons/io5";
import { IoHomeSharp } from "react-icons/io5";
import { FaFootballBall } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { IoMdFootball } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LeftSidebar() {

    const currentRoute = usePathname();

    return (
        <div className=' flex flex-col gap-6'>
            <Image src={logo} alt='The Premier Collection logo' height={50} width={50} className='w-full py-3' />
            <div className='w-full flex flex-col items-center justify-center text-2xl 2xl:text-3xl'>
                <Link href={'https://allsportsdao.io'} className={`w-full flex items-center justify-center border-l-4 hover:border-primary hover:text-primary py-3 2xl:py-4 ${currentRoute === "https://allsportsdao.io" ? "text-primary border-primary" : "border-transparent"}`}>
                    <IoHomeSharp />
                </Link>
                <Link href={'#'} className={`w-full flex items-center justify-center border-l-4 text-gray-600 hover:border-gray-600 py-3 2xl:py-4 ${currentRoute === "#" ? "text-gray-300 border-gray-600" : "border-transparent"}`}>
                    <MdDashboard />
                </Link>
                <Link href={'#'} className={`w-full flex items-center justify-center border-l-4 text-gray-600 hover:border-gray-600 py-3 2xl:py-4 ${currentRoute === "#" ? "text-gray-300 border-gray-600" : "border-transparent"}`}>
                    <IoStatsChart />
                </Link>
                <Link href={'/football'} className={`w-full flex items-center justify-center border-l-4 hover:border-primary hover:text-primary py-3 2xl:py-4 ${currentRoute === "/football" ? "text-primary border-primary" : "border-transparent"}`}>
                    <IoMdFootball />
                </Link>
                <Link href={'#'} className={`w-full flex items-center justify-center border-l-4 text-gray-600 hover:border-gray-600 py-3 2xl:py-4 ${currentRoute === "#" ? "text-gray-300 border-gray-600" : "border-transparent"}`}>
                    <FaFootballBall />
                </Link>
                <Link href={'#'} className={`w-full flex items-center justify-center border-l-4 text-gray-600 hover:border-gray-600 py-3 2xl:py-4 ${currentRoute === "#" ? "text-gray-300 border-gray-600" : "border-transparent"}`}>
                    <IoBasketballSharp />
                </Link>
            </div>
        </div>
    )
}