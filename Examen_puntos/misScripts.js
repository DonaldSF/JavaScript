function recomendacion() { 
    const PresupuestoInput = document.getElementById("presupuesto").value; 
    const Actividades = document.getElementById("Actividad").value; 
    const PersonasInput = document.getElementById("personas").value; 
    const resultado = document.getElementById("resultado"); 

    if (PresupuestoInput === "" || PersonasInput === "") { 
        resultado.innerText = "Por favor, ingresa tu presupuesto y la cantidad de personas"; 
        resultado.style.color = "red"; 
        return; 
    } 

    const presupuesto = parseInt(PresupuestoInput); 
    const personas = parseInt(PersonasInput); 
    let descuento = 0; 

    if (personas >= 5 && personas <= 8) { 
        descuento = 0.10; 
    } else if (personas >= 9) { 
        descuento = 0.15; 
    } 


    const montoDescuento = presupuesto * descuento;
    const presupuestoFinal = presupuesto - montoDescuento; 

    let Actividad = ''; 
    switch (Actividades) { 
        case "Deportes": 
            if (presupuestoFinal < 8000)  
                Actividad = "Caminata recreativa";  
            else if (presupuestoFinal >= 8000 && presupuestoFinal <= 15000)  
                Actividad = "Alquiler de cancha";  
            else  
                Actividad = "Actividad deportiva especializada";  
            break; 

        case "Entretenimiento": 
            if (presupuestoFinal < 8000) 
                Actividad = "Actividad economica";  
            else if (presupuestoFinal >= 8000 && presupuestoFinal <= 15000)  
                Actividad = "Entrada al cine"; 
            else  
                Actividad = "Concierto o espectaculo";  
            break; 

        case "Turismo": 
            if (presupuestoFinal < 8000) 
                Actividad = "Visita al parque publico";
            else if (presupuestoFinal >= 8000 && presupuestoFinal <= 15000) 
                Actividad = "Tour local";
            else  
                Actividad = "Excursion de dia completo";
            break; 

        case "Actividades familiares": 
            if (presupuestoFinal < 8000)  
                Actividad = "Picnic familiar";
            else if (presupuestoFinal >= 8000 && presupuestoFinal <= 15000)
                Actividad = "Salida recreativa"; 
            else 
                Actividad = "Parque temanico o actividad especial";
            break; 
        default: 
            Actividad = "Actividad no reconocida"; 
    } 

    const porcentajeDesc = descuento * 100; 
    
    resultado.innerText = `Actividad recomendada: ${Actividad}\n` +
                        `Descuento aplicado: ${porcentajeDesc}%\n` +
                        `Monto del descuento: $${montoDescuento}\n` +
                        `Monto final: $${presupuestoFinal}`; 
    resultado.style.color = '#2c3e50'; 
}

function reiniciar() { 
    document.getElementById("presupuesto").value = ""; 
    document.getElementById("personas").value = ""; 
    document.getElementById("Actividad").selectedIndex = 0; 
    const resultado = document.getElementById("resultado"); 
    resultado.innerText = ""; 
}



