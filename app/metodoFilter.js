const btn = document.querySelectorAll('.btn');
btn.forEach(e => e.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDiponiveis(livrosFiltrados)
        elementoValorTotalLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
          <p>Todos os livros disponíveis por R$ <span id="valor">R$ ${valorTotal}</span></p>
        </div>
    |`
    }
}

