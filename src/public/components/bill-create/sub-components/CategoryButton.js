import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { deactivateCategory, setActiveCategory } from "../../../../store/actions";
import { getActiveCategory } from "../../../../store/selectors";

export function CategoryButton({ category }) {

    const dispatch = useDispatch()
    const activeCategory = useSelector(getActiveCategory)

    const isActive = activeCategory && category.value === activeCategory.value;

    const colorClasses = isActive ? 'bg-danger text-light' : 'bg-light text-dark';

    const handleClick = (category) => {
        isActive ? dispatch(deactivateCategory(category)) : dispatch(setActiveCategory(category))
    }
    return (
        <Col xs={6} sm={4} md={3} lg={2} className="align-self-end">
            <Row>
                <Col
                    onClick={() => handleClick(category)}
                    className={`c-pointer p-3 m-2 mx-4 text-center rounded shadow-sm ${colorClasses}`}>
                    {category.name}
                </Col>
            </Row>
        </Col>
    )
}
