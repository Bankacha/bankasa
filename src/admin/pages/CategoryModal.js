import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editCategory } from "../../store/actions";
import { getCategories } from "../../store/selectors";

export const CategoryModal = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        if (props.isEditing) {
            setValue('category', `${props.category.name}`)
        }
    }, [props.isEditing])

    const { register, handleSubmit, errors, reset, setValue } = useForm({
        defaultValues: {
            category: null
        }
    });

    const onSubmit = (data) => {
        if (props.isEditing) {
            const newData = { ...props.category, name: data.category }
            dispatch(editCategory(newData))
        }
    }



    return (
        <Modal show={props.show} onHide={props.onClose}>

            <Modal.Dialog>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.category ? props.category?.name : 'Category name'}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form.Group className=''>
                            <p>{props.isEditing ? 'Change Category name' : 'Enter Category name'}</p>
                            <Form.Control name='category' ref={register()}></Form.Control>
                        </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary" type='submit'>Save changes</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Dialog>
        </Modal>

    )
}