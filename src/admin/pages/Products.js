import { Table, Row, Col, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { deleteProduct } from "../../store/actions"

export const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)

    return (
        <div className="h-100 bg-warning row">
                <Col className="bg-primary h-5 text-light shadow-sm" sm={12}>
                    <h1>Bankasa</h1>
                </Col>
            <Row className="p-0 justify-content-center w-100">
                <Col sm={10}>
                    <Row className="m-auto">
                        <Col className="c-pointer rounded bg-dark my-2 text-light text-center">
                            <h5 className="m-0 my-1">add new product</h5>
                        </Col>
                    </Row>
                </Col>
                <Col sm={10} className="mt-3">
                    <Table striped bordered hover size="sm" variant='light'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((p, i) => {
                                    return (
                                        <tr key={p.id}>
                                            <td>{i + 1}</td>
                                            <td>{p.id}</td>
                                            <td>{p.name}</td>
                                            <td>{p.category}</td>
                                            <td>{p.price}</td>
                                            <td><Button onClick={() => dispatch(deleteProduct(p.id))}>del</Button></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div >
    )
}