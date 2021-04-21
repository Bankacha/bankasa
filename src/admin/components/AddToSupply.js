import { Col, FormControl, Row } from "react-bootstrap";
import { IoAddCircle } from "react-icons/io5";
import { addToStock } from "../../store/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import React from "react";

export function AddToSupply(props) {

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState('');

    const handleAdd = (quantity, id) => {
        if (quantity !== '') {
            dispatch(addToStock({ quantity, id }))
            setQuantity('')
        }
    }

    return (
        <Row className='justify-content-center'>
            <Col sm={3}>
                <FormControl onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity} type='number'></FormControl>
            </Col>
            <Col sm={2}>
                <IoAddCircle onClick={() => handleAdd(quantity, props.id)} size='2em' />
            </Col>
        </Row>
    )
}