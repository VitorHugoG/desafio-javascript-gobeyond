let vendedor = [];
let tabela =  document.querySelector("#tabela");
const fields =  document.querySelectorAll('[required]')

//Sistema de Gerenciamente de Vendedores
function adicionarVendedor(){
    let nome = document.querySelector("#nome").value
    let salario = parseFloat(document.querySelector("#salario").value)
    let valorVendas = parseFloat(document.querySelector("#venda").value)
    
    let salarioFinal = calculoSalarioFinal(salario,valorVendas)

    vendedor.push({
         nomeVendedor: nome,
         salarioVendedor: salario.toFixed(2),
         salarioFinalVendedor: salarioFinal.toFixed(2)
    })
  mostrarVendedor()
}

function calculoSalarioFinal(salario,vendas){
   let final = salario + (vendas * 0.15);
   return final
}

function mostrarVendedor(){
    tabela.innerHTML = "<th><tr><td class=\"titulo\">Nome</td><td class=\"titulo\">Salário fixo</td><td class=\"titulo\">Salário Final</td></tr></th>"
    for(let i=0; i < vendedor.length; i++){
        tabela.innerHTML += "<tr>" + "<td>"+ vendedor[i].nomeVendedor + "</td> "+"<td>"+ vendedor[i].salarioVendedor +"</td>" + "<td>"+ vendedor[i].salarioFinalVendedor+ "</td>" + "</tr>"
    }   
}


/* PLUS ULTRA */

//validacao do campos de input 

function ValidateField(field){
    //lógica para verificar se existem erros
    function verifyErrors(){
        let foundError = false;
  
        for(const error in field.validity){
           if(field.validity[error] && !field.validity.valid){
               foundError = error
           }
        }
        return foundError;
    }

    function customMessage(typeError){
        const messages = {
            text: {
                valueMissing : "Preencha com  seu nome completo"
            },
            number: {
                valueMissing : "Preencha uma valor numérico",
                typeMismatch: ""
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage (message){
        const spanError = field.parentNode.querySelector('span.error')
  
        if(message){
            spanError.classList.add("active-error");
            spanError.innerHTML = message;
        }else{
            spanError.classList.remove("active-error");
            spanError.innerHTML = ""
          
        }
       
       
    }

   return () =>{
    const error = verifyErrors()
   

    if(error){
       const message = customMessage(error)
       field.style.borderColor = "red"  
       setCustomMessage(message)
    }else{
       field.style.borderColor = "green"  
       setCustomMessage()
      
    }
   }  
}


function customValidation(event){
  const field = event.target
  const validation = ValidateField(field)

  validation()
  
  //só pra testar
  const error = ValidateField(field)
  console.log("Error Exist " + error)

 
}


for(const field of fields){
    field.addEventListener('invalid', event => {
        event.preventDefault()
        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}



document.querySelector('form').addEventListener('submit',event => {
    event.preventDefault();
    adicionarVendedor()
})


