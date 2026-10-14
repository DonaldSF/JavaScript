function Recomendacion() { 

    const PresupuestoInput = document.getElementById("presupuesto").value; 
    const Comidas = document.getElementById("Comida").value;
    const resultado = document.getElementById("resultado"); 

    if (PresupuestoInput === "") { 
        resultado.innerText = "Por favor,ingresa tu presupuesto"; 
        resultado.style.color = "red"; 
        return; 
    } 


    const presupuesto = parseInt(PresupuestoInput); 
    let Comida = ""; 


    switch (Comidas) { 
        case "Comida rapida": 
            if (presupuesto < 5000) { 
                Comida = "Combo economico"; 
            } else if ( presupuesto >= 5000 && presupuesto <= 10000) { 
                Comida = "Hamburguesa especial"; 
            } else { 
                Comida = "Menu premium"; 
            } 
            break; 
            
        case "Italiana": 
            if (presupuesto < 5000) { 
                Comida = "Porcion de pizza"; 
            } else if (presupuesto >= 5000 && presupuesto <= 10000) { 
                Comida = "Pasta con bebida"; 
            } else { 
                Comida = "Cena italiana completa"; 
            } 
            break; 
            
        case "Costarricense": 
            if (presupuesto < 5000) { 
                Comida = "Casado sencillo"; 
            } else if (presupuesto >= 5000 && presupuesto <= 10000) { 
                Comida = "Casado especial"; 
            } else { 
                Comida = "Parrillada costarricense"; 
            } 
            break; 
            
        case "Asiatica": 
            if (presupuesto < 5000) { 
                Comida = "Arroz cantones"; 
            } else if (presupuesto >= 5000 && presupuesto <= 10000) { 
                Comida = "Combo de sushi"; 
            } else { 
                Comida = "Menu asiatico premium"; 
            } 
            break; 
            
        default: 
            Comida = "comida no reconocidoa"; 
    } 


    resultado.innerText = `Comida recomendada recomendada: ${Comida}`; 
    resultado.style.color = "#2c3e50"; 
}


function reiniciar() {
    document.getElementById("presupuesto").value = "";
    document.getElementById("Comida").selectedIndex = 0;
    const resultado = document.getElementById("resultado");
    resultado.innerText = "";
}





