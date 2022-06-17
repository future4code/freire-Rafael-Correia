```

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let recorrencias = 0;
    for(let i = 0; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] === numeroEscolhido){
            recorrencias++;
    }
  }
  
    if(recorrencias > 0) {
        return `O número ${numeroEscolhido} aparece ${recorrencias}x`;
    }
    else {
        return 'Número não encontrado'
    }
}

```