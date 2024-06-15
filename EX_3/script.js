/*Adicionar um Arquivo JavaScript:
Crie um arquivo JavaScript e adicione a lógica de interação com o usuário. Utilize o prompt para pedir ao usuário que insira o nome e o confirm para perguntar se ele quer continuar com a interação.
Testar a Aplicação:
Abra o arquivo HTML no navegador e clique no botão para ver a sequência de prompts e confirms.
Resultado Esperado:
Interação com prompt:
Quando o botão for clicado, o navegador deve exibir uma janela de prompt pedindo ao usuário para inserir seu nome.
Interação com confirm:
Após o usuário inserir o nome, o navegador deve exibir uma janela de confirmação perguntando se o usuário deseja continuar.
Resposta com base nas Escolhas do Usuário:
Se o usuário confirmar, uma mensagem de continuação será exibida.
Se o usuário cancelar, uma mensagem de encerramento será exibida.
Se o usuário não inserir um nome no prompt inicial, uma mensagem de erro será exibida.
*/

// Código do arquivo script.js

let botao = document.getElementById("btn");

botao.addEventListener("click", function () {
  let nome = prompt("Qual é o seu nome?");

  if (nome === null || nome === "") {
    alert("Erro!!! Campo nome vazio.")
    return botao.click();
  }
  let confirmacao = confirm("Você deseja continuar?");

  if (confirmacao === true) {
    alert("Você escolheu continuar.");
  
  } else {
    alert("Você escolheu cancelar.");
  }
});


// let nome = prompt("Qual é o seu nome?");
// let confirmacao = confirm("Você deseja continuar?");


// if (nome === null) {
//   alert("Você não inseriu um nome.");
// }
// if (confirmacao) {
//     alert("Você escolheu continuar.");
//     }
// else {
//     alert("Você escolheu cancelar.");
//     }
