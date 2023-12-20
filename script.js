function verifpoid(){
    b=document.getElementById('i1');
    if (b.value>200){
        b.value=200;
        alert('Le poid doit être inférieur à 200 kg');
    }else if(b.value<0){
        b.value=0;
        alert('Le poid doit être supérieur à 0kg');
    }
}
function veriftaille(){
    c=document.getElementById('i2');
    if (c.value>250){
        c.value=250;
        alert('La taille doit être inférieur à 250 cm');
    }else if(c.value<0){
        c.value=0;
        alert('La taille doit être supérieur à 0 cm');
    }
}
function action(){
    b=document.getElementById('i1');
    c=document.getElementById('i2');
    if(b.value===''){
        alert('Enter une valeur en kg');
    }else if(c.value===''){
        alert('Enter une valeur en cm');
    }else{
        var a =((b.value)/((c.value/100)**2)).toFixed(1);        
        document.getElementById('display').innerHTML = "<p id='title'>Votre IMC</p>";
        
        document.getElementById('display').innerHTML += "<p id='score'>"+a+"</p>";    
        document.getElementById('display').style.display = "flex";
        debugger
        if(a>25){
            document.getElementById('display').innerHTML += "<p id='votre'>Vous êtes en surpoids</p>";
            document.getElementById('display').style.display = "flex";
        } else if (a < 19) {
            document.getElementById('display').innerHTML += "<p id='votre'>Vous êtes en sous poids</p>";
            document.getElementById('display').style.display = "flex";
        }else {
            document.getElementById('display').innerHTML += "<p id='votre'>Vous êtes normal</p>";
            document.getElementById('display').style.display = "flex";
        }
    }    
}
