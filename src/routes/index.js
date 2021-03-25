import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'components/pages/Login';
import Selection from 'components/pages/Selection';
import BoardSelection from 'components/pages/BoardSelection';
import ListSelection from 'components/pages/ListSelection';
import CardSelection from 'components/pages/CardSelection';
import FormatSelection from 'components/pages/FormatSelection';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/selection" exact component={Selection}/>
            <Route path="/boardselection" exact component={BoardSelection}/>
            <Route path="/listselection" exact component={ListSelection}/>
            <Route path="/cardselection" exact component={CardSelection}/>
            <Route path="/formatselection" exact component={FormatSelection}/>
        </Switch>
    );
}