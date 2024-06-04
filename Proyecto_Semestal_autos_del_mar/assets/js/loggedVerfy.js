const redirectIfNotLoggedIn = () => {
    console.log("pasa por aqui");

    let loggedIn = localStorage.getItem('loggedIn');
    if(!loggedIn) {
        window.location.href = '../páginas/inicioSesion.html';
    }
}

redirectIfNotLoggedIn();