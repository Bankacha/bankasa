import { Col, Row, Table } from "react-bootstrap"

export function CurrentBillInfo(props) {
    return (

        <Row className='mt-3 p-2 bg-secondary m-0 rounded h-100'>
            <Col className='p-0 h-100 overflow-auto'>
                <Table striped bordered hover size="sm" className='bg-light m-0'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (props.currentBill || []).map((c, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{c.product.name}</td>
                                        <td>{c.quantity}</td>
                                        <td>{c.product.price}</td>
                                        <td>{c.quantity * c.product.price}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}