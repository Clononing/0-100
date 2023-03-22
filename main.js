var num = Math.floor(Math.random(0,100)*100)
var contador = 0 

var num2 = prompt(parseInt("Introduzca un número"))

while (num!=num2 && contador<10){
    
    if (num2<num){
        alert("El número que buscas es mayor")
        contador = contador + 1
    }  else { 
    
    if (num2>num){
        alert("El número que buscas es menor")
        contador = contador + 1
    } else {
    
    if (num2=num){
        alert("El número que buscas es correcto")
        contador = contador + 1 
    }
    }
    }
    
    var num2 = prompt(parseInt("Introduzca un número"))

    
}

if (contador = 10){
    document.write("El numero correcto es ", num)
}
