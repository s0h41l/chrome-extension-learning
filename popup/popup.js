document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('fire');
    link.addEventListener('click', (event) => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            chrome.tabs.sendMessage(tabs[0].id, {action: 'init_black_hole'}, response => {
                event.target.innerText = event.target.innerText == 'Start' ? 'Stop' : 'Start';
            })
        })
    });
});