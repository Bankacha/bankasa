import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Filter() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    console.log(startDate)
    console.log(endDate)

    return (
        <Col sm={12}>
            <Row className='d-flex align-items-center py-2 m-0 bg-secondary'>

                <Col sm={4} className='d-flex align-items-center'>
                    Start Date: &nbsp; <DatePicker
                        className='bg-primary text-light'
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        isClearable />
                </Col>
                <Col sm={4} className='d-flex align-items-center'>
                    End Date: &nbsp; <DatePicker
                        className='bg-primary text-light'
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        isClearable />
                </Col>
                <Col sm={2} className='d-flex align-items-center'>
                    Waiter: <Form.Control size='sm' as='select'>
                        <option>All</option>
                        <option>Jeca</option>
                        <option>Meca</option>
                        <option>Peca</option>
                    </Form.Control>
                </Col>
                <Col sm={2}>
                    <Button className='w-100 bg-primary' size='sm'>Show</Button>
                </Col>
            </Row>
        </Col>
    )
}