import './Dashboard.css' 
import GraficoGastos from './GraficoGastos'

function Dashboard (){
    return (
        <div className="dashboard">
            <div className="content">
                <div>
                    <h1>Dashboard</h1>
                </div>
                <div>
                    <select>
                        <option value="semana">Semana</option>
                        <option value="mes">Mês</option>
                        <option value="ano">Ano</option>
                    </select>
                </div>
            </div>
            <div className="grafico">
                <GraficoGastos />
            </div>
        </div>
    )
}

export default Dashboard;
