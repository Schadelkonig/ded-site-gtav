/*
• Objetivo 1 - Quando o usuário clicar no botão de seleção de plataforma, deve abrir uma caixa com os botões de seleção de plataforma.
    > Passo 1 - Pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele.
    > Passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado.
    > Passo 3 - Pegar o clique do usuário no JS.
    > Passo 4 - Quando o usuário clicar no botão adicionar a classe "ativo" na listagem de plataformas, dentro do botão, para que o conteúdo dele apareça.

• Objetivo 2 - Caso a lista de botões de plataforma já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido.
    > Passo 1 - Verificar se o botão já está aberto, se sim, devemos remover a classe "ativo" para que ele esconda o conteúdo novamente.
*/

// > Passo 1 (Objetivo 1) - Pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele.
const botao = document.querySelector(".btn-plataforma");
// > Passo 2 (Objetivo 1) - Pegar o elemento do conteúdo que precisa ser mostrado.
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
// Passo 3 (Objetivo 1) - Pegar o clique do usuário no JS.
botao.addEventListener("click", () => {
// • Objetivo 2 - Caso a lista de botões de plataforma já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido.
const botaoEstaAberto = elementoPlataformas.classList.contains("ativo");
// > Passo 1 (Objetivo 2) - Verificar se o botão já está aberto, se sim, devemos remover a classe "ativo" para que ele esconda o conteúdo novamente.
    if(botaoEstaAberto) {
    elementoPlataformas.classList.remove("ativo");
    }else{
    // Passo 4. (Objetivo 1) - Quando o usuário clicar no botão adicionar a classe "ativo" na listagem de plataformas, dentro do botão, para que o conteúdo dele apareça.
    elementoPlataformas.classList.add("ativo");
    }
});

// IF e ELSE em apenas uma linha
/*

elementoPlatafromas.classList.toggle("ativo");

Deve se apagar a linha 19, pois não precisa mais dela depois de escrever IF e ELSE com uma linha.

*/