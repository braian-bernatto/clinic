turnos()

function inicio() {
    console.log('se presiono inicio');
    var estado = document.getElementById("inicio");
    estado.style.display = "grid";
    document.getElementById("profesionales_list").style.display = "none";
    document.getElementById("estudios_list").style.display = "none";
    document.getElementById("turnos").style.display = "none";
    document.getElementById("especialidades_list").style.display = "none";
    
}

function especialidades() {
    console.log('se presiono especialidades');
    var estado = document.getElementById("especialidades_list");
    estado.style.display = "grid";
    document.getElementById("profesionales_list").style.display = "none";
    document.getElementById("estudios_list").style.display = "none";
    document.getElementById("turnos").style.display = "none";
    document.getElementById("inicio").style.display = "none";
}
function estudios() {
    console.log('se presiono estudios');
    var estado = document.getElementById("estudios_list");
    estado.style.display = "grid";
    document.getElementById("especialidades_list").style.display = "none";
    document.getElementById("profesionales_list").style.display = "none";
    document.getElementById("turnos").style.display = "none";
    document.getElementById("inicio").style.display = "none";
}
function profesionales() {
    console.log('se presiono profesionales');
    var estado = document.getElementById("profesionales_list");
    estado.style.display = "grid";
    document.getElementById("especialidades_list").style.display = "none";
    document.getElementById("estudios_list").style.display = "none";
    document.getElementById("turnos").style.display = "none";
    document.getElementById("inicio").style.display = "none";
}
function turnos() {
    console.log('se presiono turnos');
    var estado = document.getElementById("turnos");
    estado.style.display = "grid";
    document.getElementById("especialidades_list").style.display = "none";
    document.getElementById("estudios_list").style.display = "none";
    document.getElementById("profesionales_list").style.display = "none";
    document.getElementById("inicio").style.display = "none";
}

function t_formulario1() {
    var estado = document.getElementById("turnos_formulario");
    estado.style.display = "flex";
    document.getElementById("turnos_formulario2").style.display = "none";
    document.getElementById("turnos_formulario3").style.display = "none";
    document.getElementById("turnos_formulario4").style.display = "none";
}

function t_formulario2() {
    var estado = document.getElementById("turnos_formulario2");
    estado.style.display = "flex";
    document.getElementById("turnos_formulario").style.display = "none";
    document.getElementById("turnos_formulario3").style.display = "none";
    document.getElementById("turnos_formulario4").style.display = "none";


    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    divprog[current - 1].classList.add("active");
    current += 1;
}

function t_formulario3() {
    var estado = document.getElementById("turnos_formulario3");
    estado.style.display = "flex";
    document.getElementById("turnos_formulario").style.display = "none";
    document.getElementById("turnos_formulario2").style.display = "none";
    document.getElementById("turnos_formulario4").style.display = "none";

    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    divprog[current - 1].classList.add("active");
    current += 1;
}

function t_formulario4() {
    var estado = document.getElementById("turnos_formulario4");
    estado.style.display = "flex";
    document.getElementById("turnos_formulario").style.display = "none";
    document.getElementById("turnos_formulario2").style.display = "none";
    document.getElementById("turnos_formulario3").style.display = "none";

    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    divprog[current - 1].classList.add("active");
    current += 1;
}

const progressText = document.querySelectorAll(".step p");
const bullet = document.querySelectorAll(".step .bullet");
const progressCheck = document.querySelectorAll(".step i");
const divprog = document.querySelectorAll(".step");
let max = 4;
let current = 1;




// const next_btn_form1 = document.querySelector(".form1_next");

// next_btn_form1.addEventListener("click", function(){
//     var estado = document.getElementById("turnos_formulario2");
//     estado.style.display = "flex";
//     document.getElementById("turnos_formulario").style.display = "none";
// });