import './Dashboard.css' 
import GraficoGastos from './GraficoGastos'
import Transactionform from './Transactionform'
import { useState } from 'react'
import { agruparPorCategoria, filtrarPorPeriodo } from './utils'

function Dashboard (){
    const [transacoes, setTransacoes] = useState([])
    const [filtro, setFiltro] = useState('mes')

    function handleAdd(novaTransacao) {
        setTransacoes((atuais) => [...atuais, novaTransacao])
    }

    const transacoesFiltradas = filtrarPorPeriodo(transacoes, filtro)
    const dadosGrafico = agruparPorCategoria(transacoesFiltradas)

    return (
        <>
        <div className="dashboard">
            <div className="content">
                <div>
                    <h1>Dashboard</h1>
                </div>
                <div>
                    <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
                        <option value="semana">Semana</option>
                        <option value="mes">Mês</option>
                        <option value="ano">Ano</option>
                    </select>
                </div>
            </div>
            <div className="grafico">
                <GraficoGastos dados={dadosGrafico}/>
            </div>
        </div>
        <Transactionform onAdd={handleAdd} />
        </>
    )
}

export default Dashboard;
