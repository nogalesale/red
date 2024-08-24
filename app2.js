if ('serviceWorker' in navigator)
{
    window.addEventListener('load',() => {
        navigator.serviceWorker.register('/app.js')
        .then(registration => {
            console.log('Service Worker registrado con exito:', registration);
        })
        .catch(error => {
            console.log('Error al registrar el Service Worker:', error);
        });
    });
}