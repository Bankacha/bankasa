import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../../store/actions";
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { getCategories } from "../../store/selectors";
import { useHistory, useParams } from "react-router";
import { getProducts } from "../../store/selectors/products.selectors";
import { useEffect } from "react";
import { editProduct } from "../../store/actions";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export const ProductPage = ({ type }) => {

    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const products = useSelector(getProducts);
    const params = useParams();
    const history = useHistory();

    const { register, handleSubmit, errors, reset, setValue } = useForm({
        defaultValues: {
            name: null,
            price: null,
            category: categories[0].value
        }
    });

    useEffect(() => {
        if (type === 'edit') {
            const productToEdit = products.find(product => product.id === params?.id)
            setValue('name', `${productToEdit?.name}`)
            setValue('price', `${productToEdit?.price}`)
            setValue('category', `${productToEdit?.category}`)
        }

    }, [type, params, setValue, products])

    const onSubmit = data => {
        if (type === 'create') {
            dispatch(addNewProduct({ ...data, price: +data.price }));
            reset()
        }
        if (type === 'edit') {
            dispatch(editProduct({ ...data, id: params.id }))
            history.push('.')
        }
    }

    return (
        <Row className="align-items-start justify-content-center mt-5 pr-5">
            <Col sm={1} className="pl-5">
                <Link to='../products'>
                    <IoArrowBackCircle size='2.5em' />
                </Link>
            </Col>
            <Col sm={6} className="p-3 bg-white rounded shadow-sm">
                <Form onSubmit={handleSubmit(onSubmit)} data-netlify="true" >
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
