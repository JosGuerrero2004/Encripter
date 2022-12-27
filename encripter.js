//variables
const llaves = ["ai", "enter", "imes", "ober", "ufat"]
const vocales = ["a", "e", "i", "o", "u"]
var TIngresado = ""


//sett the default property of none.
document.getElementById("copiar").style.display = "none"
document.getElementById("resultado-textarea").style.display = "none"

//returns true y lo muestra si hay algo y false y lo oculta si no,
function switchDisplay(Text) {
    let btnCopiar = document.getElementById("copiar").style.display
    let txaResultado = document.getElementById("resultado-textarea").style.display
    if (Text != "") {
        if (btnCopiar === 'none' && txaResultado === 'none') {
            document.getElementById("copiar").style.display = "block"
            document.getElementById("resultado-textarea").style.display = "block"
        }
        return true
    } else {
        document.getElementById("copiar").style.display = "none"
        document.getElementById("resultado-textarea").style.display = "none"
        return false
    }
}

//hace la funcion de codificar
function codificar(Text) {
    if (switchDisplay(Text) == true) {
        for (let i = 0; i < vocales.length; i++) {
            Text = Text.replace(vocales[i], llaves[i])
        }
        return Text
    }else{
        alert("Ingrese un texto para poder trabajar.")
    }
}

function btnCodificarOnClick() {
    TIngresado = document.getElementById("ingresar-texto").value
    document.getElementById("resultado-textarea").value = codificar(TIngresado)
}



