import React from 'react'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

export default class UploadConfirmComponent extends React.Component {
    render() {
        return(
            <Container>
                <h1>Customize Your Display</h1>
                <p>Drag and drop to change the order of your uploaded pages</p>

                <Row className="justify-content-between">
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