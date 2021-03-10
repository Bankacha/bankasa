import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { clearOrder } from "../../../../../store/actions"


export function OrderItemsFooter() {

    const dispatch = useDispatch()
    const order = useSelector(state => state.billing.order)

    const countOrderTotal = () => {
        let total = 0;
        order.forEach(element => {
            total += element.product.price * element.quantity
        });
        return total
    }

    return (
        <Col className="mx-2 w-100">
            <Row className="d-flex justify-content-between pt-2">
                <h5>Order Total : {countOrderTotal()}</h5>
                <p onClick={() => dispatch(clearOrder())} type="button">clear</p>
            </Row>
        </Col>
    )

}