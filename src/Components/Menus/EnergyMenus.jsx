import Option from '../../moks/Options.json'
import { LandingMenu } from '../Landing-Menu'
export function EnergyMenus(){
const options=Option['Energy']
return(
    <div className='snap-center'>
    <section className='flex justify-center items-center divide-x divide-solid'>
        <LandingMenu options={options}/>
        <div className='px-8'>           
            <ul className='flex flex-col gap-y-3'>
                <li><a className=' font-medium hover:underline'>Utilies</a></li>
                <li><a className='font-medium hover:underline'>Comercials</a></li>
                <li><a className='font-medium hover:underline'>Schedule a Consultation</a></li>
            </ul>
         </div>
         </section>
    </div>
)
}