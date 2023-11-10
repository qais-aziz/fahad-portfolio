import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactUs() {
    return (
        <div style={{backgroundColor: '#e5e5e5'}}>
            <div className={"container p-4"}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter your name</Form.Label>
                    <Form.Control type="text" placeholder="e.g John" />
                    <Form.Text className="text-muted">
                        Enter Name Here for Contact
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </div>
        </div>
    );
}

export default ContactUs;
