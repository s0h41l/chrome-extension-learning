console.log("helllo");

const test = () => { 
    console.log("helllllooooooooo");
}


chrome.runtime.sendMessage({
    "action": "print_message",
    "data": ["helllllooo", "Test"]
}, res => {
    console.log(res);
})
