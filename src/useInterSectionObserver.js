
const observerOption={
    root:null,// para que sea la inicial 
    rootMargin:"'0px",//Para que se active al salir
    threshold:0.9,// Para que se utilice nada mas que salga el 90% de la página siguiente
}
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        const {isIntersecting}=entry
        if(isIntersecting){
            console.log(entry.target.getAttribute("headercolor"))
            document.querySelector('#landing-header').style.color=entry.target.getAttribute("headercolor")
        }
    },observerOption)
})

    const $sections=document.querySelectorAll('.landing-section')
    $sections.forEach((section)=>observer.observe(section))

