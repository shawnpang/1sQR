import React from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

export default class UploadConfirmComponent extends React.Component {
    render() {
        return (
            <Container>
                <Form>
                    <h1>Customize Your Display</h1>
                    <p>Decide the name and title of your file so you and your customers can easily locate it</p>
                    <Row className="justify-content-between container">
                        <Form.Group controlId="domain">
                            <Form.Control type="text" placeholder="Domain Name" />
                            <Form.Text className="text-muted">This will be displayed in the website address of your resume</Form.Text>
                        </Form.Group>

                        <Form.Group controlId="title">
                            <Form.Control type="text" placeholder="File Title" />
                            <Form.Text className="text-muted">This will be displayed at the top of your menu page</Form.Text>
                        </Form.Group>
                    </Row>
                    <h1>Ready to Launch?</h1>
                    <p>Before you do, set an access code for your menu</p>
                    <Row className="container">
                        <Form.Group controlId="access" >
                            <Form.Control type="text" placeholder="Your Access Code" />
                            <Form.Text className="text-muted">Anyone can use this access code to edit and update your menu</Form.Text>
                        </Form.Group>
                    </Row>
                </Form>




                <Row className="container justify-content-between">
                    <Button className="">
                        <Link to="/upload/2">Previous Step</Link>
                    </Button>
                    <Button className="">
                        <Link to="/display">Launch Your Menu</Link>
                    </Button>
                </Row>
            </Container>
        )
    }
}