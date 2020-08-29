const skillContainer = document.getElementById('skill')

const skillSvg=[
    {name:"aws",size:60},
    {name:"bootstrap",size:100},
    {name:"dart",size:100},
    {name:"figma",size:150},
    {name:"firebase",size:180},
    {name:"flutter",size:140},
    {name:"git",size:160},
    {name:"git1",size:160},
    {name:"htmlcss",size:200},
    {name:"illustrator",size:60},
    {name:"javascript",size:200},
    {name:"microservices",size:40},
    {name:"node",size:100},
    {name:"photoshop",size:140},
    {name:"python",size:60},
    {name:"react",size:240},
    {name:"redux",size:180},
    {name:"responsive",size:100},
    {name:"sass",size:100},
    {name:"tailwind",size:200},
    {name:"typescript",size:100},
    {name:"vsc",size:160},
    {name:"vue",size:60},
    {name:"wordpress",size:120},
    {name:"xd",size:200},
]
loadSkill()


function loadSkill(){
    for(let i=0;i<skillSvg.length;i++){
        const randomTop = Math.floor(Math.random() * 500)
        const randomLeft = Math.floor(Math.random() * 1000)
        const skillCircle=document.createElement('div')
        const skillImage=document.createElement('img')
        skillCircle.classList.add("skill__circle")
        skillImage.classList.add("skill__image")
        skillCircle.style.width=`${skillSvg[i].size}px`
        skillCircle.style.height=`${skillSvg[i].size}px`
        skillCircle.style.backgroundColor=skillSvg[i].bg
        skillCircle.style.left=`${randomLeft}px`
        skillCircle.style.top=`${randomTop}px`
        skillImage.src=`img/stack/${skillSvg[i].name}.svg`
        skillImage.alt=skillSvg[i].name
        skillContainer.appendChild(skillCircle)
        skillCircle.appendChild(skillImage) 
        
}

}

