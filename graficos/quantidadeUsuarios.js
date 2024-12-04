import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-etapas-de-ensino.json'
    const rest = await fetch(url)
    const dados = await rest.json()

    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios = Object.values(dados)

    const data = [
        {
            labels: nomeDasRedes,
            values: quantidadeUsuarios,
            type: 'pie',
            marker: {
                colors: [
                    getCSS('--primary-color'),
                    getCSS('--secundary-color'),
                    getCSS('--tertiary-color'),
                    getCSS('--quaternary-color'),
                    getCSS('--quinary-color')
                ]
            },
            textinfo: 'label+percent', // Mostra o rótulo e a porcentagem
            insidetextorientation: 'radial' // Orientação do texto
        }
    ]

    const layout = {
        title: {
            text: "Distribuição de Estudantes por Etapa de Ensino",
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30,
            }
        },
        showlegend: true, // Mostra a legenda
        legend: {
            orientation: 'h', // Orientação horizontal da legenda
            x: 0.5,
            y: -0.2,
            xanchor: 'center',
            yanchor: 'top'
        },
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
    }
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuarios()
