import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import logo from '../../public/logo.svg'
import Image from "next/image";
import swapImage from '../../public/swap-image.png';
import { Progress } from "@/components/ui/progress";
import { MdWidgets } from "react-icons/md";
import HolderLeaders from "./HolderLeaders";


export default function RightFootballDiv() {
    return (
        <div className='w-full lg:w-[22%] lg:mt-10 mb-4 2xl:my-12'>

            {/* <div className=''>
                <div className='grid grid-cols-2 mb-4'>
                    <p className="text-primary text-lg font-medium">Live Matches</p>
            
                </div>
                <Widget/>
    </div> */}

            <div className='space-y-2'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <Image src={logo} alt="england" width={24} height={24} />
                        <div className=''>
                            <h4 className="">Leaderboards</h4>
                            <p className="text-xs text-white/50">The Premier Collection - AllSportsDAO</p>
                        </div>
                    </div>
                </div>
                <HolderLeaders />
            </div>

        

            {/* swapping div  */}
           
            <div className="mt-4 relative isolate overflow-hidden bg-orange-600 py-16 sm:py-16 lg:py-16 rounded-md">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl gap-x-8 gap-y-16 lg:max-w-none">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Staking & Swaps</h2>
                            <p className="mt-4 font-semibold text-gray-300">Coming soon...</p>
                          
                            
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}