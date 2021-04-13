import { ProductCard } from "./sub-components/ProductCard";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getActiveCategory } from "../../../store/selectors";
import { getProducts } from "../../../store/selectors/products.selectors";

export function Products() {

    const products = useSelector(getProducts)
    const activeCategory = useSelector(getActiveCategory)

    const newProducts = products.filter(product => activeCategory ? product.category === activeCategory.value : products)

    return (
        <Col className="bg-light pt-4">
            <Row className="justify-content-center">
                {
                    newProducts.map((p, i) => {
                        return (
                            <ProductCard key={p.id} name={p.name} stock={p.stock} price={p.price} />
                        )
                    })
                }
            </Row>
        </Col>
    )
}