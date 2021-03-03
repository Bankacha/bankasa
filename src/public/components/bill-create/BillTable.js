import { Row, Table, Col } from "react-bootstrap";

export function BillTable() {

    return (
            <Row>
                <Col className="w-100 h-100 position-absolute overflow-auto px-3">
                    <Table striped hover size="sm" variant=''>
                        <tbody className="text-light">
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            

                        </tbody>
                    </Table>
                </Col>

            </Row>

    )
}