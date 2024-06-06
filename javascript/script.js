// Hamburger menu switch
function switchHamburger(x) {
    x.classList.toggle("change");
}

function switchHamburger() {
    document.getElementById("hamburger").classList.toggle("change");
}



//Funzione di invio email del form di contatto
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



//Sezione di gestione eventi del form di contatto
let sendFormButton = document.getElementById("send-button");
let sendFormButtonContainer = document.getElementById("send-button-container");
let resetFormButton = document.getElementById("reset-button");
let resetFormButtonContainer = document.getElementById( "reset-button-container");

resetFormButton.addEventListener("click", () => {
    document.getElementById("contact-form").reset();
});

if (!isTouchDevice())
{
    sendFormButton.addEventListener("mouseover", () => {
        sendFormButtonContainer.style.width = "69%";
        sendFormButtonContainer.style.transitionDuration = "200ms";
        resetFormButtonContainer.style.width = "29%";
        resetFormButtonContainer.style.transitionDuration = "200ms";
    });
    sendFormButton.addEventListener("focusin", () => {
        sendFormButtonContainer.style.width = "69%";
        sendFormButtonContainer.style.transitionDuration = "200ms";
        resetFormButtonContainer.style.width = "29%";
        resetFormButtonContainer.style.transitionDuration = "200ms";
    });

    resetFormButton.addEventListener("mouseover", () => {
        sendFormButtonContainer.style.width = "29%";
        sendFormButtonContainer.style.transitionDuration = "200ms";
        resetFormButtonContainer.style.width = "69%";
        resetFormButtonContainer.style.transitionDuration = "200ms";
    });
    resetFormButton.addEventListener("focusin", () => {
        sendFormButtonContainer.style.width = "29%";
        sendFormButtonContainer.style.transitionDuration = "200ms";
        resetFormButtonContainer.style.width = "69%";
        resetFormButtonContainer.style.transitionDuration = "200ms";
    });

    sendFormButton.addEventListener("mouseout", () => {
        sendFormButtonContainer.style.width = "49%";
        sendFormButtonContainer.style.transitionDuration = "200ms";
        resetFormButtonContainer.style.width = "49%";
        resetFormButtonContainer.style.transitionDuration = "200ms";
    });
    sendFormButton.addEventListener("focusout", () => {
        sendFormButtonContainer.style.width = "49%";
        sendFormButtonContainer.style.transitionDuration = "200ms";
        resetFormButtonContainer.style.width = "49%";
        resetFormButtonContainer.style.transitionDuration = "200ms";
    });

    resetFormButton.addEventListener("mouseout", () => {
        sendFormButtonContainer.style.width = "49%";
        sendFormButtonContainer.style.transitionDuration = "200ms";
        resetFormButtonContainer.style.width = "49%";
        resetFormButtonContainer.style.transitionDuration = "200ms";
    });
    resetFormButton.addEventListener("focusout", () => {
        sendFormButtonContainer.style.width = "49%";
        sendFormButtonContainer.style.transitionDuration = "200ms";
        resetFormButtonContainer.style.width = "49%";
        resetFormButtonContainer.style.transitionDuration = "200ms";
    });
}



//Funzione di detect di un device touch
function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
}



//Funzione di calcolo altezza navbar per centramento del div iniziale
function adjustContainerHeight() {
    var navbar = document.getElementById('navbar');
    var container = document.getElementById('vertical-centered');
    var navbarHeight = navbar.offsetHeight;
    container.style.height = `calc(100vh - ${navbarHeight}px)`;
    container.style.marginTop = `${navbarHeight}px`;
}

window.addEventListener('load', adjustContainerHeight);
window.addEventListener('resize', adjustContainerHeight);