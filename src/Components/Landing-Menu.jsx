
export function LandingMenu({options}){
  
    return(
            <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-7/12 px-12'>
                {options.map(option =>(
                <div className='flex flex-col justify-center items-center p-8'>
                    <img className='w-full' src={option.img}></img>
                    <h3>{option.title}</h3>
                    <div className='divide-x divide-solid'></div>
                    <div className='flex gap-4 [&>a]: underline [&>a]:text-gray-400 [&>a]:text-sm'>
                        <a className='hover:text-black' href='#'>Learn</a>
                        <a className='hover:text-black' href='#'>Order</a>
                    </div>
                    </div>))}
            </div>        
    )

}