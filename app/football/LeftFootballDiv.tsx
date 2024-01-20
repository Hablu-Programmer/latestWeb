import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import logo from '../../public/logo.png'
import LeagueCard from "./LeagueCard";
import Gameweek from "./Gameweek";
export default function LeftFootballDiv() {
    return (
        <div className='lg:w-[22%] lg:ml-4 lg:mt-10 mb-4 2xl:my-12'>
    
            <div className='w-full flex justify-between gap-2 2xl:gap-4 border border-primary rounded-md 2xl:rounded-lg p-3.5 2xl:p-4'>
                <p className="text-primary text-lg font-medium">Next Gameweek: <Gameweek /></p>
            </div>
            {/* this is premier league div  */}
            <div className='my-6 2xl:my-10 space-y-2'>
                <div className='flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-2'>
                        <Image src="https://media.api-sports.io/football/leagues/39.png" alt="england" width={24} height={24} />
                        <div className=''>
                            <h4 className="">Premier League</h4>
                            <p className="text-xs text-white/50">England</p>
                        </div>
                    </div>
                    <IoIosArrowForward />
                </div>
                <LeagueCard />
            </div>

            {/* this is leader board div  */}

        </div>
    )
}