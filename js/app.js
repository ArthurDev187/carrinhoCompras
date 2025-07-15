let valorTotal = 0
limpar()


function adicionar() {

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = parseInt(produto.split('R$')[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // agora preciso fazer a soma dos produtos

    let multProduto = quantidade * valorProduto;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${multProduto}</span>
        </section>`

    valorTotal += multProduto;

    let printTotal = document.getElementById('valor-total');
    printTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 1;
    }





function limpar() {
    document.getElementById('valor-total').textContent = 'R$ 0'
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('quantidade').value = 1
}