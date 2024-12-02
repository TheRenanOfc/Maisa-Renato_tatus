const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasNaEducacao = (dados.total_pessoas_com_acesso_a_educacao / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_dia_estudando)
    const minutos = Math.round((dados.tempo_medio_dia_estudando - horas) * 60)
    const porcentagemEducacao = ((pessoasNaEducacao / pessoasNoMundo) * 100).toFixed(2);

    const pessoasNoSuperior = (dados.total_pessoas_com_educacao_superior / 1e9)
    const porcentagemSuperior = ((pessoasNoSuperior / pessoasNoMundo) * 100).toFixed(2);
    

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas, e que aproximadamente <span>${pessoasNaEducacao} bilhões</span> delas tiveram ou têm acesso à educação, passando, em média, <span>${horas} horas</span> e <span>${minutos} minutos</span> estudando, e que <span>${pessoasNoSuperior} bilhões</span> esteve em um curso superior?<br>Isso significa que aproximadamente <span>${porcentagemEducacao}%</span> da população tiverem acesso à educação, e que <span>${porcentagemSuperior}%</span> teve acesso ao ensino superior.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();