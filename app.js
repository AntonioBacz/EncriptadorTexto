const parametros = {
    a:"ai", 
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
};
function encriptar(texto){
    return texto.replace(/[aeiou]/gi, letra => parametros[letra.toLowerCase()])
}
function encriptador(){
    const texto = document.getElementById("textoUsuario").value;
    const traduccion = encriptar(texto);
    document.getElementById("traduccion").textContent = traduccion;
}
function desencriptarInformacion() {
    const textoCifrado = document.getElementById("textoUsuario").value;
    const palabrasClave = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    };
    let textoDesencriptado = textoCifrado;
    for (const clave in palabrasClave) {
        const vocal = palabrasClave[clave];
        const regex = new RegExp(clave, 'g');
        textoDesencriptado = textoDesencriptado.replace(regex, vocal);
    }
    document.getElementById("traduccion").textContent = textoDesencriptado;
}
function eliminarCaracteresEspeciales(event) {
    var entrada = document.getElementById("textoUsuario");
    entrada.value = entrada.value.toLowerCase();

    const entradaEspacio = event.target;
    const original = entradaEspacio.value;
    const procesado = original.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); 
    const conversion = procesado.replace(/[^a-zA-Z0-9\s]/g, '');

    entradaEspacio.value = conversion;

    const mensajeAdvertencia = document.getElementById("advertencia");
    
    if (original !== conversion) {
        mensajeAdvertencia.style.display = "block";

    } else {
        mensajeAdvertencia.style.display = "none";
    }
}
function copiarAlPortapapeles() {
    const textoACopiar = document.getElementById("traduccion").textContent;
  
    const textarea = document.createElement("textarea");
    textarea.value = textoACopiar;
  
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    document.getElementById("mensajeCopiado").textContent = "Texto copiado.";
    setTimeout(() => {
      document.getElementById("mensajeCopiado").textContent = "";
    }, 5000);
    
  }

  document.getElementById("botonCopiar").addEventListener("click", copiarAlPortapapeles);

function compartirX() {
    const textoEncriptado = document.getElementById("traduccion").textContent;
    const textoCortado = textoEncriptado.substring(0, 280);
  
    const urlTweet = "https://twitter.com/intent/tweet?text=${encodeURIComponent(textoCortado)}";
    window.open(urlTweet, "_blank");
  }
  function compartirWhatsapp() {
    const textoEncriptado = document.getElementById("traduccion").textContent;
    const textoCortado = textoEncriptado.substring(0, 200);
  
    const urlWhatsApp = "https://wa.me/?text=${encodeURIComponent(textoCortado)}";
    window.open(urlWhatsApp, "_blank");
  }