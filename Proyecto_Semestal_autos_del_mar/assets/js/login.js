document.getElementById('loginform').addEventListener('submit', function(event) {
  event.preventDefault();
    let UserEmail = document.getElementById('UserEmail').value;
    let UserPassword = document.getElementById('UserPassword').value;

    if (UserEmail === 'usuario' && UserPassword === 'contraseña') {

        localStorage.setItem('loggedIn', true);
        window.location.href = '../páginas/inicio.html';
    }else{
        document.getElementById('loginMessage').textContent = 'Datos invalidos, intente nuevamente';
    }
});