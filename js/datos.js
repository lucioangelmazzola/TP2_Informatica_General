const textos = [
  "Cuando era niño, Tim Burton solía enterrar insectos muertos en el jardín y hacer pequeños rituales fúnebres por diversión.",

"En su adolescencia, pintaba en las paredes de su habitación criaturas sombrías que luego inspirarían sus personajes.",

"Trabajó brevemente en Disney, pero fue despedido por tener un estilo ‘demasiado oscuro’ para la compañía.",

"Le fascinan los cementerios; ha dicho que los considera lugares tranquilos y llenos de belleza.",

"Johnny Depp es uno de sus amigos más cercanos y su actor fetiche, con quien ha colaborado más de ocho veces.",

"Su relación con Helena Bonham Carter comenzó durante el rodaje de El planeta de los simios y duró más de una década.",

"Vive en una casa llena de objetos extraños, muñecos y figuras que ha coleccionado desde joven.",

"Prefiere dibujar con lápiz y tinta negra, casi nunca usa colores vivos en sus bocetos.",

"Su amor por Halloween es tan grande que a veces decora su casa con motivos de esa fecha todo el año.",

"De niño, se sentía aislado en Burbank y pasaba horas viendo películas de terror clásicas en la televisión.",

"Su primera película casera, The Island of Doctor Agor, la hizo con 13 años y marionetas hechas por él mismo.",

"No le gusta dar entrevistas largas ni hablar demasiado de su vida privada.",

"Durante su tiempo en Disney, hizo un corto llamado Vincent en homenaje a Vincent Price, su ídolo.",

"Guarda muchos de sus dibujos originales en carpetas personales y rara vez los muestra al público.",

"Dice que crea mejor cuando se siente incómodo o fuera de lugar.",

"Le encanta escuchar música de Danny Elfman incluso fuera de sus películas, por pura inspiración.",

"Rara vez mira sus propias películas una vez terminadas, porque no soporta ver los errores que detecta después.",

"Su estilo combina lo macabro con lo tierno, inspirado tanto por el expresionismo alemán como por los cuentos infantiles.",

"Tiene una colección de juguetes antiguos que usa como referencia para crear personajes nuevos.",

"Ha dicho que nunca planea demasiado sus películas: prefiere dejar que los personajes le ‘hablen’ mientras dibuja."
];

let indice = 0; 

function cambiarTexto() {

  const textoElemento = document.getElementById("texto");

  textoElemento.style.opacity = 0; 

  setTimeout(() => {

    textoElemento.textContent = textos[indice]; 
    textoElemento.style.opacity = 1; 
    indice = (indice + 1) % textos.length; 

  }, 300);

}


document.getElementById("botonCambiar").addEventListener("click", cambiarTexto);