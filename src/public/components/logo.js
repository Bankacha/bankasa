import { Col, Image } from 'react-bootstrap';
import '../../styles/customComponents/logo.css';
import '../../styles/customComponents/logoText.css';


export function Logo() {

    return (
        <Col>
            <Image src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/446.png" className='logo' />
            <h4 className='text-center mt-3 logoText'><strong><i>Bankasa</i></strong></h4>
        </Col>
    )
}
