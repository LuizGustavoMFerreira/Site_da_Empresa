window.onload = function()
{
	var campo = document.getElementById('campo');
	campo.onclick = apagaInput;
}
function apagaInput()
{
	var campo = document.getElementById('campo');	
	if(campo.value == 'Usuario')
		campo.value = '';
}

function apagar(){
    $("#nome").val(""),
    $("#email").val(""),
    $("#mensagem").val("")
}

