import React from "react"

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
            </Container>
        )
    }
}