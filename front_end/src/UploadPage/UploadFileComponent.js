import React from "react"

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

import { Link } from 'react-router-dom'

export default class UploadFileComponent extends React.Component {
    render() {
        return (
            <Container>
                <h1>Upload your menu</h1>
                <p>Acceptable media formats include pdf, png, and jpg</p>

                <Card className="border-1">
                    <Card className="border-0 m-5 justify-content-center">
                        <Button className="p-3 col-6 mx-auto">
                            Choose Files
                        </Button>
                        <p className="text-center">Drop files here</p>
                    </Card>
                </Card>

                <Row className="m-5 d-flex flex-wrap">
                    <Col>
                        <Card className="">
                            <h1>Some text here</h1>
                            <p>Some details here</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <h1>Some text here</h1>
                            <p>Some details here</p>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <h1>Some text here</h1>
                            <p>Some details here</p>
                        </Card>
                    </Col>
                </Row>

                <Row className="justify-content-end">
                    <Button className="align-self-end">
                        <Link to="/upload/2">Next Step</Link>
                    </Button>
                </Row>
            </Container>
        )
    }
}