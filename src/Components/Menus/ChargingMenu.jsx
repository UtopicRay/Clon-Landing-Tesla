import Option from '../../moks/Options.json'
import { LandingMenu } from '../Landing-Menu'
export function ChargingMenu(){
const options=Option['Charging']
return(
    <div className='snap-center'>
    <section className='flex justify-center items-center divide-x divide-solid'>
        <LandingMenu options={options}/>
        <div className='px-8'>           
            <ul className='flex flex-col gap-y-3'>
                <li><a className=' font-medium hover:underline'>Charging Calculator</a></li>
                <li><a className='font-medium hover:underline'>Trip Panels</a></li>
                <li><a className='font-medium hover:underline'>Supercharger Voting</a></li>
                <li><a className='font-medium hover:underline'>Host a Supercharger</a></li>
                <li><a className='font-medium hover:underline'>Commercial Charging</a></li>
                <li><a className='font-medium hover:underline'>Host Wall Connectors</a></li>
            </ul>
         </div>
         </section>
    </div>
)
}