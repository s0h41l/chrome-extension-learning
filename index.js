var allElements = document.querySelectorAll('p,h1,h2,h3,h4,h5,h6,img,a,button,input,span,select,iframe,video,audio,i,textarea');


var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .spin {
        animation: App-logo-spin infinite 2s linear;
    }
`
;
document.getElementsByTagName('head')[0].appendChild(style);


var colors = [
    "red",
    "green",
    "blue",
    "purple",
    "orange",
    "yellow",
    "pink",
    "brown",
]

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.action === 'init_black_hole'){
        allElements.forEach(e => {
            if(e){
                e.classList.toggle('spin');
                // const clr = colors[Math.floor(Math.random()*7)];
                // e.style.border = '1px solid ' + clr;
            }
        });
        sendResponse({});
    }
})

// chrome.runtime.sendMessage({
//     "action": "print_message",
//     "data": ["helllllooo", "Test"]
// }, res => {
//     console.log(res);
// })
