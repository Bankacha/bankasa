import { Col, Row, Form } from "react-bootstrap";
import '../../styles/loginPage/verticalLine.css';
import '../../styles/loginPage/loginBackground.css';
import '../../styles/loginPage/loginForm.css';
import { CustomButton } from "../components/customButton";
import '../../styles/loginPage/adminLoginBtn.css';
import '../../styles/loginPage/loginPageRow.css';
import { Logo } from "../components/logo";
import '../../styles/loginPage/loginPageLogoPosition.css';


export function LoginPage() {

    return (
        <Row className='loginPageRow'>
            <Col className='loginBackground' md={9}>
                <div className='adminLoginBtnDiv mt-1'>
                    <CustomButton className='adminLoginBtn' text='admin'></CustomButton>
                </div>
                <Form className='w-50 loginForm'>
                    <Form.Group className='row'>
                        <Col md={10}>
                            <Form.Control />
                        </Col>
                        <Col md={2}>
                            <CustomButton text="login"></CustomButton>
                        </Col>
                    </Form.Group>
                </Form>
            </Col>
            <Col className='verticalLine' md={3}>
                <Row className='loginPageLogoPosition_1'>
                    <Col className='loginPageLogoPosition_2'>
                        <Logo></Logo>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
