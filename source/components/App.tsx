import * as React from 'react';
import { Link } from 'react-router';
import * as _ from 'lodash';
import 'whatwg-fetch';

import { config } from "../globals";
import { GamesState } from '../state/GamesState';

import Header from './games/Header';


export interface AppProps extends React.Props<App> {
    
}

export interface ConnectedProps {
    games: GamesState;
}

export interface ConnectedDispatch {
    loadGames : Function;
    getGamesData : Function;
}

type CombinedTypes = AppProps & ConnectedProps & ConnectedDispatch;

export class App extends React.Component<CombinedTypes, void> {    
    constructor() {
        super();        
    }
    
    componentWillMount() {
        this.props.loadGames();
    }
    
    componentDidMount() {        
        // lets check every minute or so for a new game
        setInterval(() => {
            this.props.getGamesData();
        }, config.gameUpdateTime)
    }
    
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}
