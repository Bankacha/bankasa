import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { deleteOrderItem } from '../../../../store/actions';
import { getOrderItems } from '../../../../store/selectors';

export function OrderItems(props) {

    const dispatch = useDispatch();
    const orderItems = useSelector(getOrderItems);
    
    const multiply = (price, quantity) => {
        return price*quantity
    }

    const deleteItem = (idx) => {
        dispatch(deleteOrderItem(idx))
    }
    return (
        <Col className="h-100 overflow-auto px-3">
            {
                (orderItems ? orderItems : []).map((o, i) => {
                    return (
                        <Row key={i} className="bg-warning mx-1 mb-1 rounded">
                            <Col sm={6}>
                                {o.product.name}
                            </Col>
                            <Col sm={1} className="text-center">
                                {o.quantity}
                            </Col>
                            <Col sm={2} className="text-right">
                                {o.product.price}
                            </Col>
                            <Col sm={2} className="text-right">
                                {multiply(o.quantity,o.product.price)}
                            </Col>
                            <Col onClick={()=> deleteItem(o)} sm={1} className="text-left" type='button'>
                                -
                            </Col>
                        </Row>
                    )
                })
            }
        </Col>
    )
}