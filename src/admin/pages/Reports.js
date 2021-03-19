import { Col, Form, Row, Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getClosedBills } from "../../store/selectors/billing.selectors";

export function Reports() {

    const closedBills = useSelector(getClosedBills);

    console.log(closedBills)
    return (
        <Row>
            <Col>

                <Row className='mt-2'>
                    <Col sm={12}>
                        <Row className='d-flex align-items-center py-2 m-0 bg-secondary'>
                            <Col sm={3}>
                                <Form.Control size='sm' as='select'>
                                    <option>Yesterday</option>
                                    <option>Today</option>
                                </Form.Control>
                            </Col>
                            <Col sm={2} className='d-flex align-items-center'>
                                From:<Form.Control size='sm' placeholder='25/3/2021 - 14:22'></Form.Control>
                            </Col>
                            <Col sm={2} className='d-flex align-items-center'>
                                To: <Form.Control size='sm' placeholder='25/3/2021 - 18:46'></Form.Control>
                            </Col>
                            <Col sm={3} className='d-flex align-items-center'>
                                Waiter: <Form.Control size='sm' as='select'>
                                    <option>Jeca</option>
                                    <option>Meca</option>
                                    <option>Peca</option>
                                </Form.Control>
                            </Col>
                            <Col className='text-right'>
                                <Button size='sm'>Show</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}

                <Row className='mt-3 p-2 bg-secondary m-0'>
                    <Col sm={12} className='p-0'>
                        <Table striped bordered hover size="sm" className='bg-light m-0'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Waiter Name</th>
                                    <th>Check In</th>
                                    <th>Check Out</th>
                                    <th>Still Active</th>
                                    <th>Card</th>
                                    <th>Cash</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Jeca</td>
                                    <td>08:05</td>
                                    <td>16:20</td>
                                    <td>0</td>
                                    <td>15.200</td>
                                    <td>25.800</td>
                                    <td>41.000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Meca</td>
                                    <td>10:05</td>
                                    <td>18:30</td>
                                    <td>0</td>
                                    <td>10.200</td>
                                    <td>15.800</td>
                                    <td>36.000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Peca</td>
                                    <td>12:05</td>
                                    <td>/</td>
                                    <td>14.900</td>
                                    <td>1.200</td>
                                    <td>9.400</td>
                                    <td>10.600</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                {/* ------------------------------------------------------------------------------------------------------------- */}
                <Row>
                    <Col sm={8}>
                        <Row className='mt-3 p-2 bg-secondary m-0'>
                            <Col className='p-0'>
                                <Table striped bordered hover size="sm" className='bg-light m-0'>
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Time</th>
                                            <th>Table</th>
                                            <th>Total</th>
                                            <th>Active?</th>
                                            <th>Waiter Name</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>21322</td>
                                            <td>08:05</td>
                                            <td>5</td>
                                            <td>1.250</td>
                                            <td>No</td>
                                            <td>Jeca</td>
                                        </tr>
                                        <tr>
                                            <td>21322</td>
                                            <td>08:05</td>
                                            <td>5</td>
                                            <td>1.250</td>
                                            <td>No</td>
                                            <td>Meca</td>
                                        </tr>
                                        <tr>
                                            <td>21322</td>
                                            <td>08:05</td>
                                            <td>5</td>
                                            <td>1.250</td>
                                            <td>No</td>
                                            <td>Jeca</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>

                    <Col sm={4}>
                        <Row className='mt-3 p-2 bg-secondary m-0'>
                            <Col className='p-0'>
                                <Table striped bordered hover size="sm" className='bg-light m-0'>
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Pivo</td>
                                            <td>3</td>
                                            <td>140</td>
                                            <td>420</td>
                                        </tr>
                                        <tr>
                                            <td>Breskva</td>
                                            <td>2</td>
                                            <td>120</td>
                                            <td>240</td>
                                        </tr>
                                        <tr>
                                            <td>Vino</td>
                                            <td>4</td>
                                            <td>200</td>
                                            <td>800</td>
                                        </tr>
                                        <tr>
                                            <td>Radza</td>
                                            <td>3</td>
                                            <td>140</td>
                                            <td>420</td>
                                        </tr>
                                        <tr>
                                            <td>Ds</td>
                                            <td>2</td>
                                            <td>120</td>
                                            <td>240</td>
                                        </tr>
                                        <tr>
                                            <td>Vino</td>
                                            <td>4</td>
                                            <td>200</td>
                                            <td>800</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}