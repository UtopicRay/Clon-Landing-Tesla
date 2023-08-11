import './App.css'
import ModelX from './img/Model X.avif'
import ModelY from './img/Model Y.avif'
import Model3 from  './img/Model 3.avif'
import ModelS from './img/Model S.avif'
import SolarPanels from './img/SolarPanels.avif'
import SolarRoof from './img/SolarRoof.avif'
import Powerwall  from  './img/Powerwall.avif'
import {LandingHeader} from "./Components/landing-header.jsx";
import {LandingSection} from "./Components/LandingSection.jsx";
import {LandingInit} from "./Components/LandingInit.jsx";

function App() {
    return (<>
        <LandingHeader/>
        <main className='snap-y snap-mandatory relative h-screen w-full overflow-auto'>
            <LandingInit/>
            <LandingSection title='Model 3' subtitle='Starting at $32,740'
                            img={Model3} firstAncor='Explore Inventory' SecondAncor='Custom Order'/>
            <LandingSection title='Model Y'  subtitle='Starting at $40,240'
                            img={ModelY} firstAncor='Explore Inventory' SecondAncor='Custom Order'/>
            <LandingSection title='Model S' subtitle='Explore inventory'
                            img={ModelS} firstAncor='Custom Order' SecondAncor={`Drive Demo`}/>
            <LandingSection title='Model X' subtitle='Explore inventory'
                            img={ModelX} firstAncor={`Custom Order`} SecondAncor={`Demo Drive`}/>
            <LandingSection title='Solar Panels' subtitle='Schedule a Virtual Consultation'
                            img={SolarPanels} firstAncor={`Order Now`} SecondAncor={`Learn More`}/>
            <LandingSection title='Solar Roof' subtitle='Produce Clean Energy From Your Roof '
                            img={SolarRoof} firstAncor={`Order Now`} SecondAncor={`Learn More`}/>
            <LandingSection title='Powerwall' subtitle=''
                            img={Powerwall} firstAncor={`Order Now`} SecondAncor={`Learn More`}/>
        </main>
    </>)
}

export default App
