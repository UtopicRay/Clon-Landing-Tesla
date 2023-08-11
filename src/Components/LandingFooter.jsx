export function LandingFooter({firstAncor,SecondAncor,title}){
    return(
        <footer className='flex flex-col flex-grow justify-end pb-20'>
                    <div className='flex gap-x-5 mx-auto justify-center items-center [&&>a]:px-20 [&&>a]:py-2'>
                        <a className={`text-center rounded font-medium text-gray-700 ${title!=='Accesories'?' bg-gray-50/50':'bg-white'}`}
                           href='#'>{firstAncor}</a>
                           {title!=='Accesories'?
                           <a className='text-white text-center border-gray-900   rounded font-medium bg-gray-950/50 backdrop-opacity-10 '
                           href='#'>{SecondAncor}</a>:''}
                    </div>
        </footer>
    )
}