import { CategoryButton } from '../bill-create/sub-components/CategoryButton';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getCategories } from '../../../store/selectors';

export function Categories() {

    const categories = useSelector(getCategories)

    return (
        <Col className='h-100 overflow-auto'>
            <Row className="h-100">
                {
                    categories.map((c, i) => <CategoryButton key={i} category={c} />)
                }
            </Row>
        </Col>
    )
}