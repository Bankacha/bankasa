import { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap"
import { useSelector } from "react-redux";
import { getCategories } from "../../store/selectors";
import { CategoryModal } from "./CategoryModal";

export const CategoryPage = () => {

    const categories = useSelector(getCategories);

    const [editing, setEditing] = useState(false)
    const [forEdit, setForEdit] = useState()
    const [creation, setCreation] = useState(false)

    const handleEdit = (category) => {
        setForEdit(category);
        setEditing(true)
    }
    const close = () => {
        setEditing(false)
        setCreation(false)
    }
    return (
        <div>
            <CategoryModal
                show={editing ? true : false || creation ? true : false}
                onClose={close}
                isEditing={editing}
                isCreation={creation}
                category={forEdit}
                closeModal={() => setEditing(false)}
            ></CategoryModal>

            <Row className="align-items-center justify-content-center mt-5">
                <Col sm={6} className='p-0'>
                    <Button onClick={() => setCreation(true)} className="w-100">Create new category</Button>
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
                                            <Button onClick={() => handleEdit(c)}>edit</Button>
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