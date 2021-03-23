import { Col, Form, Row, Button } from "react-bootstrap";

export function Filter() {
    return (
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
                        <option>All</option>
                        <option>Jeca</option>
                        <option>Meca</option>
                        <option>Peca</option>
                    </Form.Control>
                </Col>
                <Col sm={2}>
                    <Button className='w-100' size='sm'>Show</Button>
                </Col>
            </Row>
        </Col>
    )
}