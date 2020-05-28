import React from 'react';

import './styles.css';

function Table() {
    return (
        <div>
            <table id="table_estatisticas">
                <tr>
                    <th className="col">Indicador</th>
                    <th className="col">Realizado</th>
                    <th className="col">Meta</th>
                    <th className="col">Desvio</th>
                </tr>
                <tr>
                    <td>Dias de Cocho</td>
                    <td>111</td>
                    <td>111</td>
                    <td className="green_cell">0</td>
                </tr>
                <tr>
                    <td>GMD (kg/dia)</td>
                    <td>1.579</td>
                    <td>1.500</td>
                    <td className="green_cell">0.079</td>
                </tr>
                <tr>
                    <td>GDC (kg)</td>
                    <td>1.006</td>
                    <td>0.957</td>
                    <td className="green_cell">0.048</td>
                </tr>
                <tr>
                    <td>CMS (%PV)</td>
                    <td>2.25</td>
                    <td>2.25</td>
                    <td className="green_cell">0.00</td>
                </tr>
                <tr>
                    <td>RC (%)</td>
                    <td>54.30%</td>
                    <td>54.11%</td>
                    <td className="green_cell">0.19%</td>
                </tr>
                <tr>
                    <td>Ef. Biológica</td>
                    <td>158.22</td>
                    <td>171.02</td>
                    <td className="green_cell">-10.45</td>
                </tr>
                <tr>
                    <td>Peso de Entrada (kg)</td>
                    <td>381.26</td>
                    <td>393.30</td>
                    <td className="red_cell">-12.04</td>
                </tr>
                <tr>
                    <td>Peso de Saída (kg)</td>
                    <td>555.87</td>
                    <td>542.69</td>
                    <td className="red_cell">-4.05</td>
                </tr>
                <tr>
                    <td>@ Produzida</td>
                    <td>7.41</td>
                    <td>7.09</td>
                    <td className="green_cell">0.32</td>
                </tr>
                <tr>
                    <td>Rendimento de Ganho (%)</td>
                    <td>63.69%</td>
                    <td>63.83%</td>
                    <td className="red_cell">-0.13%</td>
                </tr>
                <tr>
                    <td>Conversão Alimentar</td>
                    <td>6.73</td>
                    <td>7.21</td>
                    <td className="green_cell">-0.47</td>
                </tr>
            </table>
        </div>
    );
}

export default Table;
