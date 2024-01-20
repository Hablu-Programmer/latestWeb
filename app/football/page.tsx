import LeftFootballDiv from './LeftFootballDiv';
import MiddleFootballDiv from './MiddleFootballDiv';
import RightFootballDiv from './RightFootballDiv';

export default function Football() {
    return (
        <>
            <div className='hidden lg:flex flex-col lg:flex-row gap-4 2xl:gap-8 mx-2 lg:mx-0'>
                {/* this is left div for Matches  */}
                <LeftFootballDiv />
                {/* this is main div for showing content */}
                <MiddleFootballDiv />
                {/* this is right Football div for trending now matches  */}
                <RightFootballDiv />
            </div>

            <div className='flex lg:hidden flex-col lg:flex-row gap-4 2xl:gap-8 mx-2 lg:mx-0'>
                {/* this is main div for showing content */}
                <MiddleFootballDiv />
                {/* this is left div for Matches  */}
                <LeftFootballDiv />
                {/* this is right Football div for trending now matches  */}
                <RightFootballDiv />
            </div>
        </>
    )
}