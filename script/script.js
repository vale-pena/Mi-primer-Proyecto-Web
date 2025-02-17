window.onload = function () {
    let name = " Angie"
    const age = 25;
    let isStudent = true;
    console.log ("Hola, soy la consola");
    console.log("Nombre:" , name)
    console.log("Edad:", age)
    console.log("Es estudiante?", isStudent)
    
    let message = "El/La estudiante" + name + " tiene " + age + " años"

    if(age > 25) {
        console.log (name + " esta muy roco");
    } else if (age === 25) {
        console.log (name + " esta en la edad justa");
    } else {
        console.log (name + " esta en la flor de la vida");
    }
    console.log("Ya termine soy la consola")
    
    let arregloPersonas = ["Jagdish", "Angie", "Dereck", "Allan", "Vale", "Alexa", "Errol"];
    console.log ("Mi lista de personas:", arregloPersonas [6]);
    
    for (let i = 0; i < arregloPersonas.length; i++) {
        console.log ("i va por " + i);
        console.log (arregloPersonas [i] + " esta presente")
    }

    const cajaUno = document.getElementById ("Caja1")
    cajaUno.textContent = message;

};

const themeButton = document.getElementById ("theme-toggle");
themeButton.addEventListener ("click", cambieTema)


function cambieTema () {
    const cajaPadre = document.getElementById("caja-padre");
    cajaPadre.style.backgroundColor = "black";
}