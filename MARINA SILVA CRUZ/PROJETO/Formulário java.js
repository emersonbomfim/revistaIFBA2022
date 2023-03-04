const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //Verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }


//  Verifica se o e-mail etsá preenchido e se é válido
if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha o seu email");
    return;
}

//  Verifica se a está preenchida


 // Se todos os campos estiverem corretamente preenchidos, envie form
 form.submit();
});

// Função que valida e-mail
function isEmailValid(email) {

    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9,_-]+@[a-zA-Z0-9,_-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true
    }

    return false;
}