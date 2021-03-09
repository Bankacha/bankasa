import { Row, Col, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { saveAndPrintOrder } from "../../../../../store/actions"

export function OrderComponentButtons() {

    const dispatch = useDispatch()
    const order = useSelector(state => state.products.order)
    const onTable = useSelector(state => state.products.onTable)

    const saveOrder = (order) => {
        dispatch(saveAndPrintOrder(order))
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