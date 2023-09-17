const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installBtn.style.visibility= 'visible';
    textHeader.textContent = 'Click the button to install';

    installBtn.addEventListener('click', () => {
        event.prompt();
        installBtn.setAttribute('disabled', true);
        installBtn.textContent = 'Installed!';
    });
});


//butInstall.addEventListener('click', async () => {

//});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent - "Succesfully installed!";
    console.log('appinstalled', event);
});
