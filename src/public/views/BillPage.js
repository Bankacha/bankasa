import {Col, Row, Table, Button, Card} from "react-bootstrap";
import {ProductCard} from "../components/bill-create/ProductCard";
import {CategoryButton} from "../components/bill-create/CategoryButton";

export function BillPage() {

    return (
        <Row className='bg-light h-100'>
            <Col xs={8}>
                <Row className="h-25 bg-warning pb-3">
                    <CategoryButton>Pice</CategoryButton>
                    <CategoryButton>Pice</CategoryButton>
                    <CategoryButton>Pice</CategoryButton>
                    <CategoryButton>Pice</CategoryButton>
                    <CategoryButton>Pice</CategoryButton>
                    <CategoryButton>Pice</CategoryButton>
                </Row>
                <Row className="position-absolute h-75 bg-success overflow-auto w-100 pt-3">
                    <Col>
                        <Row className="justify-content-center">
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                            <ProductCard name="title" price={350.00}/>
                        </Row>
                    </Col>
                </Row>

            </Col>
            <Col className="bg-dark">
                <Row className="h-50">

                </Row>
                <Row className="h-50">

                </Row>
            </Col>

        </Row>
    )
}
