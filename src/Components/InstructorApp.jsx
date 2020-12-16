import {ListComponent} from './ListComponent';
import {MainComponent} from './MainComponent';
import {PartidaComponent} from './PartidaComponent';
import React, { Component } from 'react';
import { Route, Switch, HashRouter as HashRouter } from 'react-router-dom'

class InstructorApp extends Component {
    render() {
        return (            
            <HashRouter>
            <>
            <div className="title">
                <h1>Ahorcado</h1>
            </div>
                
                <Switch>
                    <Route path="/" exact component={MainComponent} />
                    <Route path="/palabras" exact component={ListComponent} />
                    <Route path="/partida" component={PartidaComponent} />
                </Switch>
            </>
        </HashRouter>
        )
    }
}

export default InstructorApp;
