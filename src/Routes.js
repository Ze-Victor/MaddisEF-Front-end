import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Resources from './pages/Resources';
import CreateResource from './pages/CreateResource';
import UpdateResource from './pages/UpdateResource';
import MyResources from './pages/MyResources';
import ResourcesDetails from './pages/ResourcesDetails';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/create-user">
                <CreateUser />
            </Route>
            <Route exact path="/resource">
                <Resources />
            </Route>
            <Route exact path="/create-resource">
                <CreateResource />
            </Route>
            <Route path="/update-resource/:id">
                <UpdateResource />
            </Route>
            <Route path="/resource-details/:id">
                <ResourcesDetails />
            </Route>
            <Route path="/my-resources">
                <MyResources />
            </Route>
        </Switch>
    );
}

export default Routes;