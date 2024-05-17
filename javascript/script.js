// Hamburger menu switch
function switchHamburger(x) 
{
    x.classList.toggle("change");
}



function switchHamburger() 
{
    document.getElementById("hamburger").classList.toggle("change");
}



let resetFormButton = document.getElementById("reset-button")
resetFormButton.addEventListener("click", () => {
    document.getElementById("email-form").reset();
})