import Image from "next/image";
import SingleMatch, { TSingleMatch } from "./SingleMatch";
import background from '../../public/background.png'
import { MdAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


async function getLeagueFixers() {
    const res = await fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023&next=10', {
        headers: {
            "X-RapidAPI-Key": '19978d8ad8msh966959f511c0cedp1fbbacjsnd4ed69eb1e78',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    })

    if (!res.ok) {
        // throw new Error('Failed to fetch data')
        console.log("res", res);
    }

    return res.json()
}

export default async function MiddleFootballDiv() {
    const { response } = await getLeagueFixers();

    const dateObject = new Date(response[0]?.fixture?.date);

    // Extract hour and minute
    const hour = dateObject.getHours();
    const minute = dateObject.getMinutes();

    // Format the result as HH:mm
    const formattedTime = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2);

    return (
        <div className='w-full lg:w-[56%] my-6 2xl:my-8'>
            {/* top div contain banner and match  */}

            <div className="relative isolate overflow-hidden bg-violet-950 py-16 sm:py-16 lg:py-16 rounded-md">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <p className="mt-4 font-semibold text-gray-300">Next Fixture</p>
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{response[0]?.teams?.home?.name}</h2>
                            <p className="text-lg leading-8 text-gray-300">VS</p>
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{response[0]?.teams?.away?.name}</h2>
                            <div className='flex items-center gap-4 2xl:gap-8 py-2'>
                                <div className='flex items-center gap-1 2xl:gap-2'>
                                    <MdAccessTime className="text-base 2xl:text-lg" />
                                    <p className="text-sm 2xl:text-base">{formattedTime}</p>
                                </div>

                                <div className='flex items-center gap-1 2xl:gap-2'>
                                    <IoLocationOutline className="text-base 2xl:text-lg" />
                                    <p className="text-sm 2xl:text-base">{response[0]?.fixture?.venue?.name}</p>
                                </div>
                            </div>
                            
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <Image src={response[0]?.teams?.home?.logo} alt={response[0]?.teams?.home?.name} className="w-16 lg:w-20 2xl:w-24 h-16 lg:h-20 2xl:h-24 rounded-sm object-cover" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <Image src={response[0]?.teams?.away?.logo} alt={response[0]?.teams?.home?.name} className="w-16 lg:w-20 2xl:w-24 h-16 lg:h-20 2xl:h-24 rounded-sm object-cover" />
                                </div>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                    className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    />
                </div>
            </div>


            {/* this is filter div or latest show div  */}
            <div className='flex items-center justify-between gap-6 py-4 2xl:py-6'>
                <h4>Upcoming Fixtures</h4>
                <div>
                    <span></span>

                </div>
            </div>

            {/* this is matches div or favorite show div  */}
            <div className='flex flex-col gap-2 2xl:gap-4'>
                {
                    response?.slice(0, 10).map((match: any) => (
                        <SingleMatch key={match.fixture.id} match={match} />
                    ))
                }
            </div>
        </div>
    )
}