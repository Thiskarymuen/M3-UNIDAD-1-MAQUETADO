nombre = prompt("ingrese su nombre")
const dinero = prompt("cuanto dinero tienes?");

if (dinero >= 50 && dinero < 100 ){
    alert( nombre + ", comprate solo un vaso mediano de gaseosa")

}else if (dinero >= 100 && dinero < 160){
    alert( nombre + ", comprate un vaso de gaseosa y un chocolate")

}else if (dinero >= 160 && dinero < 300){
    alert(nombre + ", comprate unos pochoclos chicos")
    
}else if (dinero >= 300 && dinero < 500){
    alert(nombre + ", comprate unos pochoclos medianos y un agua")
    
}else if (dinero >= 500 && dinero < 900){
    alert(nombre + ", comprate unos pochoclos medianos y una gaseosa")
    
}else if (dinero >= 1500 ){
    alert(nombre + ", comprate unos pochoclos grandes y una gaseosa")
    
}else {
    alert("no te alcanza para nada, el monto mínimo es $50")
}