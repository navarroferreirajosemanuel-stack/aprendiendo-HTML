// Obtener elementos
const sizeRange = document.getElementById('sizeRange');
const miImagen = document.getElementById('miImagen');
const sizeValue = document.getElementById('sizeValue');

// Escuchar cambios en el range
sizeRange.addEventListener('input', function() {
    const newSize = this.value + 'px';
    
    // Actualizar tamaño de la imagen
    miImagen.style.width = newSize;
    miImagen.style.height = newSize;
    
    // Actualizar el valor mostrado
    sizeValue.textContent = this.value;
});
