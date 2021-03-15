import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../../store/actions";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { getCategories } from "../../store/selectors";
import { useParams } from "react-router";
import { getProducts } from "../../store/selectors/products.selectors";
import { useEffect } from "react";

export const ProductCreate = ({ type }) => {

    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const products = useSelector(getProducts);
    const params = useParams();

    const productToEdit = products.find(product => product.id === params?.id)

    useEffect(() => {
        if (type === 'edit') {
            setValue('name', `${productToEdit.name}`)
            setValue('price', `${productToEdit.price}`)
            setValue('category', `${productToEdit.category}`)
        } 
    }, [])

    const { register, handleSubmit, watch, errors, reset, setValue } = useForm({
        defaultValues: {
            name: null,
            price: null,
            category: categories[0].value
        }
    });

    console.log(type, params.id, productToEdit)

    const onSubmit = data => {
        dispatch(addNewProduct({ ...data, price: +data.price }));
        reset()
    }

    return (
        <Row className="align-items-center justify-content-center mt-5">
            <Col sm={6} className="p-3 bg-white rounded shadow-sm">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className=''>
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Name" ref={register({ required: true })} />
                        <Form.Text className="text-danger">
                            {errors.name && "product name is required!"}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className=''>
                        <Form.Label>Price</Form.Label>
                        <Form.Control className='' name='price' type="number" placeholder="price" ref={register({ required: true })} />
                        <Form.Text className="text-danger">
                            {errors.price && "product name is required!"}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className=''>
                        <Form.Label>Category select</Form.Label>
                        <Form.Control name='category' as="select" ref={register({ required: true })}>
                            {
                                categories?.map((c, i) => <option key={i} value={c.value}>{c.name}</option>)
                            }
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" className='w-100 my-3' type="submit">
                        Submit
                        </Button>
                </Form>
            </Col>
        </Row>
    )
}
