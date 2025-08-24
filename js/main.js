// Mostrar solo la sección de productos seleccionada
function mostrarCategoria(idCategoria) {
    // Oculta todas las secciones de productos
    const secciones = document.querySelectorAll('.productos > section');
    secciones.forEach(sec => {
        sec.style.display = 'none';
    });
    // Muestra la sección seleccionada
    const seleccionada = document.getElementById(idCategoria);
    if (seleccionada) {
        seleccionada.style.display = 'block';
    }
}

// Oculta todas las secciones al cargar la página
window.onload = function() {
    const secciones = document.querySelectorAll('.productos > section');
    secciones.forEach(sec => {
        sec.style.display = 'none';
    });
};
