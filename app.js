// sw.js
self.addEventListener('install',event => {
    console.log('Service Worker: Installed');
});
self.addEventListener('activate', event => {
    console.log('Service Worker: Activated');

});
self.addEventListener('Fetch', event =>{
    console.log('Fetching:', event.request.url);
});