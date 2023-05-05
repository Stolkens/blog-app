import { Form } from "react-router-dom";

const AddPostForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="enter title" />
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="enter author" />
        <Form.Label>Title</Form.Label>
        <Form.Control type="date" placeholder="enter date" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Short description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Leave a comment here"/>
        <Form.Label>Main content</Form.Label>
        <Form.Control as="textarea" rows={10} placeholder="Leave a comment here"/>
      </Form.Group>
    </Form>
  )
};

export default AddPostForm;