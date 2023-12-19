const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Absolutamente!",
  "Talvez, quem sabe?",
  "As chances são favoráveis.",
  "Não vejo isso acontecendo.",
  "Certamente não.",
  "Estou inclinado a concordar.",
  "Não muito provável.",
  "Sim, sem sombra de dúvidas.",
  "Não apostaria nisso.",
  "As estrelas indicam que sim.",
  "Improvável.",
  "Indubitavelmente.",
  "Não posso confirmar nem negar.",
  "Pode contar com isso.",
  "A resposta está nas entrelinhas.",
  "Não tenho uma resposta clara.",
  "Sem dúvida alguma!",
  "Prefiro não opinar.",
  "Estou propenso a discordar.",
  "Os dados sugerem que sim.",
  "Melhor não contar com isso.",
  "É uma possibilidade real.",
  "Não aposte todas as fichas nisso.",
  "Não vejo razão para duvidar.",
  "Não posso afirmar com certeza.",
  "Estou propenso a concordar.",
  "As circunstâncias apontam para não.",
  "É uma incógnita.",
  "Não estou convencido.",
  "A probabilidade é alta.",
  "Eu diria que sim.",
  "Não confiaria nisso completamente.",
  "Não parece promissor.",
  "Estou otimista quanto a isso.",
  "Não se pode ter certeza.",
  "A resposta está nas estrelas.",
  "Não coloque muita fé nisso.",
  "Seria arriscado assumir isso.",
  "Absolutamente certo!",
  "Nem pense nisso.",
  "A probabilidade é baixa.",
  "Pode apostar que sim!",
  "Não se iluda.",
  "A resposta não é clara.",
  "Parece promissor.",
  "Não vejo razão para otimismo.",
  "Não descarte a possibilidade.",
  "A resposta está no horizonte.",
  "Não apostaria minha vida nisso.",
  "Confiante, sim!",
  "Não aposte alto nisso.",
  "As chances são remotas.",
  "Não subestime essa possibilidade.",
  "Estou dividido quanto a isso.",
  "Sim, mas com cautela.",
  "Não vejo razão para pessimismo.",
  "A probabilidade está a seu favor.",
  "Não vejo isso acontecendo em breve.",
  "Parece duvidoso.",
  "Pode ser uma surpresa.",
  "Não aposte contra isso.",
  "Não se pode ter certeza absoluta.",
  "Os indícios sugerem que sim.",
  "Não descarte totalmente.",
  "Eu apostaria nisso.",
  "Estou inclinado a concordar contigo.",
  "A resposta está no ar.",
  "Não aposte contra as probabilidades.",
  "As chances estão a seu favor.",
  "A resposta está escondida nas entrelinhas.",
  "Talvez em um futuro distante.",
  "Pode ser mais complicado do que parece.",
  "Não é impossível.",
  "A resposta está flutuando no desconhecido.",
  "Eu não apostaria nisso agora.",
  "As perspectivas são incertas.",
  "Não dê como garantido.",
  "Os ventos sopram a favor.",
  "Estou otimista, mas cauteloso.",
  "Não é tão simples assim.",
  "Não seria surpreendente.",
  "Pode ser uma reviravolta inesperada.",
  "A resposta está além do horizonte."
]

// clicar em fazer pergunta
function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}