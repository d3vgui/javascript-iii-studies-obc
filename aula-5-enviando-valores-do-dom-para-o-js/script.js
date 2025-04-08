function register(element){
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert(
            "REGISTRO DE USUÁRIO\n\n" +
            "Usuário " + username + " registrado."
        )
    }
    else{
        alert("As senhas não conferem.")
    }
}