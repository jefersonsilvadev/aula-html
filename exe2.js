
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
    var texto = document.getElementById("texto").value;

    var invertido = "";
    var tam = texto.length - 1;


    while (tam >= 0)
    {
        invertido += texto[tam];
        tam--;
    }

    //for (var tam = texto.length -1; tam >= 0; tam--)
    //{
    //    invertido += texto[tam];
    //}

    resultado.innerHTML = invertido;
    //texto.value = "";
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

function exe4 ()
{
    var resultado = document.getElementById("resultado");
    var texto = document.getElementById("texto");

    // transforma o texto em letra minúscula
    var url = texto.value.toLowerCase();

    url = url.split(" ");
    resultado.innerHTML = url.join("_");

    //resultado.innerHTML = url.replace(/ /g , "_");
    
}