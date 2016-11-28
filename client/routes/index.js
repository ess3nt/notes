/**
 * Created by Igor on 14.11.2016.
 */
import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import ModalDialogCont from '../containers/ModalDialogCont'


export const routes = (
    <div>
        <Route path='/' component={App}>
            <Route path='/note/:id' component={ModalDialogCont} />
        </Route>
        <Route path='*' component={ModalDialogCont} />
    </div>
);
