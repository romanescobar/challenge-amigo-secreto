// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let ingresarNombre = document.getElementById("amigo");
    let nombre = ingresarNombre.value.trim(); // Elimina espacios al inicio y final

    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }

    amigos.push(nombre);
    ingresarNombre.value = ""; // Limpiar el campo de entrada

    mostrarLista();
}

// Función para mostrar la lista de amigos en la página
function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizarla

    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        item.classList.add("name-item"); // Agrega clase CSS
        listaAmigos.appendChild(item);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado previo

    let itemResultado = document.createElement("li");
    itemResultado.textContent = `🎉 El amigo secreto es: ${amigoSorteado} 🎉`;
    itemResultado.classList.add("result-item"); // Agrega clase CSS
    resultado.appendChild(itemResultado);
}
