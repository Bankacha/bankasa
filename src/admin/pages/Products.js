import { useEffect, useState } from "react"
import { Table, Row, Col, Button, Form } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { deleteProduct } from "../../store/actions"
import { getProducts } from '../../store/selectors/products.selectors'
import { IoPencilSharp, IoTrashSharp, IoSearchSharp } from "react-icons/io5";

export const Products = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const products = useSelector(getProducts);

    const [search, setSearch] = useState(products)
    const [newEvent, setNewEvent] = useState('')

    const localFilter = (products, event) => {
        return products.filter(product => product.name.toLowerCase().includes(event.toLowerCase()) || product.category.toLowerCase().includes(event.toLowerCase()))
    }
    
    const searchProducts = (event) => {
        setNewEvent(event)
        const filtered = localFilter(products, event)
        setSearch(filtered)
    }

    useEffect(() => {
        setSearch(localFilter(products, newEvent))
    }, [products])

    return (
        <div className="row mt-1">
            <Col className="my-3">
                <Row>
                    <Col sm={12}>
                        <Row className="p-0 m-auto justify-content-around">

                            <Col className="offset-sm-8 p-0 mb-3" sm={2}>
                                <Row>
                                    <Col sm={2}>
                                        <IoSearchSharp />
                                    </Col>
                                    <Col sm={10}>
                                        <Form.Control placeholder='Search' onChange={(e) => searchProducts(e.target.value)} size='sm'></Form.Control>
                                    </Col>
                                </Row>
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
                                            <th className='text-right'>Price</th>
                                            <th className='text-center'>Edit</th>
                                            <th className='text-center'>Delete</th>
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
                                                        <td className='text-right'>{p.price}</td>
                                                        <td className='text-center'><IoPencilSharp size='1.5em' onClick={() => history.push(`${p.id}`)} /></td>
                                                        <td className='text-center'><IoTrashSharp size='1.5em' onClick={() => dispatch(deleteProduct(p.id))} /></td>
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
