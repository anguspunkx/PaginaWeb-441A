document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir que se recargue la página
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica para verificar el usuario y la contraseña
    if (username === 'usuario' && password === '1234') {
        alert('¡Inicio de sesión exitoso!');
        // Redirigir a otra página si el login es correcto (ejemplo)
        // window.location.href = 'pagina_principal.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});