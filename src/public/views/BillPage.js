import { Col, Row, Button } from "react-bootstrap";
import { ProductCard } from "../components/bill-create/ProductCard";
import { CategoryButton } from "../components/bill-create/CategoryButton";
import { BillTable } from "../components/bill-create/BillTable";
import { OrderItem } from "../components/bill-create/OrderItem";

export function BillPage() {

    return (
        <div className="h-100">
            <Row className="bg-primary h-5 text-light shadow-sm"><h1>Bankasa</h1></Row>
            <Row className="bg-light h-95">
                <Col xs={8}>
                    <Row className="h-25 bg-warning pb-3">
                        <Col>
                            <Row className="h-50">

                            </Row>
                            <Row className="h-50">
                                <CategoryButton>Pice</CategoryButton>
                                <CategoryButton>Pice</CategoryButton>
                                <CategoryButton>Pice</CategoryButton>
                                <CategoryButton>Pice</CategoryButton>
                                <CategoryButton>Pice</CategoryButton>
                                <CategoryButton>Pice</CategoryButton>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="position-absolute h-75 overflow-auto w-100">
                        <Col className="bg-light pt-4">
                            <Row className="justify-content-center">
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                                <ProductCard name="title" price={350.00} />
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col className="bg-primary">
                    <Row className="h-50">
                        <Col className="h-85">
                            <Row>
                                <Col className="text-light h-5 mt-1">
                                    <h6>Waiter Name</h6>
                                </Col>
                            </Row>
                            <Row className="h-85">
                                <OrderItem></OrderItem>
                            </Row>
                            <Row className="h-15 text-light mt-1 align-self-center">
                                <Col className="text-center align-self-center h-50">
                                    <h5>Order Total: 500</h5>
                                </Col>
                                <Col className="text-center align-self-center" sm={3}>
                                    <Button variant='light' size="sm">clear</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="h-50">
                        <Col>
                            <Row className="h-80">
                                <Col>
                                    <BillTable></BillTable>

                                </Col>
                            </Row>
                            <Row className="text-light h-20">
                                <Col className="text-right" sm={12}>
                                    <Row>
                                        <Col className="text-right bg-light text-primary py-2">
                                            <h4 className="m-0">TOTAL: 2.800</h4>

                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="justify-content-around m-0">
                                        <Col sm={6}>
                                            <Button className="w-100" variant='outline-light'>Print &amp; Save</Button>
                                        </Col>
                                        <Col sm={6}>
                                            <Button className="w-100" variant='danger'>Charge</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>

    )
}
