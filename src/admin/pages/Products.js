import { Table, Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"

export const Products = () => {

    const products = useSelector(state => state.products.products)
    console.log(products)

    return (
        <div className="h-100 bg-warning">
            <Row className="bg-primary h-5 text-light shadow-sm">
                <Col>
                    <h1>Bankasa</h1>
                </Col>
            </Row>
            <Row className="p-0 justify-content-center">
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((p, i) => {
                                    return (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{p.id}</td>
                                            <td>{p.name}</td>
                                            <td>{p.category}</td>
                                            <td>{p.price}</td>
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