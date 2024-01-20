interface THolders {
    owner: string;
    tokens: number;
}

async function getTopHolders() {
    try {
        const url = 'https://api-mainnet.magiceden.dev/v2/collections/the_prem/holder_stats';
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.topHolders;

    } catch (error) {
        console.error('Failed to fetch top holders:', error);
    }
}

export default async function HolderLeaders() {
    const data = await getTopHolders();
    return (
        <div className='w-full text-xs space-y-2 2xl:space-y-2.5 rounded-xl py-3 px-2.5 2xl:p-4 bg-black'>
            {/* this is heading  */}
            <div className='flex items-center mb-2.5'>
                <div className='w-1/2'>
                    <p>Wallet</p>
                </div>

                <div className='w-1/2 grid justify-items-center grid-cols-2'>
                    <p>Badges</p>
                    <p>$asd</p>
                </div>
            </div>

            {data.slice(0, 20).map((topHolders: THolders) => (
                <div key={topHolders.owner.substring(0, 7)} className='flex items-center font-light'>
                    <div className='w-1/2 flex items-center gap-1'>
                        <p>{topHolders.owner.substring(0, 7)}...</p>
                    </div>

                    <div className='w-1/2 grid justify-items-center grid-cols-2'>
                        <p>{topHolders.tokens}</p>
                        <p>tbc</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
