//***código todin somente pra testar servidor***

console.log('oiiii')

function consultarCandidato() {
    const nomeCandidato = candidatoInput.value;

    fetch(`/consultarCandidato?nome=${nomeCandidato}`)
        .then(response => response.json())
        .then(data => {
            mostrarResultado(data);
        })
        .catch(error => console.error('Erro na solicitação AJAX:', error));
}

const candidatoInput = document.getElementById('candidatoInput');
const resultadoContainer = document.getElementById('resultadoContainer');

const consultarCandidatoBtn = document.getElementById('consultarCandidatoBtn');
consultarCandidatoBtn.addEventListener('click', consultarCandidato);

function mostrarResultado(candidato) {
    resultadoContainer.innerHTML = `
        <p>Nome: ${candidato.nome}</p>
        <p>Cargo: ${candidato.cargo}</p>
        <p>Votação: ${candidato.votacao}</p>
        <p>Status: ${candidato.status === 1 ? 'Eleito' : 'Não Eleito'}</p>
    `;
}

function consultarCandidato() {
    const nomeCandidato = candidatoInput.value;
    const candidato = obterDadosDoBanco(nomeCandidato);

    mostrarResultado(candidato);
}

function obterDadosDoBanco(nomeCandidato) {
    return {
        nome: 'Nome do Candidato',
        cargo: 'Cargo do Candidato',
        votacao: 12345,
        status: 1,
    };
}
