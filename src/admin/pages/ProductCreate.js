import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../../store/actions";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { getCategories } from "../../store/selectors";

export const ProductCreate = () => {

    const dispatch = useDispatch()

    const categories = useSelector(getCategories)

    const { register, handleSubmit, watch, errors, reset } = useForm({
        defaultValues: {
            name: null,
            price: 0,
            category: categories[0].value
        }
    });

    const onSubmit = data => {

        dispatch(addNewProduct({ ...data, price: +data.price }));
        reset()
    }

    return (
        <Row className="h-100 bg-warning align-items-center justify-content-center">
            <Col sm={6}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Name" ref={register({ required: true })} />
                        {errors.name ? <span>This is invalid</span> : ''}
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Price</Form.Label>
                        <Form.Control name='price' type="number" placeholder="price" ref={register({ required: true })} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Category select</Form.Label>
                        <Form.Control name='category' as="select" defaultValue="pick one" ref={register({ required: true })}>
                            {
                                categories?.map((c, i) => <option value={c.value}>{c.name}</option>)
                            }

                        </Form.Control>
                    </Form.Group>


                    <Button variant="seccondary" className='w-100' type="submit">
                        Submit
                </Button>
                </Form>
            </Col>

        </Row>

    )
}