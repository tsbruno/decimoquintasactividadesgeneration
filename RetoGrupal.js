function juego(){
    let number= parseInt(document.getElementById('ingresar').value);
    let condicion=66;
    console.log('Entraste'+number);
    

    if(number===condicion){
       document.write('Felicidades campeón');
       console.log('Felicidades campeón');
    }

    
    else if(number>=(condicion+5) || number<=(condicion-5)){
        document.write('Calienteeee');
    }
    else if(number>=(condicion+10) || number<=(condicion-10)){
        document.write('Caliente');
    }
    else if(number>=(condicion+20) || number<=(condicion-20)){
        document.write('Tibio');
    }
    else if(number>=(condicion+30) || number<=(condicion-30)){
        document.write('Frío');
    }
    else{
        document.write('Congelado');
    }


}



}
