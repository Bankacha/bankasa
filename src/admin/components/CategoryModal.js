import { useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { pushNotification } from "../../notifications";
import { createCategory, editCategory } from "../../store/actions";

export const CategoryModal = (props) => {

    const dispatch = useDispatch()

    const { register, handleSubmit, errors, reset, setValue } = useForm({
        defaultValues: {
            category: null
        }
    });

    useEffect(() => {
        if (props.isEditing) {
            setValue('category', `${props.category.name}`)
        }
    }, [props.isEditing, props.category?.name, setValue])

    const onSubmit = (data) => {
        if (props.isEditing) {
            const newData = { ...props.category, name: data.category }
            dispatch(editCategory(newData))
            pushNotification('', 'Category name is changed', 'info')
            props.closeModal()
        }
        if (props.isCreation) {
            const newData = {
                name: data.category,
                value: data.category.toLowerCase(),
                id: data.category.toLowerCase().replace(' ', '_')
            }
            dispatch(createCategory(newData))
            pushNotification('', 'New category successfully created!', 'success')
            reset()
        }
    }

    return (
        <Modal animation={false} show={props.show} onHide={props.onClose}>
            <Modal.Dialog className='w-100 p-2'>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.isEditing ? props.category?.name : 'Category name'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group>
                            <p>{props.isEditing ? 'Change Category name' : 'Enter Category name'}</p>
                            <Form.Control name='category' ref={register({ required: true })}></Form.Control>
                            <Form.Text className="text-danger">
                                {errors.category && "category name is required!"}
                            </Form.Text>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type='submit'>Save changes</Button>
                    </Modal.Footer>

                </Form>
            </Modal.Dialog>
        </Modal>
    )
}