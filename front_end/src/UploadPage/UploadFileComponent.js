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

export default class UploadFileComponent extends React.Component {
    constructor(props) {
        super(); this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(evt) {
        evt.preventDefault()

        const files = this.state.value
        console.log(files)

        let formData = new FormData()

        Object.keys(files).forEach(function (key) {
            console.log(key)

            formData.append("file", files[key])

        });

        // formData.append("file", files[0])

        // Display the key/value pairs
        for (var pair of formData.entries()) {
            console.log(pair[1]);
        }

        console.log(formData.getAll)

        const requestOptions = {
            method: 'PUT',
            body: formData
        };
        fetch('https://155.138.150.43:5000/upload', requestOptions)
    }

    handleChange(evt) {
        this.setState({ value: evt.target.files })
    }

    render() {
        // const { acceptedFiles, getRootProps, getInputProps, } = useDropzone({
        //     accept: 'image/jpeg, image/png, image/pdf',
        //     multiple: true
        // });

        // const files = acceptedFiles.map(file => (
        //     <li key={file.path}>
        //         {file.path} - {file.size} bytes
        //     </li>
        // ));
        return (
            <Container>
                <h1>Upload your menu</h1>
                <p>Acceptable media formats include pdf, png, and jpg</p>

                <Form onSubmit={this.handleSubmit}>
                    <Card>
                        <Form.File onChange={this.handleChange} multiple id="uploadFiles" label="Upload Files"></Form.File>
                        <Button className="mx-auto mt-5" type="submit">
                            Upload
                    </Button>
                    </Card>
                </Form>
            </Container>
        )
    }
}