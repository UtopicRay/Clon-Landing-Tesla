import { LandingMenu } from "../Landing-Menu";
import Option from '../../moks/Options.json'
export function VehiclesMenu(){
    const options=Option['Vehicles']
return(
    <div className='snap-center'>
        <section className='flex justify-center items-center divide-x divide-solid'>
            <LandingMenu options={options}/>
            <div className='px-8'>           
                <ul className='flex flex-col gap-y-3'>
                    <li><a className=' font-medium hover:underline'>Inventory</a></li>
                    <li><a className='font-medium hover:underline'>Used Car</a></li>
                    <li><a className='font-medium hover:underline'>Demo Drive</a></li>
                    <li><a className='font-medium hover:underline'>Trade-in</a></li>
                    <li><a className='font-medium hover:underline'>Compare</a></li>
                    <li><a className='font-medium hover:underline'>Cyberstruck</a></li>
                    <li><a className='font-medium hover:underline'>Roadster</a></li>
                </ul>
             </div>
             </section>
        </div>
)
}