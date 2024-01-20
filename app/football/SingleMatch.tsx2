import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export interface TSingleMatch {
    match: {
        when: string;
        team1: { teamName: string, teamScore: number, firstHalfScore: number };
        team2: { teamName: string, teamScore: number, firstHalfScore: number };
        time: string;
        venue: string;
        attendance: string;
    }
}




export default function SingleMatch({ match }: any) {
    const dateObject = new Date(match?.fixture?.date);

    // Extract hour and minute
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();

    // Format the result as HH:mm
    const formattedTime = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2);

    return (
        
        <Link href={'/'} className='group text-white/50 w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-4 bg-black hover:bg-white hover:text-black rounded 2xl:rounded-md p-4'>
            {/* this is match vs div  */}
            <div className='w-full lg:w-fit flex items-center justify-between lg:justify-normal gap-4 2xl:gap-8'>
                {/* first team image and name div  */}
                <div className='flex items-center gap-2 lg:gap-1 2xl:gap-2'>
                    <Image src={match?.teams?.home?.logo} alt="Bercelona team" width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                    <p className="text-sm 2xl:text-base">{match?.teams?.home?.name}</p>
                </div>
                {/* vs two team div  */}
                <div className='flex flex-col justify-center items-center'>
                    <span className="w-[1px] h-3 bg-slate-700"></span>
                    <span className="text-sm leading-[16px]">VS</span>
                    <span className="w-[1px] h-3 bg-slate-700"></span>
                </div>
                {/* second team image and name div */}
                <div className='flex items-center gap-2 lg:gap-1 2xl:gap-2'>
                    <Image src={match?.teams?.away?.logo} alt="Bercelona team" width={45} height={45} className="w-8 2xl:w-11 h-8 2xl:h-11 rounded-full" />
                    <p className="text-sm 2xl:text-base">{match?.teams?.away?.name}</p>
                </div>
            </div>

            <div className='w-full lg:w-fit flex items-center justify-between lg:justify-normal gap-2 lg:gap-4 2xl:gap-8'>
                {/* this is time and location div  */}
                <div className='flex items-center gap-2 lg:gap-4 2xl:gap-8'>
                    <div className='flex items-center gap-1 2xl:gap-2'>
                        <MdAccessTime className="text-base 2xl:text-lg" />
                        <p className="text-sm 2xl:text-base">{formattedTime}</p>
                    </div>

                    <div className='flex items-center gap-1 2xl:gap-2'>
                        <IoLocationOutline className="text-base 2xl:text-lg" />
                        <p className="text-sm 2xl:text-base">{match?.fixture?.venue?.name}</p>
                    </div>
                </div>

                {/* this is favourites and view details div  */}
                <div className='flex items-center gap-2 lg:gap-4  2xl:gap-8'>
                    <IoMdHeart className="group-hover:text-primary" />
                    <div className="flex items-center gap-1">
                        <p className="text-sm">View Details</p>
                        <FaArrowRight className="group-hover:text-primary" />
                    </div>
                </div>
            </div>
        </Link>
    )
}