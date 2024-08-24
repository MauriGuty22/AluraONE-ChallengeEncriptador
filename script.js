const textoIngresado = document.getElementById("textoIngresado");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById("btnCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const imagenTexto = document.getElementById("imagenTexto");
const infoDerecha =  document.getElementById("infoDerecha");
const derecha = document.getElementById("derecha");

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imer"],
    ["a", "ai"],
    ["u", "ufat"],
]

const xd = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    imagenTexto.classList.add("oculto");
    infoDerecha.style.display="none";
    btnCopiar.style.display="block";
    derecha.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
    textoIngresado.value="";
}


btnEncriptar.addEventListener("click", () => {
    const texto = textoIngresado.value.toLowerCase();
    if (texto != "") {
        function encriptar (newText) {
            for (let i = 0; i< reemplazar.length; i++){
                if (newText.includes(reemplazar[i][0])) {
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                };
            };
            return newText
        };
    } else {
        alert("Ingrese texto al encriptador!!");
    };
    xd(encriptar(texto));
});
btnDesencriptar.addEventListener("click", ()=>{
    const texto = textoIngresado.value.toLowerCase();
    if (texto != "") {
        function desencriptar (newText) {
            for (let i = 0; i< reemplazar.length; i++) {
              if (newText.includes(reemplazar[i][1])) {
                newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
              };
            };
            return newText;
        };
    } else {
        alert("Ingrese texto al encriptador!!");
    }
    xd(desencriptar(texto));
});
btnCopiar.addEventListener("click", () =>{
    let texto = mensajeFinal;
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado broder");

    mensajeFinal.innerHTML = "";
    imagenTexto.classList.remove("oculto");
    infoDerecha.style.display = "block";
    btnCopiar.style.display = "none";

    textoIngresado.focus();
})