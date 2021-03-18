import { ProductCard } from "./sub-components/ProductCard";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setOrderItem } from "../../../store/actions";
import { getActiveCategory } from "../../../store/selectors";
import { getProducts } from "../../../store/selectors/products.selectors";

export function Products() {

    const dispatch = useDispatch()
    const products = useSelector(getProducts)
    const activeCategory = useSelector(getActiveCategory)

    const addItem = (product) => {
        dispatch(setOrderItem({
            product,
            quantity: 1
        }))
    }

    const newProducts = products.filter(product => activeCategory ? product.category === activeCategory.value : products)

    return (
        <Col className="bg-light pt-4">
            <Row className="justify-content-center">
                {
                    newProducts.map((p, i) => {
                        return (
                            <ProductCard onClick={() => addItem(p)} key={i} name={p.name} price={p.price} />
                        )
                    })
                }
            </Row>
        </Col>
    )
}