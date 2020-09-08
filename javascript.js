function especialidades() {
    console.log('se presiono especialidades');
    var estado = document.getElementById("especialidades_list");
    estado.style.display = "grid";
    document.getElementById("profesionales_list").style.display = "none";
    document.getElementById("estudios_list").style.display = "none";
}
function estudios() {
    console.log('se presiono estudios');
    var estado = document.getElementById("estudios_list");
    estado.style.display = "grid";
    document.getElementById("especialidades_list").style.display = "none";
    document.getElementById("profesionales_list").style.display = "none";
}
function profesionales() {
    console.log('se presiono profesionales');
    var estado = document.getElementById("profesionales_list");
    estado.style.display = "grid";
    document.getElementById("especialidades_list").style.display = "none";
    document.getElementById("estudios_list").style.display = "none";
}


