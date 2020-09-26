import React from 'react'

import Container from 'react-bootstrap/Container'
import { Route, Link, Switch } from 'react-router-dom' 

import UploadConfirmComponent from './UploadConfirmComponent'
import FormatFilesComponent from './FormatFilesComponent'
import UploadFileComponent from './UploadFileComponent'

export default class UploadComponent extends React.Component {
    render() {
        return(
            <Container className="pt-5">
                <Switch>
                    <Route exact path="/upload"/>
                    <Route path="/upload/3">
                        <UploadConfirmComponent/>
                    </Route>
                    <Route path="/upload/2">
                        <FormatFilesComponent/>
                    </Route>
                    <Route path="/upload/1">
                        <UploadFileComponent></UploadFileComponent>
                    </Route>
                </Switch>
            </Container>
        )
    }
}