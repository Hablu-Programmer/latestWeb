async function getME() {
    const res = await fetch('https://api-mainnet.magiceden.dev/v2/collections/the_prem/stats', {
        cache: "no-cache"
    })

    return res.json()
}



export default async function MEFloor() {
    const data = await getME();
    return (
        <div className='w-full text-xs space-y-2 2xl:space-y-2.5 rounded-xl py-3 px-2.5 2xl:p-4 bg-black'>            

            {/* this is another divs  */}
                <div key='floor' className='flex items-center font-light'>
                    <div className='flex items-center gap-1'>
                            <p>The Premier Collection | &nbsp;	
                            <span className="font-semibold ">Floor Price:</span><span className="text-primary font-medium"> {data.floorPrice / 1000000000} </span> SOL &nbsp;	
                            <span className="font-semibold ">Listed:</span> <span className="text-primary font-medium"> {data.listedCount} </span>/ 3000</p>
                    </div>
                </div>
        </div>
    )
}