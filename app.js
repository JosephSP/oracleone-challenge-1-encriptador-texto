function encriptar(){
    console.log("encriptar")
    const txtencriptar = document.getElementById('IDIngresoTexto').value;
    let regex = /^[a-z]+$/;
    if (txtencriptar == "" || !regex.test(txtencriptar)){
        return;
    }

    regex = /^[^eiaou]+$/;
    
    for (letra in txtencriptar){
        if (regex.test(txtencriptar[letra])){
            console.log(txtencriptar[letra])

        }
    }

    console.log(txtencriptar);

}

function desencriptar(){
    console.log("desencriptar");
    
}

function copiarResultado(){
    console.log("copiarResultado");
    
}