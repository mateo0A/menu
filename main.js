let activar=document.querySelectorAll(".abrir_menu")
let trans=document.querySelector(".nav")
activar.forEach(element => {
    element.addEventListener("click",()=>{
        trans.classList.toggle("visible")
    })
});