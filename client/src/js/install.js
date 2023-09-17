const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallpromp', (event) =>{
    event.preventDefault();
    window.defferedPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click',async () =>{
    const promptEvent = window.defferedPrompt;
    if (!promptEvent){
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt= null;
    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt=null;
})