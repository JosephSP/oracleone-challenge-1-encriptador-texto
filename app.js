function encriptar(){
    console.log("encriptar")
    let txtencriptar = document.getElementById('IDIngresoTexto').value;
    let regex = /^(\s*[a-z]\s*)+$/m;
    if (txtencriptar == "" || !regex.test(txtencriptar)){
        document.getElementsByClassName('resultadoConRespuesta')[0].style.display = "none";
        document.getElementsByClassName('resultadoSinRespuesta')[0].style.display = "block";
        return;
    }

    regex = /^[^eiaou]+$/;
    let txtencriptado = ""
    let letra = ''
    for (Nletra in txtencriptar){
        letra = txtencriptar[Nletra]
        // console.log(letra)
        if (regex.test(letra)){
            txtencriptado += letra;
            continue;
        }
        switch (letra){
            case 'e':
                txtencriptado += "enter";
                break;
            case 'i':
                txtencriptado += "imes";
                break;
            case 'a':
                txtencriptado += "ai";
                break;
            case 'o':
                txtencriptado += "ober";
                break;
            case 'u':
                txtencriptado += "ufat";
                break;
        }
    }
    document.getElementsByClassName('resultadoConRespuesta')[0].style.display = "block";
    document.getElementsByClassName('resultadoSinRespuesta')[0].style.display = "none";
    document.getElementById('IDtxtResultado').value = txtencriptado
    // console.log(txtencriptado);

}

function desencriptar(){
    console.log("desencriptar");
    let txtdesencriptar = document.getElementById('IDIngresoTexto').value;
    let regex = /^(\s*[a-z]\s*)+$/m;
    if (txtdesencriptar == "" || !regex.test(txtdesencriptar)){
        document.getElementsByClassName('resultadoConRespuesta')[0].style.display = "none";
        document.getElementsByClassName('resultadoSinRespuesta')[0].style.display = "block";
        return;
    }

    regex = /^[^eiaou]+$/;
    let txtdesencriptado = "";
    let letra = '';
    for (let Nletra = 0; Nletra < txtdesencriptar.length; Nletra++){
        letra = txtdesencriptar[Nletra];
        if (regex.test(letra)){
            console.log(letra);
            txtdesencriptado += letra;
            continue;
        }
        switch (letra){
            case 'e':
                if ( txtdesencriptar[Nletra + 1] === 'n' && txtdesencriptar[Nletra + 2] === 't' && 
                    txtdesencriptar[Nletra + 3] === 'e' && txtdesencriptar[Nletra + 4] === 'r'){
                        txtdesencriptado += "e";
                        Nletra +=4;
                        break;
                    }
                txtdesencriptado += "e";
                break;
            case 'i':
                if ( txtdesencriptar[Nletra + 1] === 'm' && txtdesencriptar[Nletra + 2] === 'e' && 
                    txtdesencriptar[Nletra + 3] === 's'){
                        txtdesencriptado += "i";
                        Nletra +=3;
                        break;
                    }
                txtdesencriptado += "i";
                break;
            case 'a':
                
                if ( txtdesencriptar[Nletra + 1] === 'i'){
                        console.log(letra);
                        txtdesencriptado += "a";
                        Nletra += 1;
                        break;
                    }
                txtdesencriptado += "a";
                break;
            case 'o':
                if ( txtdesencriptar[Nletra + 1] === 'b' && txtdesencriptar[Nletra + 2] === 'e' && 
                    txtdesencriptar[Nletra + 3] === 'r'){
                        txtdesencriptado += "o";
                        Nletra +=3;
                        break;
                    }
                txtdesencriptado += "o";
                break;
            case 'u':
                if ( txtdesencriptar[Nletra + 1] === 'f' && txtdesencriptar[Nletra + 2] === 'a' && 
                    txtdesencriptar[Nletra + 3] === 't'){
                        txtdesencriptado += "u";
                        Nletra += 3;
                        break;
                    }
                txtdesencriptado += "u";
                break;
        }
    }
    document.getElementsByClassName('resultadoConRespuesta')[0].style.display = "block";
    document.getElementsByClassName('resultadoSinRespuesta')[0].style.display = "none";
    document.getElementById('IDtxtResultado').value = txtdesencriptado;
}

function copiarResultado(){
    console.log("copiarResultado");
    var txtcopia = document.getElementById("IDtxtResultado");

    // Select the text field
    txtcopia.select();
    txtcopia.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(txtcopia.value);
}