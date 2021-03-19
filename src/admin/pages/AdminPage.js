import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AdminButton } from "../components/AdminButton";

export function AdminPage() {

    return(
        <Row>
            <Col sm={12} className="mb-5">
                <Row className='bg-secondary text-dark align-content-center h-100 py-5'>
                    <Col xs={10}>
                        <h1 className="m-0 ml-5">Hi, Boss!</h1>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
            </Col>
            <Col sm={12} className="mt-5">
                <Row className="pr-5 mr-5 h-100 align-content-center justify-content-around">
                    <Link to='/admin/products'>
                        <Col className="mx-5" sm={12}>
                            <AdminButton className='bg-primary'>Products</AdminButton>
                        </Col>
                    </Link>
                    <Link to='/admin/categories'>
                        <Col className="mx-5 " sm={12}>
                            <AdminButton className='bg-primary'>Categories</AdminButton>
                        </Col>
                    </Link>
                    <Link to='/admin/accounting'>
                        <Col className="mx-5" sm={12}>
                            <AdminButton className='bg-primary'>Accounting</AdminButton>
                        </Col>
                    </Link>
                </Row>
            </Col>
        </Row>
    )
}