import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/educacao/educacao-etapas-de-ensino.json'
    const rest = await fetch(url)
    const dados = await rest.json()

    const nomeDasRedes = Object.keys(dados)
    const quantidadeUsuarios= Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: "Etapas de ensino e seus estudantes",
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30,
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: "Etapas de ensino",
                font: {
                    color: getCSS('--secundary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: "Estudantes ativos",
                font: {
                    color: getCSS('--secundary-color')
                }
            }
        }
    }
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}
 
quantidadeUsuarios()