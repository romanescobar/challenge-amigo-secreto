// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo");

    if (inputNombre.value === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(inputNombre.value);
    inputNombre.value = "";

    mostrarLista();
}

function mostrarLista() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Recorrer el array y agregar cada amigo como un <li>
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
