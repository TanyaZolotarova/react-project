import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Col, InputGroup, Row} from "react-bootstrap";

export function FormInputComponent() {
    return (
        <div className="container mt-5">
            <Form>
                <Row className="align-items-center">
                    <Col m="auto">
                        <InputGroup className="mb-2">
                            <InputGroup.Text>https://swapi.dev/api/</InputGroup.Text>
                            <Form.Control id="inlineFormInputGroup" placeholder="people/1/" />
                        </InputGroup>
                    </Col>
                    <Col xs="auto">
                    <Button variant="secondary" className="mb-2">
                        Get Info
                    </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}