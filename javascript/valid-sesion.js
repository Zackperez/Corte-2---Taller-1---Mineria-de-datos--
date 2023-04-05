// VALIDAR INICIO DE SESIÓN

const correo = document.getElementById('email2').value;
const contra = document.getElementById('contrasena2').value;
const errorCorreo = document.getElementById('errorEmail');
const errorContra = document.getElementById('errorPass');

// Funcion que verifica campos vacios de EMAIL y CONTRASEÑA

document.getElementById("botton").onclick = function hola() { 
	if (correo == "") {
		errorCorreo.innerHTML = '<h5 class = "CorreoCSS"> Correo vacio puto </h5>'
		//inner.HTML agrega HTML desde el JAVASCRIPT
	}
	if(contra == ""){
		errorPass.innerHTML = '<h5 class = "ContraCSS"> ¿Y la contraseña? care mondá</h5>'
	}
}