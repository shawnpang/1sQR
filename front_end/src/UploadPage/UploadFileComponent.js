import React from "react"

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FilePreview from 'react-preview-file'

import { Link } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'

export default function UploadFileComponent(props) {

    const { acceptedFiles, getRootProps, getInputProps, } = useDropzone({
        accept: 'image/jpeg, image/png, image/pdf',
        multiple: true
    });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    const handleSubmit = (evt) => {
        evt.preventDefault()
        let formData = new FormData()
        formData.append('files', files[0])
        formData.append('order', 0)
        const requestOptions = {
            method: 'POST',
            body: formData
        };
        console.log(files[0])
        fetch('https://04b67290a263b0349d74b42d4c23cbec.m.pipedream.net', requestOptions)
    }

    return (
        <Container>
            <h1>Upload your menu</h1>
            <p>Acceptable media formats include pdf, png, and jpg</p>

            <Card className="border-1">
                <Card className="border-0 mt-5 mx-5 justify-content-center">
                    <Card {...getRootProps({ className: 'dropzone' })}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    </Card>
                    <Card>
                        <p>Files</p>
                        <ul>{files}</ul>
                    </Card>
                </Card>
                <Form onSubmit={handleSubmit}>
                    <Button type="submit">
                        Upload
                    </Button>
                </Form>
            </Card>

            <Row className="mt-5 d-flex flex-wrap">
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

            <Row className="justify-content-between">
                <Button>
                    <Link to="/">Home</Link>
                </Button>
                <Button>
                    <Link to="/upload/2">Next Step</Link>
                </Button>
            </Row>
        </Container>
    )

}