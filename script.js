//Pegar um número aleatório entre 0 e 1000
var numeroSecreto = parseInt(Math.random() * 1001);
console.log(numeroSecreto); 
var tentativas = 4;

//se apertar enter no input chamar a função chutar
document.getElementById("chute").addEventListener("keyup", function(event) {
    if (event.code === "Enter") {
        Chutar();
    }
});

function Chutar(){
    var chute = parseInt(document.getElementById("chute").value); 
    
    if (isNaN(chute) || chute > 1000 || chute < 0) {
        document.getElementById("resultado").innerHTML = "Digite um número válido entre 0 e 1000!";
    } else {
        if (chute === numeroSecreto) {
            document.getElementById("resultado").innerHTML = "Você acertou! O número secreto é " + numeroSecreto + "!";
            document.getElementById("chute").disabled = true;
        } else {
            tentativas--;
            if (tentativas >= 0) {
                document.getElementById("resultado").innerHTML = "Você errou! O número secreto é " + (chute > numeroSecreto ? "menor" : "maior") + ". (Você tem " + tentativas + " tentativas restantes)";
            } else {
                document.getElementById("resultado").innerHTML = "Suas tentativas acabaram! O número secreto era " + numeroSecreto + ".";
                document.getElementById("chute").disabled = true;
            }
        }
    }
}