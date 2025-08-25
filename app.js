let amigos = [];
document.getElementById('sortear').setAttribute('disabled', true);

function agregarAmigo(){
    let amigoAgregado = document.getElementById('amigo').value;

    if (amigoAgregado == ""){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(amigoAgregado);
        document.getElementById('sortear').removeAttribute('disabled');
        listaMostrar();
        limpiarCaja(); 
    }
}

function sortearAmigo(){
    let amigoAleatorio = amigos[(Math.floor(Math.random()*amigos.length))];
    document.getElementById('resultado').innerHTML = amigoAleatorio;
}

function listaMostrar(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value = "";
}