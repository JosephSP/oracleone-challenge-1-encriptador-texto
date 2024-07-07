function encriptar(){
    console.log("encriptar")
    const txtencriptar = document.getElementById('IDIngresoTexto').value;
    let regex = /^(\s*[a-z]\s*)+$/;
    if (txtencriptar == "" || !regex.test(txtencriptar)){
        document.getElementsByClassName('resultadoConRespuesta')[0].style.display = "none";
        document.getElementsByClassName('ResultadoSinRespuesta')[0].style.display = "block";
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
    const txtdesencriptar = document.getElementById('IDIngresoTexto').value;
    let regex = /^(\s*[a-z]\s*)+$/;
    if (txtdesencriptar == "" || !regex.test(txtdesencriptar)){
        document.getElementsByClassName('resultadoConRespuesta')[0].style.display = "none";
        document.getElementsByClassName('ResultadoSinRespuesta')[0].style.display = "block";
        return;
    }

    regex = /^[^eiaou]+$/;
    let txtdesencriptado = "";
    let letra = '';
    for (Nletra in txtdesencriptar){
        letra = txtdesencriptar[Nletra];
        // console.log(letra);
        if (regex.test(letra)){
            txtdesencriptado += letra;
            continue;
        }
        switch (letra){
            case 'e':
                txtdesencriptado += "enter";
                break;
            case 'i':
                txtdesencriptado += "imes";
                break;
            case 'a':
                txtdesencriptado += "ai";
                break;
            case 'o':
                txtdesencriptado += "ober";
                break;
            case 'u':
                txtdesencriptado += "ufat";
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