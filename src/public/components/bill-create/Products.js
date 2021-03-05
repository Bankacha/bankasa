import { ProductCard } from "./sub-components/ProductCard"
import { Row, Col } from "react-bootstrap"
import { useSelector } from "react-redux"

export function Products() {

    // const products = useSelector(s=>s.products.data)

    // console.log(products)

    return (
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
    )
}