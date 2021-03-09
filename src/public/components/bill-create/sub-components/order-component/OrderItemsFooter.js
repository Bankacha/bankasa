import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"


export function OrderItemsFooter() {

    const order = useSelector(state => state.products.order)

    const countOrderTotal = () => {
        let total = 0;
        order.forEach(element => {
            total += element.item.price * element.quantity
        });
        return total
    }

    return (
        <Col className="mx-2 w-100">
            <Row className="d-flex justify-content-between pt-2">
                <h5>Order Total : {countOrderTotal()}</h5>
                <p type="button">clear</p>
            </Row>
        </Col>
    )

}