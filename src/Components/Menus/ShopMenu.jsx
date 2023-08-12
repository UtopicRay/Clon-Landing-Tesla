import Option from '../../moks/Options.json'
import { LandingMenu } from '../Landing-Menu'
export function ShopMenu(){
const options=Option['Shop']
return(
    <div className='snap-center'>
    <section className='flex justify-center items-center'>
        <LandingMenu options={options}/>
         </section>
    </div>
)
}