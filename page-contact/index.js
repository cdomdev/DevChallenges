
// Obtén referencias a los elementos del DOM
const openModalBtn = document.getElementById("openModal");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");


// Mostrar el modal cuando se hace clic en el botón
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
    mostrarNombre();
});

// Cerrar el modal cuando se hace clic en la "X" o fuera del modal
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

function mostrarNombre(){
    let nombre = document.getElementById("name").value;
    let salida = document.getElementById("text-name");
    salida.textContent = `Hola  ${nombre}`;
}

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

