// Esconder o botão de "Adicionar a Sacola" e alterar a cor do botão "Comprar"
document.querySelectorAll("button").forEach(button => {
    const label = button.querySelector('label');
    if (label && label.textContent.includes('Comprar Agora')) {
        button.style.backgroundColor = '#00b4d8';
    }
    if (label && label.textContent.includes('Adicionar à Sacola')) {
        button.style.display = 'none';
    }
});

// Desconto em REAL da diferença entre o preço de antes (PIX) e o atual da página do produto
function calculateAndDisplayDiscount() {
    const originalPriceElement = document.querySelector(".gBEKKZ");
    const discountedPriceElement = document.querySelector(".rExmp");
    const discountSpan = document.querySelector('span.sc-jdkBTo.dlUYpH');
    
    const originalPrice = parseFloat(originalPriceElement.textContent.replace('R$', '').replace('.', '').replace(',', '.'));
    const discountedPrice = parseFloat(discountedPriceElement.textContent.replace('R$', '').replace('.', '').replace(',', '.'));

    const discountAmount = originalPrice - discountedPrice;
    const discountText = discountSpan.textContent = `(R$ ${discountAmount.toFixed(2)} de desconto)`;   

    const discountFloatingBox = document.querySelector(".lkyyeb");
    discountFloatingBox.textContent = discountText;
    discountFloatingBox.style.color = '#63c132';
}

calculateAndDisplayDiscount();

// Alterar o botão "Adicionar à Sacola" pelo de "Comprar" e adicionar uma nova cor.
function configureFloatingBoxButtons() {
    document.querySelectorAll(".jOefwu").forEach(span => {
        span.style.backgroundColor = '#00b4d8';
    });

    const buttonContent = document.querySelectorAll("label");
    for (let label of buttonContent ) {
        if(label.textContent.includes("Adicionar à sacola")) {
            label.textContent = "COMPRAR";
        }
    }
}

configureFloatingBoxButtons(); 