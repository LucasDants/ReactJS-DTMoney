import { Container } from "./styles";

export function TransactionsTable() {
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