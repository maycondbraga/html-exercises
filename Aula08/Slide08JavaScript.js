function exemplo01() {
    var nota = 7.5;

    if (nota >= 6) {
        document.write("Aprovado!");
    }
    else {
        document.write("Reprovado...");
    }
}

function exemplo02() {
    var a = 8;

    if (a > 5) {
        if (a % 2 == 0) {
            document.write("A é maior que cinco e par\n");
            //alert("A é maior que cinco e par");
        }
    }
    else {
        if (a % 2 != 0) {
            document.write("A é menor ou igual a cinco e impar\n");
            //alert("A é menor ou igual a cinco e impar");
        }
    }
    document.write("<br/><br/> Obs.: Executando o texto na pagina para demonstrar na captura de tela.");
}

function exercicio01() {
    var nota1 = parseInt(document.getElementById("nota01").value);
    var nota2 = parseInt(document.getElementById("nota02").value);
    var nota3 = parseInt(document.getElementById("nota03").value);

    if (!isNaN(nota1) || !isNaN(nota2) || !isNaN(nota3)){
        if ((nota1 >= 0 && nota1 <= 10) && (nota2 >= 0 && nota2 <= 10) && (nota3 >= 0 && nota3 <= 10)){
            var media = (nota1 + nota2 + nota3) / 3.0;
            
            if (media >= 9.0){
                var resposta = document.getElementById("resposta");
                resposta.innerHTML = "<span style='color:#27b518'> " + "Média: " + media.toFixed(2) + "<br/> Conceito: E" + "</span>";    
            }
            else if (media >= 7.5){
                var resposta = document.getElementById("resposta");
                resposta.innerHTML = "<span style='color:#27b518'> " + "Média: " + media.toFixed(2) + "<br/> Conceito: A" + "</span>";    
            }
            else if (media >= 6.0){
                var resposta = document.getElementById("resposta");
                resposta.innerHTML = "<span style='color:#27b518'> " + "Média: " + media.toFixed(2) + "<br/> Conceito: B" + "</span>";    
            }
            else{
                var resposta = document.getElementById("resposta");
                resposta.innerHTML = "<span style='color:#FF0000'> " + "Média: " + media.toFixed(2) + "<br/> Conceito: C" + "</span>";    
            }
        }
        else{
            var resposta = document.getElementById("resposta");
            resposta.innerHTML = "<span style='color:#FF0000'> Nota inválida. </span>";    
        }
    }
    else {
        var resposta = document.getElementById("resposta");
        resposta.innerHTML = "<span style='color:#FF0000'> Nota inválida. </span>";
    }
}

function exemplo03(){
    var diaSemana = 5;

    switch (diaSemana){
        case 0: 
                document.write("Domingo");
                //alert("Domingo");
                break;
        case 6: 
                document.write("Sábado");
                //alert("Sábado");
                break;
        default:
                document.write("Dia útil...");
                //alert("Dia útil...");
    }
    document.write("<br/><br/> Obs.: Executando o texto na pagina para demonstrar na captura de tela.");
}

function exemplo04(){
    var diaSem = 5;
    switch (diaSem) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            document.write("Dia útil.");
            //alert('Dia útil.');
            break;
        default: 
            document.write("Final de Semana!");
            //alert("Final de Semana!");
    }
    document.write("<br/><br/> Obs.: Executando o texto na pagina para demonstrar na captura de tela.");
}

function exemplo05(){
    var diaSem1 = 0;
    switch (true) { 
       case (diaSem1 >= 1 &&  diaSem1 <= 5): 
                document.write("Dia Útil");
                //alert("Dia Útil");
                break;
       default:
                document.write("Final de Semana!");
                //alert("Final de semana!");
    }
    document.write("<br/><br/> Obs.: Executando o texto na pagina para demonstrar na captura de tela.");
}

function exercicio02() {
    var url = document.querySelector('input[name="url"]:checked').value;
    switch (url){
        case "A":
            document.form.action = "https://www.letras.mus.br/letra/A/";
            break;
        case "B":
            window.location.href = "https://www.letras.mus.br/letra/B/";
            break;
        case "C":
            window.location.href = "https://www.letras.mus.br/letra/C/";
            break;
        default:
            window.location.href = "https://www.letras.mus.br/letra/D/";
            break;
    }
}

function  cumprimento ( ) {
    document.write("Bom dia!!");
    //alert("Bom dia!!");
}

function  cumprimento2 (id) {
    var idnome = document.getElementById(id).value;
    document.getElementById('recebeNome').innerHTML = "Bom dia!! " + idnome;
    //alert("Bom dia!!");
}

function  cumprimento3 (id1, id2) {
    var idnome1 = document.getElementById(id1).value;
    var idnome2 = document.getElementById(id2).value;
    document.getElementById('recebeNome2').innerHTML = "Bom dia!! " + idnome1 + " e " + idnome2;
    //alert("Bom dia!!");
}

function calculaImc(idPeso, idAltura){
    var peso = parseFloat(document.getElementById(idPeso).value);
    var altura = parseFloat(document.getElementById(idAltura).value);

    if (!isNaN(peso) || !isNaN(altura)){
        var imc = peso / (Math.pow(altura, 2));

        if (imc > 50.0){
            var resposta = document.getElementById("recebeImc");
            resposta.innerHTML = "<span style='color:#FF0000'> IMC: " + imc.toFixed(2) + "<br> Super-Obesidade </span>";    
        }
        else if (imc > 40.0){
            var resposta = document.getElementById("recebeImc");
            resposta.innerHTML = "<span style='color:#FF0000'> IMC: " + imc.toFixed(2) + "<br> Obesidade Mórbida </span>";    
        }
        else if (imc > 35.0){
            var resposta = document.getElementById("recebeImc");
            resposta.innerHTML = "<span style='color:#FF0000'> IMC: " + imc.toFixed(2) + "<br> Obesidade Alta </span>";    
        }
        else if (imc > 30.0){
            var resposta = document.getElementById("recebeImc");
            resposta.innerHTML = "<span style='color:#FF0000'> IMC: " + imc.toFixed(2) + "<br> Obesidade Moderada </span>";    
        }
        else if (imc > 25.0){
            var resposta = document.getElementById("recebeImc");
            resposta.innerHTML = "<span style='color:#FF0000'> IMC: " + imc.toFixed(2) + "<br> Sobrepeso </span>";    
        }
        else if (imc > 18.5){
            var resposta = document.getElementById("recebeImc");
            resposta.innerHTML = "<span style='color:#27b518'> IMC: " + imc.toFixed(2) + "<br> Peso Ideal </span>";    
        }
        else if (imc > 17.0){
            var resposta = document.getElementById("recebeImc");
            resposta.innerHTML = "<span style='color:#FF0000'> IMC: " + imc.toFixed(2) + "<br> Baixo Peso Leve </span>";    
        }
        else if (imc > 16.0){
            var resposta = document.getElementById("recebeImc");
            resposta.innerHTML = "<span style='color:#FF0000'> IMC: " + imc.toFixed(2) + "<br> Baixo Peso Moderado </span>";    
        }
        else {
            var resposta = document.getElementById("recebeImc");
            resposta.innerHTML = "<span style='color:#FF0000'> IMC: " + imc.toFixed(2) + "<br> Baixo Peso Severo </span>";    
        }
    }
    else {
        var resposta = document.getElementById("recebeImc");
        resposta.innerHTML = "<span style='color:#FF0000'> Peso/Altura inválida. </span>";
    }
}