import React from 'react'

import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import {Link} from 'react-router-dom'
import qrcode from './download.png'

export default class DisplayComponent extends React.Component {
    render() {
        return(
            <Container className="pt-5 my-auto justify-content-center align-items-center">
                <h1 className="text-center">You're All Set!</h1>
                <Row className="justify-content-around">
                    <Image className="mx-auto my-5 col-md-3" src={qrcode}></Image>
                </Row>
                <Row className="justify-content-center">
                <Button className="mx-auto align-self-center">
                    <Link to="/">
                        Home
                    </Link>
                </Button>
                </Row>

            </Container>
            
        )
    }
}