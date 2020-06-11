var numeros = [2,9,5,4,3,6,7,8,0,1]
var textos = ["b", "c", "d", "a"]

//textos.sort()

/*for(var i = 0; i < textos.length; i ++){
    console.log(textos[i])
}*/

numeros.sort(ordenacao)

function ordenacao(a,b){
    return a-b

}

for(var i = 0; i < numeros.length; i ++){
    console.log(numeros[i])
}

