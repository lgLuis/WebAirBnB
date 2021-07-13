// BOTON FLOTANTE EN EL FOOTER

document.addEventListener("DOMContentLoaded", ()=>{
    //      HEADER TRANSICION IMAGEN
    const imagenHero=document.querySelector(".hero");
    //necesito 2 variables
    let i =0;
    let t =0;

    //Imagenes de fondo
    const imagenes=["arriba2.jpg", "arriba.jpg"]

    setInterval(()=>{
        imagenHero.style.backgroundPositionX="-"+t+"px";
        if(t>20){
            t=0;
            imagenHero.style.backgroundImage="url(../img/"+imagenes[i]+")";
            if(i===imagenes.length -1) {
                i=0;
            }else{
                i++;
            }
        // }else{
        //     t++;
         }

        // t+=1;
        // console.log(t);
        t++;
    },250);



    //          FOOTER BOTON
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