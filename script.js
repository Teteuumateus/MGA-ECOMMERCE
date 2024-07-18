document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os elementos com a classe .Product
    const products = document.querySelectorAll('.Product');

    // Itera sobre cada produto
    products.forEach(product => {
        // Cria o botão de compra
        const buyButton = document.createElement('button');
        buyButton.textContent = 'Comprar';
        buyButton.classList.add('product-buy-button');

        // Insere o botão abaixo do preço do produto
        const productPrice = product.querySelector('.product-price');
        productPrice.insertAdjacentElement('afterend', buyButton);
    });
});

