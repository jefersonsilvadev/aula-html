
function exe1() 
{
    var resultado = document.getElementById("resultado");
    var texto = document.getElementById("texto");

    var letra = texto.value.charAt(0);
    var resto = texto.value.slice(1);
    var palavra = letra.toUpperCase() + resto.toLowerCase();
    
    resultado.innerHTML = palavra;
    texto.value = "";
}

// Inverte um texto
function exe2()
{
    var resultado = document.getElementById("resultado");
    var texto = document.getElementById("texto");

    var invertida = reverse(texto.value);

    resultado.innerHTML = invertida;
    texto.value = "";
}

// oculta o cpf
// 123.123.123-00
function exe3 ()
{
    var resultado = document.getElementById("resultado");
    var texto = document.getElementById("texto");

    var inicio = texto.value.slice(0,3);
    var fim = texto.value.slice(12);


    resultado.innerHTML = inicio + ".***.***." + fim;
    texto.value = "";
}