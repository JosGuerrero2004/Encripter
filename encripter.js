//variables
const llaves = ["enter", "imes", "ai", "ober", "ufat"]
const vocales = ["e", "i", "a", "o", "u"]
var TIngresado = ""


//sett the default property of none.
document.getElementById("copiar").style.display = "none"
document.getElementById("resultado-textarea").style.display = "none"

//returns true y lo muestra si hay algo y false y lo oculta si no,
function switchDisplay(Text) {
    //se actualiza el display de los elementos
    let btnCopiar = document.getElementById("copiar").style.display
    let txaResultado = document.getElementById("resultado-textarea").style.display
    //evaluando si se ha agregado o no algun tipo de datos
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

//funcion codificar
function codificar(Text) {
    if (switchDisplay(Text) == true) {
        for (let i = 0; i < vocales.length; i++) {
            Text = Text.replaceAll(vocales[i], llaves[i])
        }
        return Text
    }else{
        alert("Ingrese un texto para poder trabajar.")
    }
}

//funcion decodificar
function decodificar(Text) {
    if (switchDisplay(Text) == true) {
        for (let i = 0; i < vocales.length; i++) {
            Text = Text.replaceAll(llaves[i], vocales[i])
        }
        return Text
    } else {
        alert("Ingrese un texto para poder trabajar.")
    }
}

function copiar(var1){
    let val = document.getElementById(var1);
    val.select()

    var selection = document.getSelection()

    document.execCommand('copy')

    selection.removeAllRanges()
    alert('Texto copiado. Selecciona ctrl + v para pegar el texto');
  } 


//llama a las funciones para agregarla al boton correspondiente
function btnCodificarOnClick() {
    TIngresado = document.getElementById("ingresar-texto").value
    console.log(TIngresado)
    document.getElementById("resultado-textarea").value = codificar(TIngresado)
}

function btnDecodificarOnClick() {
    TIngresado = document.getElementById("ingresar-texto").value
    document.getElementById("resultado-textarea").value = decodificar(TIngresado)
}

function  btnCopiarOnClick() {
    copiar("resultado-textarea")
}



