import { CategoryButton } from '../bill-create/sub-components/CategoryButton'
import { Row, Col } from 'react-bootstrap'

export function Categories() {

    return (
        <Col>
            <Row className="h-100">
                <CategoryButton>Category</CategoryButton>
                <CategoryButton>Category</CategoryButton>
                <CategoryButton>Category</CategoryButton>
                <CategoryButton>Category</CategoryButton>
                <CategoryButton>Category</CategoryButton>
                <CategoryButton>Category</CategoryButton>
                <CategoryButton>Category</CategoryButton>
                <CategoryButton>Category</CategoryButton>
                <CategoryButton>Category</CategoryButton>
            </Row>
        </Col>
    )
}