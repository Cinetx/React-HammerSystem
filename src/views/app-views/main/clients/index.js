import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Pages = ({ match }) => (
    <Suspense fallback={<Loading cover="content"/>}>
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/profile`} />
            <Route path={`${match.url}/users-list`} component={lazy(() => import(`./users-list`))} />
            <Route path={`${match.url}/user/:id`} component={lazy(() => import(`./user`))} />
        </Switch>
    </Suspense>
);
export default Pages;