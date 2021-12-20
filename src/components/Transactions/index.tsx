import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {


    useEffect(() => {
        api.get('transactions').then(response => console.log(response.data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolver </td>
                        <td className="withdraw">- R$1200</td>
                        <td>Desenvolvimento</td>
                        <td>23/02/2010</td>
                    </tr>
                    <tr>
                        <td>Desenvolver </td>
                        <td className="deposit"> R$1200</td>
                        <td>Desenvolvimento</td>
                        <td>23/02/2010</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}