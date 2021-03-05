import { ProductCard } from "./sub-components/ProductCard"
import { Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setOrderItem } from "../../../store/actions"

export function Products() {

    const dispatch = useDispatch()
    const products = useSelector(s => s.products.products)

    const addItem = (item) => {
        // dispatch(setOrderItem({
        //     item,
        //     quantity: 1
        // }))
        return console.log("baki",item)
    }

    return (
        <Col className="bg-light pt-4">
            <Row className="justify-content-center">
                {
                    (products || []).map((p, i) => {
                        return (
                            <ProductCard onClick={()=> addItem(p)} key={i} name={p.name} price={p.price} />
                        )
                    })
                }
            </Row>
        </Col>
    )
}