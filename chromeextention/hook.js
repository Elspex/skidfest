chrome.webRequest.onBeforeRequest.addListener((details) => {
        //console.trace(details);
        //const file = details.url.substring(details.url.lastIndexOf('/') + 1);
	//const redirect = chrome.runtime.getURL(file);
	const redirect = 'https://skidlamer.github.io/js/skid.js'
        return {
            //cancel: true, /*Cannot cancel while other methods*/
        redirectUrl: redirect
        };
    }, {
        urls: ["*://krunker.io/libs/nipplejs.min.js*"],
        types: ["script"]
    }, //, "xmlhttprequest"
    ["blocking"]);