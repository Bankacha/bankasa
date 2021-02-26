import { Card, Button } from 'react-bootstrap';
import '../../styles/billCreate/productCard.css'

export function ProductCard() {

    return (
        <div className='productCard'>
            <Card type='button'>
                <Card.Img variant="info" src="https://64.media.tumblr.com/490a0a827a79f7ff31f2a5e9fc73d911/tumblr_onzvzwhoX51r04068o2_1280.png" />
                <Card.Body className='cardBody'>
                    <h7><strong>Product Name - Price</strong></h7>
                </Card.Body>
            </Card>
        </div>

    )
}