// Funciones y lógica para el filtro de búsqueda y mostrar productos
(function(){
	let categoriaActual = 'consolas';
	let inputBusqueda = null;
	let mensajeNoResultados = null;
	let secciones = null;

	function filtrarProductos() {
		const query = inputBusqueda.value.toLowerCase();
		let algunoVisible = false;
		const seleccionada = document.getElementById(categoriaActual);
		if (seleccionada) {
			const productos = seleccionada.querySelectorAll('.producto');
			productos.forEach(prod => {
				const nombre = prod.querySelector('h4')?.textContent.toLowerCase() || '';
				if (query === '' || nombre.includes(query)) {
					prod.style.display = '';
					algunoVisible = true;
				} else {
					prod.style.display = 'none';
				}
			});
		}
		mensajeNoResultados.style.display = algunoVisible ? 'none' : '';
	}

	window.initBusqueda = function(_categoriaActual, _secciones) {
		categoriaActual = _categoriaActual;
		secciones = _secciones;
		const formBusqueda = document.querySelector('.busqueda');
		mensajeNoResultados = document.createElement('div');
		mensajeNoResultados.textContent = 'No se encontraron productos.';
		mensajeNoResultados.style.display = 'none';
		mensajeNoResultados.className = 'mensaje-no-resultados';
		const productosSection = document.querySelector('.productos');
		if (productosSection) productosSection.parentNode.insertBefore(mensajeNoResultados, productosSection.nextSibling);
		if (formBusqueda) {
			inputBusqueda = formBusqueda.querySelector('input[name="q"]');
			formBusqueda.addEventListener('submit', function(e) {
				e.preventDefault();
				filtrarProductos();
			});
			inputBusqueda.addEventListener('input', filtrarProductos);
		}
		window.filtrarProductos = filtrarProductos;
	};
	window.setCategoriaBusqueda = function(idCategoria) {
		categoriaActual = idCategoria;
		if (inputBusqueda) filtrarProductos();
	};
})();
