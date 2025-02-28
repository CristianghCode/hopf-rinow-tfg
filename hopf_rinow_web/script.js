function saveCode() {
    let code = document.getElementById('code_area').value;
    localStorage.setItem('lean_code', code);
    alert('Código guardado');
}

function saveNotes() {
    let notes = document.getElementById('notas_area').value;
    localStorage.setItem('user_notes', notes);
    alert('Notas guardadas');
}

// Cargar datos guardados al abrir la página
window.onload = function() {
    document.getElementById('code_area').value = localStorage.getItem('lean_code') || '';
    document.getElementById('notas_area').value = localStorage.getItem('user_notes') || '';
};
