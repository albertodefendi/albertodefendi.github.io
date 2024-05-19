// Hamburger menu switch
function switchHamburger(x) {
    x.classList.toggle("change");
}

function switchHamburger() {
    document.getElementById("hamburger").classList.toggle("change");
}



let form = document.getElementById("contact-form");
async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("status-form");
    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                status.innerHTML = "Messaggio inviato con successo";
                form.reset();
            } else {
                response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                        status.innerHTML = data["errors"]
                            .map((error) => error["message"])
                            .join(", ");
                    } else {
                        status.innerHTML = "Si è verificato un errore nell'invio del messaggio";
                    }
                });
            }
        })
        .catch((error) => {
            status.innerHTML = "Si è verificato un errore nell'invio del messaggio";
        });
}
form.addEventListener("submit", handleSubmit);



let sendFormButton = document.getElementById("send-button");
let sendFormButtonContainer = document.getElementById("send-button-container");
let resetFormButton = document.getElementById("reset-button");
let resetFormButtonContainer = document.getElementById( "reset-button-container");

resetFormButton.addEventListener("click", () => {
    document.getElementById("contact-form").reset();
});

sendFormButton.addEventListener("mouseover", () => {
    sendFormButtonContainer.style.width = "69.5%";
    sendFormButtonContainer.style.transitionDuration = "200ms";
    resetFormButtonContainer.style.width = "29.5%";
    resetFormButtonContainer.style.transitionDuration = "200ms";
});

resetFormButton.addEventListener("mouseover", () => {
    sendFormButtonContainer.style.width = "29.5%";
    sendFormButtonContainer.style.transitionDuration = "200ms";
    resetFormButtonContainer.style.width = "69.5%";
    resetFormButtonContainer.style.transitionDuration = "200ms";
});

sendFormButton.addEventListener("mouseleave", () => {
    sendFormButtonContainer.style.width = "49.5%";
    sendFormButtonContainer.style.transitionDuration = "200ms";
    resetFormButtonContainer.style.width = "49.5%";
    resetFormButtonContainer.style.transitionDuration = "200ms";
});

resetFormButton.addEventListener("mouseleave", () => {
    sendFormButtonContainer.style.width = "49.5%";
    sendFormButtonContainer.style.transitionDuration = "200ms";
    resetFormButtonContainer.style.width = "49.5%";
    resetFormButtonContainer.style.transitionDuration = "200ms";
});
