import Form from 'react-bootstrap/Form';
// The edit blog form will use the same css file as the 'CreateBlogForm' to style it.
import '../styling/components/CreateBlogForm.css';
import Button from 'react-bootstrap/Button';

function EditBlogForm(props) {
    return (
        <Form className="create-blog-form">
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Title of Blog - {props.title}</Form.Label>
              <Form.Control type="text" placeholder="Enter title of blog" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Name of Location - {props.locationName}</Form.Label>
              <Form.Control type="text" placeholder="Enter name of location" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Address - {props.address}</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>City - {props.city}</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Country - {props.country}</Form.Label>
              <Form.Control type="text" placeholder="Enter country" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Region</Form.Label>
              <Form.Control type="text" placeholder="Enter region" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Description - {props.description}</Form.Label>
              <Form.Control type="text" placeholder="Enter description" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    )
}

export default EditBlogForm;