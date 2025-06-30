const container = document.getElementById("container");

perguntas.forEach(({ materia, pergunta, resposta }) => {
  const card = document.createElement("div");
  card.classList.add("cartao");

  const conteudo = document.createElement("div");
  conteudo.classList.add("cartao__conteudo");

