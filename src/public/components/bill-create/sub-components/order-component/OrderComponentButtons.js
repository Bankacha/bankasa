import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { saveAndPrintOrder } from "../../../../../store/actions"

export function OrderComponentButtons() {

    const dispatch = useDispatch()
    const order = useSelector(state => state.billing.order)
    const onTable = useSelector(state => state.billing.billItems)

    const saveOrder = (ord) => {
        return dispatch(saveAndPrintOrder(ord))
    }

    return (
        <Row className="justify-content-around m-0">
            <Col sm={6}>
                <Button onClick={()=> saveOrder(order)} className="w-100" variant='outline-light'>Print &amp; Save</Button>
            </Col>
            <Col sm={6}>
                <Button className="w-100" variant='danger'>Charge</Button>
            </Col>
        </Row>
    )
}