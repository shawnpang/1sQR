import React from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

export default class FormatFilesComponent extends React.Component {
    render() {
        return(
            <Container>
                <h1>Edit Your Menu</h1>
                <p>Drag and drop to change the order of your uploaded pages</p>

                <Card className="border-1">
                    <Card className="border-0 m-5 justify-content-center">
                        <Button className="p-3 col-6 mx-auto">
                            Choose Files
                        </Button>
                        <p className="text-center">Drop files here</p>
                    </Card>
                </Card>

                <Row className="mt-5 justify-content-between">
                    <Button><Link to="/upload/1">Previous Step</Link></Button>
                    <Button><Link to="/upload/3">Next Step</Link></Button>
                </Row>
            </Container>
        )
    }
}