"use client"
import Image from 'next/image'
import { SelectProfile } from '@/components/apps-components/SelectProfile'
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MEFloor from './MEFloor';
import { BsTwitterX } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";




export default function Footer() {

    const currentRoute = usePathname();

    return (
        <footer className='lg:flex border-t border-red-500 fixed inset-x-0 bottom-0 bg-black items-center justify-between'>
            <div className='h-full flex items-center gap-8 text-base text-[#A0A8B1] 2xl:text-base'>
                <Link href={'https://www.tensor.trade/trade/the_prem'} className={`h-full flex items-center justify-center hover:text-[#4070a1] ${currentRoute === "https://www.tensor.trade/trade/the_prem" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                <MEFloor /> 
                </Link>
            </div>
            <div className='h-full flex items-center gap-8 text-base text-[#A0A8B1] 2xl:text-base'>
                <p>AllSportsDAO</p>
            </div>
            <div className='flex items-center gap-12'>
                {/* this is icons div notification message and love  */}
                <div className='flex items-center gap-4 text-lg 2xl:text-xl'>
                    <Link href={'https://twitter.com/AllSportsDAO'} className={`h-full flex items-center justify-center hover:text-[#4070a1] ${currentRoute === "https://www.tensor.trade/trade/the_prem" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                        <BsTwitterX />
                    </Link>
                    <Link href={'https://discord.gg/T3AX3X5q'} className={`h-full flex items-center justify-center hover:text-[#4070a1] ${currentRoute === "https://www.tensor.trade/trade/the_prem" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                        <FaDiscord />
                    </Link>
                    <Link href={'https://all-sports-dao.gitbook.io/all-sports-dao-whitepaper/'} className={`h-full flex items-center justify-center hover:text-[#4070a1] ${currentRoute === "https://www.tensor.trade/trade/the_prem" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                        <FaRegNewspaper />
                    </Link>
                    
                    
                </div>
                <div className='flex items-center gap-2'>
                    <a href='https://magiceden.io/marketplace/the_prem'>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        MagicEden
                        </span>
                    </button>
                    </a>
                    <a href='https://www.tensor.trade/trade/the_prem'>
                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-white focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                        <span className="relative px-5 py-1 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Tensor
                        </span>
                    </button>
                    </a>
                </div>
            </div>
        </footer>
    )
}