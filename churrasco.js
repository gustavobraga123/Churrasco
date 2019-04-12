function calcularValor(){
    let homem,mulher,crianca,carne,cerveja,refri,valorCarne,valorCerveja,valorRefrigerante,valorTotal
    homem = parseFloat(frmChurrasco.txtHomem.value.replace(",","."))
    mulher = parseFloat(frmChurrasco.txtMulher.value.replace(",","."))
    crianca = parseFloat(frmChurrasco.txtCrianca.value.replace(",","."))
    carne = parseFloat(frmChurrasco.txtCarne.value.replace(",","."))
    cerveja = parseFloat(frmChurrasco.txtCerveja.value.replace(",","."))
    refri = parseFloat(frmChurrasco.txtRefrigerante.value.replace(",","."))
    //RESULTADO DA QUANTIDADE DE CARNE
    valorCarne = (homem * carne *30) / 100
    frmChurrasco.txtResultadoCarne.value = valorCarne.toFixed(2)

    //RESULTADO DA QUANTIDADE DE CERVEJA
    valorCerveja = (mulher * cerveja *4)
    frmChurrasco.txtResultadoCerveja.value = valorCerveja.toFixed(2)

    //RESULTADO DA QUANTIDADE DE REFRIGERANTE
    valorRefrigerante = (crianca * refri *2)
    frmChurrasco.txtResultadoRefrigerante.value = valorRefrigerante.toFixed(2)

    //RESULTADO TOTAL
    valorTotal = (valorCarne + valorCerveja + valorRefrigerante)
    frmChurrasco.txtResultadoTotal.value = valorTotal.toFixed(2)

    
}