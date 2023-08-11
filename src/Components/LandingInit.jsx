import video from "../video/landing-video.webm";

export function LandingInit(){
    return(
        <div className='snap-center'>
            <section className='h-screen w-screen text-center relative overflow-hidden '>
                <div className='h-full flex flex-col'>
                    <header>
                        <h2 className='pt-28 text-5xl text-white'>Experience Tesla</h2>
                        <p className='text-white text-sm'>Schedule a Demo Drive Today</p>
                    </header>
                    <footer className='flex flex-col flex-grow justify-end pb-24'>
                        <div>
                            <a className='text-white text-center border-4 px-28 rounded py-2 font-medium border-solid '
                               href='#'> Demo Drive</a>
                        </div>
                    </footer>
                    <div className='absolute top-0 bottom-0 h-full -z-10'>
                        <video className='object-center object-cover h-screen w-screen' src={video} autoPlay={true}
                               muted={true} loop={true}></video>
                    </div>
                </div>
            </section>
        </div>
    )
}