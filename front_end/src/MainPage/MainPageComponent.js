import React from 'react'

import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class MainPageComponent extends React.Component {

    render() {
        let title = [`Digitalize Your Menu and Flyers`, <br />, `Within Seconds at No Cost`]
        return (
            <Container fluid className="align-self-center justify-content-center text-center">
                <Image className="m-5" src={process.env.PUBLIC_URL + '/logo_light.svg'}></Image>
                <h1>{title}</h1>
                <Col md={6} className="mx-auto ">
                    <p className="text-center">
                        1sQR helps restauranters turn their
                        physical promotional assets into online contents
                        accessible through one QR code scan
                    </p>
                </Col>
                <Button><Link to="/upload/1">Upload</Link></Button>
            </Container>
        )
    }
}