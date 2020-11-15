const clickEvent = (info, tab) => {
    console.log(info, tab);
}


chrome.contextMenus.create({
    "title": "Fire Event",
    "onclick": clickEvent
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    sendResponse({
        "hello": "hellllllooooooooooo"
    })
})