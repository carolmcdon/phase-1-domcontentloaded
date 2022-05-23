document.addEventListener("DOMContentLoaded", function (p) {
    document.querySelector('#text').textContent = "This is really cool!"
    console.log("The DOM has loaded");
})



//Use the event's callback function to target the paragraph 
//element with id="text" and replace the text with "This is really cool!"