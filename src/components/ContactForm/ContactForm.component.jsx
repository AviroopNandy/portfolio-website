import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mvodkpja");
    if(state.succeeded) {
        return <p>Thanks for responding!</p>
    }
    return(
        <Form onSubmit={ handleSubmit }>
            <Form.Row className="pb-2">
                <Col>
                    <Form.Control type="text" name="name" placeholder="Your Name" />
                </Col>
                <Col>
                    <Form.Control type="email" name="_replyto" placeholder="Email id" />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </Col>
            </Form.Row>
            <Form.Row className="pt-2 pb-2">
                <Col>
                    <Form.Control as="textarea" name="message" placeholder="Enter your message..." rows="4" />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </Col>
            </Form.Row>
            <Form.Row className="pt-2 d-flex justify-content-center">
                <Button variant="primary" type="submit" disabled={ state.submitting } value="Send">
                    Submit
                </Button>
            </Form.Row>
        </Form>
    );
}

export default ContactForm;