import React from 'react'

import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import logo from '../logo.svg'

export default class MainPageComponent extends React.Component {

    render() {
        return(
            <Container fluid className="align-self-center justify-content-center text-center">
                <h1>Introduction to tool</h1>
                <p>
                    More random ttext here for whatever use case or informationt that we may need in this case because of this project here. 
                </p>
                <Button><Link to="/upload/1">Upload</Link></Button>
            </Container>
        )
    }
}