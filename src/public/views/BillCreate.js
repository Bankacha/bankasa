import { Col, Row } from "react-bootstrap";
import '../../styles/billCreate/billCreateRows.css';
import '../../styles/billCreate/billCreateDiv.css';
import { Logo } from "../components/logo";
import '../../styles/billCreate/billCreateLogo.css';
import { CategoryButton } from "../components/categoryButton";
import '../../styles/billCreate/categoryButtons.css';
import '../../styles/billCreate/bill.css';
import '../../styles/billCreate/drinks.css'


export function BillCreate() {

    return (
        <div className='billCreateDiv'>
            <Row className='billCreateRow_1'>
                <Col className='billCreateLogo' sm={1}>
                    <Logo></Logo>
                </Col>
            </Row>
            <Row className='billCreateRow_2'>
                <Col md={9}>
                    <Row className='categoryButtons'>
                        <Col>
                            <CategoryButton text='category'></CategoryButton>
                        </Col>
                        <Col>
                            <CategoryButton text='category'></CategoryButton>
                        </Col>
                        <Col>
                            <CategoryButton text='category'></CategoryButton>
                        </Col>
                        <Col>
                            <CategoryButton text='category'></CategoryButton>
                        </Col>
                        <Col>
                            <CategoryButton text='category'></CategoryButton>
                        </Col>
                        <Col>
                            <CategoryButton text='category'></CategoryButton>
                        </Col>
                        <Col>
                            <CategoryButton text='category'></CategoryButton>
                        </Col>
                    </Row>
                    <div className='drinksList'>
                        <Row className='drinks'>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                        </Row>
                        <Row className='drinks'>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                        </Row>
                        <Row className='drinks'>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                            <Col className='drinksCol'>
                                <CategoryButton text='drink'></CategoryButton>
                            </Col>
                        </Row>
                    </div>

                </Col>
                <Col className='bill'>
                    <Row>
                        <Col>bla bla</Col>
                    </Row>
                    <Row>
                        <Col>bla bla</Col>
                    </Row>
                    <Row>
                        <Col>bla bla</Col>
                    </Row>
                    <Row>
                        <Col>bla bla</Col>
                    </Row>
                </Col>
            </Row>



        </div>
    )
}