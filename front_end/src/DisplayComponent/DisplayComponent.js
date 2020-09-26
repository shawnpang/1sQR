import React from 'react'

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default class DisplayComponent extends React.Component {
    render() {
        return(
            <Container className="pt-5 justify-content-center">
                <h1 className="text-center">Insert the big QR code here</h1>
                <Image></Image>
                <Row>
                    <h1>Download</h1>
                    <h1>Share</h1>
                </Row>
                <Row>
                    <h1>Email</h1>
                    <h1>Share</h1>
                </Row>
            </Container>
            
        )
    }
}