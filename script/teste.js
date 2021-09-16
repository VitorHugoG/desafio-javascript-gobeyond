let vendedor = [];
let tabela =  document.querySelector("#tabela");

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



