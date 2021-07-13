// BOTON FLOTANTE EN EL FOOTER

document.addEventListener("DOMContentLoaded", ()=>{
    const btnFlotante = document.querySelector(".btn-flotante");  // . es una clase 
    // console.log(btnFlotante);
    btnFlotante.addEventListener("click", (e)=>{
        // alert("funcionando");
        e.preventDefault();
        //Prevenimos el default pero ejecutamos el código
        const footer =document.querySelector("#footer");
        console.log(footer.classList); //Revisamos que exista una clase
        if(footer.classList.contains("activo")){
            footer.classList.remove("activo");
            btnFlotante.classList.remove("activo");
            btnFlotante.innerText="Idioma y moneda";
        }else{
            footer.classList.add("activo");
            btnFlotante.classList.add("activo");
            btnFlotante.innerText="X Cerrar";
        }
    })
});