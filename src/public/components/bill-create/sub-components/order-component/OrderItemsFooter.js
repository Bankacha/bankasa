import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { clearOrder } from "../../../../../store/actions"
import { orderTotalSelector } from "../../../../../store/selectors"


export function OrderItemsFooter() {

    const dispatch = useDispatch()
    const total = useSelector(orderTotalSelector)

    return (
        <Col className="mx-2 w-100">
            <Row className="d-flex justify-content-between py-2">
                <h5>Order Total : {total}</h5>
                <p onClick={() => dispatch(clearOrder())} type="button">clear</p>
            </Row>
        </Col>
    )

}