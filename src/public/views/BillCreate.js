import { Col, Row, Table, Button } from "react-bootstrap";
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
                    {/* <Row className='categoryButtons'>
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
                    </Row> */}
                    <div className='categoryDiv'>
                        <div className='categoryButtons'>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                            <div className=''>
                                <CategoryButton text='category'></CategoryButton>
                            </div>
                        </div>
                    </div>
                    <div className='productsList'>
                        <div className='products'>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                            <div className=''>
                                <ProductCard text='drink'></ProductCard>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='bill'>
                    <div className='info'>
                        <p>08:02</p>
                        <h6><strong>Waiter Name</strong></h6>
                    </div>
                    <div className='billTableDiv col'>
                        <Row className='billTable'>
                            <Table striped bordered hover size='sm' responsive>
                                <tbody>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                </tbody>

                            </Table>

                        </Row>

                    </div>
                    <div className='row orderTotal mt-3'>
                        <Col md={12}>
                            <div className='h5 text-right'>Order Total: <strong>2.540</strong></div>
                        </Col>
                        <Col className='text-center md-12'>
                            <Button className='mt-2 w-50' size='sm' variant='outline-secondary'>Confirm Order</Button>
                        </Col>
                    </div>

                    <div className='info text-center mt-3'>
                        <h6><strong>CURRENTLY ON TABLE</strong></h6>
                    </div>
                    <div className='billTableDiv col'>
                        <Row className='billTable currentlyOnTable'>
                            <Table striped bordered hover size='sm' responsive>
                                <tbody>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                    <tr>
                                        <td>koka kola</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>150</td>
                                    </tr>
                                    <tr>
                                        <td>kafa</td>
                                        <td className='text-center'>1</td>
                                        <td className='text-center'>110</td>
                                    </tr>
                                </tbody>
                                
                            </Table>
                        </Row>
                        
                    </div>
                    <div className='row orderTotal mt-3 text-right'>
                            <Col md={12}>
                                <div className='h4'> TOTAL: <strong> 5.720</strong></div>
                            </Col>
                        </div>
                    <div className='row mt-3 billButtons'>
                        <Col>
                            <Button size='sm' variant='outline-secondary' className='w-100'>Print Pre-Bill</Button>
                        </Col>
                        <Col>
                            <Button size='sm' variant='outline-secondary' className='w-100'>Charge</Button>
                        </Col>
                    </div>
                </Col>
            </Row>
        </div>
    )
}