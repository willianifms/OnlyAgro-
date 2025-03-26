// Variável para armazenar o nome do usuário
const userName = "Willian";


const produtos = [
    { id: 1, nome: "Produto 1", descricao: "Descrição do produto 1", preco: 49.99, imagem: "https://via.placeholder.com/300" },
    { id: 2, nome: "Produto 2", descricao: "Descrição do produto 2", preco: 99.99, imagem: "https://via.placeholder.com/300" },
    { id: 3, nome: "Produto 3", descricao: "Descrição do produto 3", preco: 79.99, imagem: "https://via.placeholder.com/300" }
];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("userName").textContent = userName;
    exibirProdutos(produtos); 
});

function exibirProdutos(lista) {
    const container = document.getElementById("produtos");
    container.innerHTML = "";
    lista.forEach(produto => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <h6 class="text-success">R$ ${produto.preco.toFixed(2)}</h6>
                        <button class="btn btn-primary w-100" onclick="adicionarAoCarrinho()">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>`;
        container.innerHTML += card;
    });
}

function filtrarProdutos() {
    const termo = document.getElementById("search").value.toLowerCase();
    const resultado = produtos.filter(produto => produto.nome.toLowerCase().includes(termo));
    exibirProdutos(resultado);
}

function adicionarAoCarrinho() {
    alert("O produto foi adicionado ao carrinho!");
}
