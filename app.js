function cadastrar(){
    let form = document.getElementById("form-cadastro")
    let nome = form.nome.value
    let especie = form.especie.value
    let altura = form.altura.value
    let origem = form.origem.value

    console.log(nome, especie, altura)

    if(nome.trim() == ""){
        alert("Preencha um nome valido!")
        return false
    }
    
    if(especie.trim() == ""){
        alert("Preencha um especie valido!")
        return false
    }
    
    if(altura.trim() == ""){
        alert("Preencha uma altura valida!")
        return false
    }
    if(origem.trim() == "nada"){
        alert("Preencha uma origem valida!")
        return false
    }
    alert(`Cadastro realizado com sucesso! Nome: ${nome}; Especie: ${especie}; Altura: ${altura}`)
}