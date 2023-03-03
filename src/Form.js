import React, {useRef} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function LeaveReview() {

    const movieTitle = useRef();
    const movieReleaseDate = useRef();
    const movieActors = useRef();
    const movieRating = useRef();

    return (
        <div class="wrapper">
            <Card style={{ width: '96rem' }}>
                <Card.Body>
                    <Card.Title style={{ color: 'blue'}}>Blake's Movie Reviews</Card.Title>
                    <Card.Text>
                        Add your movie's details and click "Add" to add it to the list. Click "Home" to return to the list.
                    </Card.Text>
                    <Nav className='justify-content-center' variant="pills" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Body>
            </Card>

        <Form method="post" action="/api/review" encType="multipart/form-data">
            <Row md={4}>
                <Col></Col>
                <Col><Form.Label>Title:</Form.Label></Col>
                <Col>
                    <Form.Control
                    name={"title"}
                    ref={movieTitle}
                    type="text" />
                </Col>
            </Row>
            <Row md={4}>
                <Col></Col>
                <Col><Form.Label>Release Date:</Form.Label></Col>
                <Col>
                    <Form.Control
                    name={"releaseDate"}
                    ref={movieReleaseDate}
                    type="text" />
                </Col>
            </Row>
            <Row md={4}>
                <Col></Col>
                <Col><Form.Label>Actors:</Form.Label></Col>
                <Col>
                    <Form.Control
                    name={"actors"}
                    ref={movieActors}
                    type="text" />
                </Col>
            </Row>
            <Row md={4}>
                <Col></Col>
                <Col><Form.Label>Rating:</Form.Label></Col>
                <Col><Form.Control
                    name={"rating"}
                    ref={movieRating}
                    type="text" />
                </Col>
            </Row>
            <Row md={5}>
                <Col></Col>
                <Col></Col>
                <Col><Form.Control type="file" name="image"/></Col>
                <Col></Col>
                <Col></Col>
            </Row>
            <Button variant="primary" >Add</Button>
        </Form>
        </div>
    )
}