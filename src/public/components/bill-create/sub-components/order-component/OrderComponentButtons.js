import { Row, Col, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { saveAndPrintOrder } from "../../../../../store/actions"
import { chargeBill } from "../../../../../store/actions"

export function OrderComponentButtons() {

    const dispatch = useDispatch()

    return (
        <Row className="justify-content-around m-0">
            <Col sm={6}>
                <Button onClick={() => dispatch(saveAndPrintOrder())} className="w-100" variant='outline-light'>Print &amp; Save</Button>
            </Col>
            <Col sm={6}>
                <Button onClick={() => dispatch(chargeBill())} className="w-100" variant='danger'>Charge</Button>
            </Col>
        </Row>
    )
}