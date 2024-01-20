'use client'

import Image from 'next/image'
import logo from '../../public/logo.png'
import { SelectProfile } from '@/components/apps-components/SelectProfile'
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FootballNavbar() {

    const currentRoute = usePathname();

    return (
        <div className='hidden lg:flex h-16 2xl:h-16 px-8 2xl:px-12 bg-black items-center justify-between'>
            <div className='h-full flex items-center gap-8 text-base text-[#A0A8B1] 2xl:text-base'>
                <Link href={'/football'} className={`h-full flex items-center justify-center border-t-2 hover:border-primary hover:text-[#4070a1] ${currentRoute === "/football" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                    <p>Matches</p>
                </Link>
                <Link href={'/football/trade'} className={`h-full flex items-center justify-center border-t-2 hover:border-primary hover:text-[#4070a1] ${currentRoute === "/football/trade" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                    <p>Trade</p>
                </Link>
                <Link href={'/football/staking'} className={`h-full flex items-center justify-center border-t-2 hover:border-primary hover:text-[#4070a1] ${currentRoute === "/football/staking" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                    <p>Staking</p>
                </Link>
                <Link href={'/football/rewards'} className={`h-full flex items-center justify-center border-t-2 hover:border-primary hover:text-[#4070a1] ${currentRoute === "/football/rewards" ? "text-[#4070a1] border-primary" : "border-transparent"}`}>
                    <p>Rewards</p>
                </Link>
            </div>
            <h3>The Premier Collection</h3>
            <div className='flex items-center gap-12'>
               
                {/* this is profile image and select div  */}
                <div className='flex items-center gap-2'>
                    <Image src={logo} alt='avatar' height={50} width={50} className='w-10 2xl:w-14 h-10 2xl:h-14 rounded-full object-cover' />
                    {/* <SelectProfile /> */}
                    <p>Dashboard Preview 0.1</p>
                </div>
            </div>
        </div>
    )
}