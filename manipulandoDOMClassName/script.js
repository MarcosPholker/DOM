const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosc1 = [...document.getElementsByClassName("c1")]
const cursosc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[0]

cursosc2.map((el)=>{
    el.classList.add("destaque")
})

