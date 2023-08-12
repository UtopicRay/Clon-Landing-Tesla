export function DiscoverMenu(){
    return(
        <div className="snap-center">
        <section className="flex flex-wrap justify-center items-center">
        <div className="p-8">
        <ul className='flex flex-col gap-y-6'>
                <li><h3 className=' font-medium text-gray-600'>Resorces</h3></li>
                <li><a className='font-medium hover:underline'>Demo Drive</a></li>
                <li><a className='font-medium hover:underline'>Insurance</a></li>
                <li><a className='font-medium hover:underline'>Video Guides</a></li>
                <li><a className='font-medium hover:underline'>Customer Stories</a></li>
                <li><a className='font-medium hover:underline'>Events</a></li>
            </ul>
        </div>
        <div className="p-8">
        <ul className='flex flex-col gap-6 '>
        <li><h3 className=' font-medium text-gray-600 '>Location Services</h3></li> 
                <li><a className='font-medium hover:underline'>Find Off</a></li>
                <li><a className='font-medium hover:underline'>Trip Planner</a></li>
                <li><a className='font-medium hover:underline'>Find a Collision Center</a></li>
                <li><a className='font-medium hover:underline'>Find a Certified Installer</a></li>
            </ul>
        </div>
        <div className="p-8">
        <ul className='flex flex-col gap-6'>
        <li><h3 className=' font-medium text-gray-600'>Company</h3></li>
                <li><a className='font-medium hover:underline'>About</a></li>
                <li><a className='font-medium hover:underline'>Careers</a></li>
                <li><a className='font-medium hover:underline'>Investor Relations</a></li>
            </ul>
        </div>
        </section>
        </div>)
}