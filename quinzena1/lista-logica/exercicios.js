// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro numero')
  const num2 = prompt('Digite o segundo numero')

  console.log(Number(num1) * Number(num2))
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro numero')
  const num2 = prompt('Digite o segundo numero')

  console.log(Number(num1) - Number(num2))
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = Number(prompt('Digite seu peso em KG'))
  const altura = Number(prompt('Digite sua altura em metros'))
  const imc = peso/(altura*altura)

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nomeDoUsuario = prompt('Digite o seu nome')
  const idadeDoUsuario = Number(prompt('Digite sua idade'))
  const emailDoUsuario = prompt('Digite o seu email')

  console.log (`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const corA = prompt('Digite sua cor favorita')
  const corB = prompt('Digite outra cor favorita')
  const corC= prompt('Digite sua ultima cor favorita')

  const frasecompleta = [corA, corB, corC]
  console.log (frasecompleta)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const frase = prompt('Digite oi')

  console.log(frase.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const num1 = Number(prompt('Digite o custo do espetaculos'))
  const num2 = Number(prompt('Digite o valor do ingresso'))

  console.log(num1 / num2)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  let anoAtual =  prompt("qual ano atual")
  let nascimento = prompt("sua data de nascimento")
  let anoEmissao = prompt("ano da emissao da carteira")
  let idade = anoAtual - nascimento
  let anoRG = anoAtual - anoEmissao 
  console.log((idade <= 20 && anoRG >= 5 ) || ((idade > 20 && idade < 50) && anoRG >= 10) || (idade >= 50 && anoRG >= 15))
 }


// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
}