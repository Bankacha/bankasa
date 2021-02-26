import { Col, Row } from "react-bootstrap";
import { CategoryButton } from "../components/categoryButton";
import { Logo } from "../components/logo";
import '../../styles/billCreate/billCreateRows.css';
import '../../styles/billCreate/billCreateDiv.css';
import '../../styles/billCreate/billCreateLogo.css';
import '../../styles/billCreate/categoryButtons.css';
import '../../styles/billCreate/bill.css';
import '../../styles/billCreate/products.css'
import '../../styles/billCreate/billCreateColl.css'

import { ProductCard } from "../components/productCard";


export function BillCreate() {

    return (
        <div className='billCreateDiv'>
            <Row className='billCreateRow_1'>
                <Col className='billCreateLogo' sm={1}>
                    <Logo></Logo>
                </Col>
            </Row>
            <Row className='billCreateRow_2'>
                <Col md={9} className='billCreateColl'>
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
                    <div className='productsList'>
                        <div className='products'>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className='productsCol'>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='bill'>
                    <Row className='w-100'>
                        <Col><input></input></Col>
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