
function verifyRequired(element){
    if(element.value == ''){
        element.setAttribute('style', 'border-color: red')
    } else{
        element.removeAttribute('style')
    }
}

function verifyInterests(){
    const interests = document.querySelectorAll('#interests')

    for(let i=0; i<interests.length; i++){
        if(interests[i].checked == true){
            return true
        }
    }
}

function verifyNoEmpty(element){
    if(element.value == ''){
        element.setAttribute('style', 'border-color:red')
        return false
    }
    return true
}

function showErrors(errors){
    let messageError = 'Se enconraron los siguientes errores en el formulario: \n'
    for(i=0; i<errors.length; i++){
        messageError += errors[i] + '\n'
    }
    /*messageError = messageError + errors[0]*/
    alert(messageError)
}

function register(){

    let errors = []

    if ( !verifyInterests()){
        errors.push('Debe seleccionar por lo menos un interes')
    }

    const email = document.getElementById('emailcompleto')
    if(!verifyNoEmpty(email)){
        errors.push('Debe escribir un correo electrónico')
    }

    const nombre = document.getElementById('nombrecompleto')
    if(!verifyNoEmpty(nombre)){
        errors.push('Debe escribir un nombre')
    }

    const fnaicmiento = document.getElementById('fnacimiento')
    if(!verifyNoEmpty(fnacimiento)){
        errors.push('Debe escribir una fecha de nacimiento')
    }

    const sexo = document.getElementById('value')
    if(!verifyNoEmpty(sexo)){
        errors.push('Debe seleccionar un sexo')
    }

    if(errors.length > 0){
        showErrors(errors)
        return
    }

    const interests = document.querySelectorAll('#interests')

    let selectedInterests =[]

    for(let i=0; i<interests.length; i++){
        if(interests[i].checked){
            selectedInterests.push(interests[i].value)
        }
    }

    const request = {
        nombre: nombre.value,
        email: email.value,
        fnacimiento: fnacimiento.value,
        sexo: value.value,
        interests: selectedInterests
    }

    /*console.log(request)*/

    users.push(request)
    fetch('http://localhost:9000/',{method:'POST',  body: JSON.stringify(request)})
        .then(response => result = response.json())
        .then(data => {
            phpUsers = data
            console.log(phpUsers)
        })
        .catch(error=>console.log(error))

    /*console.log("Lista de usuarios: ", users)*/
    alert('Usted se ha registrado satisfactoriamente')
    showListUsers(request)
}

function showListUsers(request){
    const table = document.getElementById('table-users')
    const row = document.createElement('tr')

    for(let prop in request){
        const col = document.createElement('td')
        if(prop == 'sexo'){
            col.innerHTML = request[prop] == 1 ? 'Varon' : 'Mujer'
        }else{
            col.innerHTML = request[prop]
        }

        row.appendChild(col)
    }

    table.appendChild(row)
}

