export function LandingFooter({firstAncor,SecondAncor}){
    return(
        <footer className='flex flex-col flex-grow justify-end pb-24'>
                    <div className='flex gap-x-4 mx-auto'>
                        <a className='text-gray-600 text-center  px-20 rounded py-3 font-medium bg-gray-300'
                           href='#'>{firstAncor}</a>
                        <a className='text-white text-center border-gray-900  px-20 rounded py-3 font-medium bg-gray-700 backdrop-opacity-10 '
                           href='#'>{SecondAncor}</a>
                    </div>
        </footer>
    )
}