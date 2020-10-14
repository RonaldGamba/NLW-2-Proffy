//Procurar botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click',cloneField)

//Executar uma acao
function cloneField(){
    //console.log("Teste")

    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos. Que campos?
    const fields = newFieldsContainer.querySelectorAll('input')
    
    //para cada campo limpar
    fields.forEach(function(field) {
        fields.value = ""
    });

    //Colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)


}