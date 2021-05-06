import moment from "moment";
import { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { setFilteredBills, setFilterRange } from "../../../store/actions";

export function Filter() {

    const dispatch = useDispatch();

    const startStateDate = moment().subtract(1, "days");

    const [startDate, setStartDate] = useState(startStateDate._d);
    const [endDate, setEndDate] = useState(new Date());

    const handleFilter = () => {
        const filter = {
            startDate,
            endDate
        }
        dispatch(setFilterRange(filter))
        dispatch(setFilteredBills())
    }

    return (
        <Col sm={12}>
            <Row className='d-flex align-items-center py-2 m-0 bg-secondary'>

                <Col sm={5} className='d-flex align-items-center'>
                    Start Date: &nbsp; <DatePicker
                        className='bg-primary text-light'
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        isClearable />
                </Col>
                <Col sm={5} className='d-flex align-items-center'>
                    End Date: &nbsp; <DatePicker
                        className='bg-primary text-light'
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        showTimeSelect
                        dateFormat="Pp"
                        isClearable />
                </Col>
                <Col sm={2}>
                    <Button onClick={() => handleFilter()} className='w-100 bg-primary' size='sm'>Show</Button>
                </Col>
            </Row>
        </Col>
    )
}