import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend); /*ativar apenas o que eu quero utilizar da biblioteca*/

function GraficoGastos () {
        const data = {
            labels: ['Transporte', 'Lazer', 'Moradia', 'Alimentação', 'Saúde', 'Educação', 'Outros'],
            datasets: [
                {
                    data: [1000, 450, 300, 700, 1000, 250, 850],
                    backgroundColor: ['#00B0FF', '#7CB342', '#FFB300', '#8E24AA', '#7C4DFF', '#F50057', '#2979FF'],
                    borderWidth: 2,
                    borderColor: '#ffffff',
                },
            ],
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
            legend: {
                position: 'right',
                labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 15,
                    },
                },
         },
            cutout: '70%',
        };

        return (
            <div style={{ position: 'relative', width: '100%', height: '220px'}}>
                <Doughnut data={data} options={options}/>
            </div>

        )

     }

export default GraficoGastos;