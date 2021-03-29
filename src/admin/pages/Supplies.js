import { Card, Row, Col, Accordion } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/selectors";
import { AddToSupply } from "../components/AddToSupply";

export function Supplies() {

    const products = useSelector(getProducts);

    return (
        <Row className="align-items-center justify-content-center h-85 mt-3">
            <Col sm={6} className="p-3 bg-white rounded shadow-sm overflow-auto h-100">
                {
                    products.map((p, i) => {
                        return (
                            <Accordion key={p.id} defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle eventKey="1">
                                        <Row className="align-items-center pr-2">
                                            <Col sm={8} className='text-left'>
                                                <Card.Body>{p.name}</Card.Body>
                                            </Col>
                                            <Col sm={4} className='text-right'>
                                                <Card.Body>{p.stock}</Card.Body>
                                            </Col>
                                        </Row>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>

                                            <AddToSupply id={p.id} />

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        )
                    })
                }
            </Col>
        </Row>
    )
}