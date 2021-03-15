import { Row, Col, Form, Card, Button } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/selectors";

export const CategoryPage = () => {

    const categories = useSelector(getCategories);

    const { register, handleSubmit, errors, reset, setValue } = useForm({
        defaultValues: {
            category: categories[0].value
        }
    });

    return (
        <div>
            <Row className="align-items-center justify-content-center mt-5">
                <Col sm={6} className='p-0'>
                    <Button className="w-100">Add new category</Button>
                </Col>
            </Row>
            <Row className="align-items-center justify-content-center mt-3">
                <Col sm={6} className="p-3 bg-white rounded shadow-sm">
                    {
                        categories?.map((c, i) => {
                            return (
                                <Card key={i} className="my-2">
                                    <Row className=" align-items-center">
                                        <Col sm={10} >
                                            <Card.Body value={c.value}>{c.name}</Card.Body>
                                        </Col>
                                        <Col sm={2}>
                                            <Button>edit</Button>
                                        </Col>
                                    </Row>
                                </Card>
                            )
                        })
                    }
                </Col>
            </Row>
        </div>

    )
}