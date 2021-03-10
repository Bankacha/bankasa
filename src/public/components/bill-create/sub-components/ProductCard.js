import {Col, Row} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setOrderItem } from '../../../../store/actions';

export function ProductCard(props) {

    const dispatch = useDispatch()

    const addItem = (item) => {
        dispatch(setOrderItem({
            product: item,
            quantity: 1
        }))
    }
    
    return (
        <Col xs={3}>
            <Row>
                <Col onClick={()=> addItem(props)} className="c-pointer p-3 m-2 mx-4 bg-dark text-center text-light rounded shadow-sm">
                    <p className="m-0 mb-2">{props.name}</p>
                    <p className="m-0">{props.price}</p>
                </Col>
            </Row>
        </Col>
    )
}
