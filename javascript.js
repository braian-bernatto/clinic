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