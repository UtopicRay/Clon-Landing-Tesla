import React from "react";
import { LandingFooter } from "./LandingFooter";

export function LandingSection({title, subtitle, img,firstAncor,SecondAncor}) {
    return (
        <div className='snap-center'>
            <section className='h-screen w-screen text-center relative overflow-hidden '>
                <div className='h-full flex flex-col'>
                    <header>
                        <h2 className='pt-24 text-5xl text-black pb-2'>{title}</h2>
                        <a className={`text-black ${title==='Model S'||title==='Model X'|| title==='Solar Panels'? 'underline': '' }` }>{subtitle}</a>
                        {title==='Model 3'||title==='Model Y'? <p>After Federal Tax Credit </p>:''}
                    </header>
                    <LandingFooter firstAncor={firstAncor} 
                    SecondAncor={SecondAncor}/>
                    <div className='absolute top-0 bottom-0 h-full w-screen -z-10'>
                        <img className='w-full h-full object-center object-cover ' src={img}
                             alt='Foto del Modelo'></img>
                    </div>
                </div>
            </section>
        </div>)
}
