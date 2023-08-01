function ret(){
    let b1=Number(prompt("Informe o valor de b"));
    let h1=Number(prompt("Informe o valor de h"));
    let resultado=b1*h1;
    alert("O resultado da área é"+resultado+"m²");
    document.getElementById('ret').innerHTML='Área de '+resultado+'m²';
}

function tri(){
    let b2=Number(prompt("Informe o valor de b"));
    let h2=Number(prompt("Informe o valor de h"));
    let resultado=(b2*h2)/2;
    alert("O resultado da área é"+resultado+"m²");
    document.getElementById('tri').innerHTML='Área de '+resultado+'m²';
}

function cir(){
    let p=3.14;
    let r=Number(prompt("Informe o valor de r"));
    let resultado=p*(r**2);
    alert("O resultado da área é"+resultado+"m²");
    document.getElementById('cir').innerHTML='Área de '+resultado+'m²';
}

function trap(){
    let B1=Number(prompt("Informe o valor de B"));
    let b3=Number(prompt("Informe o valor de b"));
    let h3=Number(prompt("Informe o valor de h"));
    let resultado=((B1+b3)*h3);
    alert("O resultado da área é"+resultado+"m²");
    document.getElementById('trap').innerHTML='Área de '+resultado+'m²';
}

function los(){
    let D=Number(prompt("Informe o valor de D"));
    let d=Number(prompt("Informe o valor de d"));
    let resultado=(D*d)/2;
    alert("O resultado da área é"+resultado+"m²");
    document.getElementById('los').innerHTML='Área de '+resultado+'m²';
}