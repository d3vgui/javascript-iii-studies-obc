function register(event){
    console.log(event)
    const sectionElement = event.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert("Usuário " + username +  " registrado.")
    }
    else{
        alert("As senhas não conferem.")
    }
}

const button = document.getElementById('register-button')

// button.addEventListener('click', function(){
//     alert('Botão clicado')
// })

button.addEventListener('click', register)

function removeListener(){
    button.removeEventListener('click', register)
    alert('Evento removido.')
}

button.addEventListener('mouseover', function(event){
    console.log(event.currentTarget)
})
