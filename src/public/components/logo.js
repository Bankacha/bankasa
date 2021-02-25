import '../../styles/customComponents/logo.css';
import '../../styles/customComponents/logoText.css';
import { Col, Image } from 'react-bootstrap';


export function Logo() {

    return (
        <Col>
            <Image src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/446.png" rounded fluid className='logo' />
            <h4 className='text-center mt-3 logoText'><strong><i>Bankasa</i></strong></h4>
        </Col>
    )
}