const { createElement } = require("react")

function verificar() {
 var data = new Date() 
 var ano = data.getFullYear()
 var fano =  window.document.getElementById("txtano")
 var res = window.document.getElementById("res")
 if (fano.value.length==0 || fano.value > ano ) {
    window.alert("Verifique os dados e porfavor tente novamente.")
 } else {
    var fsex = window.document.getElementsByName("sexo")
    var idade = ano - Number(fano.value)
    res.innerHTML= `Idade calculada ${idade}`
    var gênero =  ''
  
 } if (fsex[1].checked) {
        gênero = 'Homem'
      

 } else if (f.sex[1].checked) {
        gênero = "Mulher"

        
 }
 
    res.innerHTML  = `Detectamos ${gênero} com ${idade} anos . `
    
}