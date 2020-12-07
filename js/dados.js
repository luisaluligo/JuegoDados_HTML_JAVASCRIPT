


let t2=document.getElementById("txt");

function lanzardados() {
  
    let dado1 =  getNumRand(1, 6); // le asigno la funcion para obtener numeros aleatorios 
    let dado2 =  getNumRand(1, 6); // le asigno la funcion para obtener numeros aleatorios
    let suma= dado1 + dado2;
    let numeroGanador= getNumRand(2,12);
document.getElementById("PuntajeDeseado").innerHTML=numeroGanador;
   
    // muestro las imagenes y las cambio dinamicamente 
    document.getElementById("ImgDado1").src="../images/"+dado1+".svg";
    document.getElementById("ImgDado2").src="../images/"+dado2+".svg";
    //Muestro la suma de los dados
    document.getElementById("SumaDados").innerHTML=suma;



    if ( numeroGanador === suma){
        document.getElementById("estado").innerHTML="Felicitaciones Gano";
        
          }
     if ( numeroGanador != suma){
        document.getElementById("estado").innerHTML="vuelve a intentarlo";
    
     }
   
   
  
    
}






// FUNCIÓN QUE ME GENERA UN NÚMERO ALEATORIO ENTERO AMBOS INCLUSIVOS
function getNumRand(min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
}



