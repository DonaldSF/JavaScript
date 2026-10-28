const notas = [7, 4, 8, 9, 6];

document.addEventListener("DOMContentLoaded", () => {
    listarNotas();
});

function listarNotas() {
    const listaUL = document.getElementById("lista-notas");
    if (!listaUL) return; 
    
    listaUL.innerHTML = ""; 

    notas.forEach(nota => {
        const li = document.createElement("li");
        li.textContent = nota;
        listaUL.appendChild(li);
    });
}


function calcularPromedio() {
    const totalNotas = notas.length;
    if (totalNotas === 0) return;

    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = suma / totalNotas;


    document.getElementById("res-promedio").textContent = promedio.toFixed(1);
}


function notaMasAlta() {
    if (notas.length === 0) return;

    const maxima = Math.max(...notas);
    document.getElementById("res-maxima").textContent = maxima;
}


function hayAplazados() {

    const tieneAplazados = notas.some(nota => nota < 4);
    

    const respuesta = tieneAplazados ? "Sí" : "No";
    document.getElementById("res-aplazado").textContent = respuesta;
}
