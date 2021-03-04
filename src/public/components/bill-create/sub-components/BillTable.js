import { Row, Table, Col } from "react-bootstrap";

export function BillTable() {

    return (
            <Row>
                <Col className="w-100 h-100 position-absolute overflow-auto">
                    <Table striped hover size="sm" variant=''>
                        <tbody className="text-light w-100 position-absolute px-3">
                            <tr className='row w-100'>
                                <td className='col-sm-7'>Mark</td>
                                <td className='col-sm-3'>2</td>
                                <td className='col-sm-2 text-right'>1.700,00</td>
                            </tr>
                            <tr className='row w-100'>
                                <td className='col-sm-7'>Mark</td>
                                <td className='col-sm-3'>3</td>
                                <td className='col-sm-2 text-right'>400,00</td>
                            </tr>
                            <tr className='row w-100'>
                                <td className='col-sm-7'>Mark</td>
                                <td className='col-sm-3'>4</td>
                                <td className='col-sm-2 text-right'>700,00</td>
                            </tr>
                            <tr className='row w-100'>
                                <td className='col-sm-7'>Mark</td>
                                <td className='col-sm-3'>2</td>
                                <td className='col-sm-2 text-right'>700,00</td>
                            </tr>
                            

                        </tbody>
                    </Table>
                </Col>

            </Row>

    )
}