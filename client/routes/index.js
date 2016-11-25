/**
 * Created by Igor on 14.11.2016.
 */
import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import MadalDialogCont from '../containers/MadalDialogCont'


export const routes = (

    <div>
        <Route path='/' component={App}>
            <Route path='/note/:id' component={MadalDialogCont} />
        </Route>

    </div>
);
