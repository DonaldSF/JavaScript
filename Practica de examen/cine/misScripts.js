function generarRecomendacion() { 

    const edadInput = document.getElementById("edad").value; 
    const genero = document.getElementById("Genero").value;
    const resultado = document.getElementById("resultado"); 


    if (edadInput === "") { 
        resultado.innerText = "Por favor, ingresa tu edad."; 
        resultado.style.color = "red"; 
        return; 
    } 


    const edad = parseInt(edadInput); 
    let pelicula = ""; 


    switch (genero) { 
        case "Drama": 
            if (edad < 13) { 
                pelicula = "Casablanca"; 
            } else if (edad >= 13 && edad <= 15) { 
                pelicula = "The Shawshank Redemption"; 
            } else { 
                pelicula = "Taxi Driver"; 
            } 
            break; 
            
        case "Comedia": 
            if (edad < 13) { 
                pelicula = "Back to the Future"; 
            } else if (edad >= 13 && edad <= 15) { 
                pelicula = "The Truman Show"; 
            } else { 
                pelicula = "The Wolf of Wall Street"; 
            } 
            break; 
            
        case "Musical": 
            if (edad < 13) { 
                pelicula = "La La Land"; 
            } else if (edad >= 13 && edad <= 15) { 
                pelicula = "Les Misérables"; 
            } else { 
                pelicula = "The Rocky Horror Picture Show"; 
            } 
            break; 
            
        case "Crimen": 
            if (edad < 13) { 
                pelicula = "No hay opciones para esta edad"; 
            } else if (edad >= 13 && edad <= 15) { 
                pelicula = "El Secreto de sus Ojos"; 
            } else { 
                pelicula = "The Godfather"; 
            } 
            break; 
            
        default: 
            pelicula = "Género no reconocido"; 
    } 


    resultado.innerText = `Película recomendada: ${pelicula}`; 
    resultado.style.color = "#2c3e50"; 
}


function reiniciar() {
    document.getElementById("edad").value = "";
    document.getElementById("Genero").selectedIndex = 0;
    const resultado = document.getElementById("resultado");
    resultado.innerText = "";
}