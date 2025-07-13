let valorTotal = 0
document.getElementById('valor-total').textContent = 'R$ 0'
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('quantidade').value = 0



function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let multProduto = quantidade * valorProduto;

    // agora preciso fazer a soma dos produtos

    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${multProduto}</span>
        </section>`

    valorTotal += multProduto;

    let printTotal = document.getElementById('valor-total');
    printTotal.textContent = `R$ ${valorTotal}`;

}

function limpar() {
    
}