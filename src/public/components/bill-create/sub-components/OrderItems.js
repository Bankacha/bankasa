import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { deleteOrderItem } from '../../../../store/actions';
import { IoAddCircleOutline } from "react-icons/io5";
import { useState } from 'react';
import { BiX } from "react-icons/bi";
import { getOrderItems } from '../../../../store/selectors';

export function OrderItems(props) {

    const dispatch = useDispatch();
    const [clicked, setClicked] = useState(false);

    const orderItems = useSelector(getOrderItems);

    const multiply = (price, quantity) => {
        return price * quantity
    }

    const deleteItem = (idx) => {
        dispatch(deleteOrderItem(idx))
    }
    return (
        <Col className="h-100 overflow-auto px-3">
            {
                orderItems.length ? orderItems.map((o, i) => {
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
                                {multiply(o.quantity, o.product.price)}
                            </Col>
                            <Col onClick={() => deleteItem(o)} sm={1} className="text-left" type='button'>
                                <BiX size='1.5em' />
                            </Col>
                        </Row>
                    )
                }) : (<Row>
                    <Col className='text-center'>
                        <IoAddCircleOutline onClick={() => setClicked(true)} className="text-light mt-5" size='5em'></IoAddCircleOutline>
                        {
                            clicked ? <h5 className="text-light my-2">no, no, click on item</h5> : <h5 className="text-light my-2">your order</h5>
                        }

                    </Col>
                </Row>)
            }
        </Col>
    )
}