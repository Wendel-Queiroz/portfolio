const botaoMostrasProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

console.log(botaoMostrasProjetos);
console.log(projetosInativos);

botaoMostrasProjetos.addEventListener('click', () => {
    projetosInativos.forEach(projetosInativo => {
        console.log(projetosInativo);
        projetosInativo.classList.add('ativo');
    });
    botaoMostrasProjetos.classList.add("remover");
})