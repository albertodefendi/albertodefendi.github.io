// Hamburger menu switch
function switchHamburger(x) 
{
    x.classList.toggle("change");
}



function switchHamburger() 
{
    document.getElementById("hamburger").classList.toggle("change");
}



let sendFormButton = document.getElementById("send-button")
let sendFormButtonContainer = document.getElementById("send-button-container")
let resetFormButton = document.getElementById("reset-button")
let resetFormButtonContainer = document.getElementById("reset-button-container")

sendFormButton.addEventListener("click", () => {
    document.getElementById("email-form").reset();
})
resetFormButton.addEventListener("click", () => {
    document.getElementById("email-form").reset();
})

sendFormButton.addEventListener("mouseover", () => {
    sendFormButtonContainer.style.width = "69.5%";
    sendFormButtonContainer.style.transitionDuration = "200ms";
    resetFormButtonContainer.style.width = "29.5%";
    resetFormButtonContainer.style.transitionDuration = "200ms";
})

resetFormButton.addEventListener("mouseover", () => {
    sendFormButtonContainer.style.width = "29.5%";
    sendFormButtonContainer.style.transitionDuration = "200ms";
    resetFormButtonContainer.style.width = "69.5%";
    resetFormButtonContainer.style.transitionDuration = "200ms";
})

sendFormButton.addEventListener("mouseleave", () => {
    sendFormButtonContainer.style.width = "49.5%";
    sendFormButtonContainer.style.transitionDuration = "200ms";
    resetFormButtonContainer.style.width = "49.5%";
    resetFormButtonContainer.style.transitionDuration = "200ms";
})

resetFormButton.addEventListener("mouseleave", () => {
    sendFormButtonContainer.style.width = "49.5%";
    sendFormButtonContainer.style.transitionDuration = "200ms";
    resetFormButtonContainer.style.width = "49.5%";
    resetFormButtonContainer.style.transitionDuration = "200ms";
})