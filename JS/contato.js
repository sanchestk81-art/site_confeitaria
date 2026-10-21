// Função disparada ao enviar o formulário
function cadastrar(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById("nome").value;
    const doce = document.getElementById("doce").value;

    alert(`Obrigado pelo pedido, ${nome}! Seu pedido de "${doce}" foi recebido com sucesso.`);
}

// Executa a busca quando o usuário digita os 8 números ou aperta Enter
function verificarTamanhoCEP(event) {
    const cepInput = event.target.value.replace(/\D/g, ''); // Remove traços/letras

    if (cepInput.length === 8 || event.key === "Enter") {
        buscarCEP();
    }
}

// Função principal de busca via API do ViaCEP
function buscarCEP() {
    const cepElemento = document.getElementById("cep");
    const cepValor = cepElemento.value.replace(/\D/g, ''); // Limpa caracteres não numéricos

    // Verifica se tem exatamente 8 dígitos
    if (cepValor.length !== 8) {
        return; 
    }

    // Elementos do formulário
    const logradouro = document.getElementById("logradouro");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const uf = document.getElementById("uf");

    // Indica visualmente que está buscando
    logradouro.value = "Carregando...";
    bairro.value = "Carregando...";
    cidade.value = "Carregando...";

    const url = `https://viacep.com.br/ws/${cepValor}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(dados => {
            if (dados.erro) {
                alert("CEP não encontrado! Verifique o número digitado.");
                logradouro.value = "";
                bairro.value = "";
                cidade.value = "";
                uf.value = "";
                return;
            }

            // Preenche os campos automaticamente
            logradouro.value = dados.logradouro;
            bairro.value = dados.bairro;
            cidade.value = dados.localidade;
            uf.value = dados.uf;
        })
        .catch(error => {
            console.error("Erro na busca do CEP:", error);
            alert("Erro ao buscar o CEP. Tente novamente.");
        });
}