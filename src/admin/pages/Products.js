import { useEffect, useState } from "react"
import { Table, Row, Col, Button, Form } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { deleteProduct } from "../../store/actions"
import { getProducts } from '../../store/selectors/products.selectors'

export const Products = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const products = useSelector(getProducts);

    const [search, setSearch] = useState(products)

    const searchProducts = (event) => {
        const filtered = products.filter(product => product.name.toLowerCase().includes(event.toLowerCase()))
        setSearch(filtered)
    }

    useEffect(() => {
        setSearch(products)
    },[products])

    return (
        <div className="row mt-1">
            <Col className="my-3">
                <Row>
                    <Col sm={12}>
                        <Row className="p-0 m-auto justify-content-around">

                            <Col className="offset-sm-8 p-0 mb-3" sm={2}>
                                <Form.Control placeholder='Search' onChange={(e) => searchProducts(e.target.value)} size='sm'></Form.Control>
                            </Col>

                            <Col sm={10} className="c-pointer rounded bg-dark text-light text-center">
                                <Link to='create' className='link'><h5 className="m-0 my-1">add new product</h5></Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={12} className="mt-3">
                        <Row className="justify-content-around">
                            <Col sm={10}>
                                <Table striped bordered hover size="sm" variant='light' className="m-0 my-1">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            search.map((p, i) => {
                                                return (
                                                    <tr key={p.id}>
                                                        <td>{i + 1}</td>
                                                        <td>{p.id}</td>
                                                        <td>{p.name}</td>
                                                        <td>{p.category}</td>
                                                        <td>{p.price}</td>
                                                        <td><Button onClick={() => history.push(`${p.id}`)}>edit</Button></td>
                                                        <td><Button onClick={() => dispatch(deleteProduct(p.id))}>del</Button></td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </Table>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Col>
        </div >
    )
}
