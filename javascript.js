function especialidades() {
    console.log('se presiono especialidades');
    console.log(document.getElementById("especialidades_list").style.display);
    var estado =  document.getElementById("especialidades_list");

        estado.style.display = "grid";
        document.getElementById("profesionales_list").style.display = "none";
        console.log(document.getElementById("especialidades_list").style.display);
} 
function profesionales() {
    console.log('se presiono profesionales');
    console.log(document.getElementById("profesionales_list").style.display);
    var estado =  document.getElementById("profesionales_list");

        estado.style.display = "grid";
        // document.getElementById("especialidades_list").style.display = "none";
    console.log(document.getElementById("profesionales_list").style.display);
   } 

   