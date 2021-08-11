const btn = document.querySelector("#perguntar-btn");

btn.addEventListener("click",function (e){
    e.preventDefault();

    let p1 = document.querySelector("#p1");
    let p2 = document.querySelector("#p2");

    document.querySelector('form').style.display = 'none';
    document.querySelector('#resultado').style.display='block';

    let label1 = document.querySelector("#label-1");
    let label2 = document.querySelector("#label-2");

    label1.innerHTML = p1.value;
    label2.innerHTML = p2.value;

    let num = Math.round(Math.random());
    let resultado="";
    switch(num){
        case 0:
            resultado = p1.value;
            break;
        case 1:
            resultado = p2.value;
            break;
    }

    let resposta = document.querySelector("#resposta");
    resposta.innerHTML = resultado;
})

const btnTryAgain = document.querySelector("#tryagain");
btnTryAgain.addEventListener('click',function(){
    document.location.reload();
})

document.querySelector("#logo").addEventListener('click',function(){
    document.querySelector(".warning").style.display = 'block';
})
document.querySelector("#close").addEventListener('click',function(){
    document.querySelector(".warning").style.display = 'none';
})
