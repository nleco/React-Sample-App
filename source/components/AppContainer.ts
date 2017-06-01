import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { Game } from '../models/Game';
import { GlobalState } from '../state/GlobalState';
import { fetchGames, getGamesData } from '../actions/games';

import { App, AppProps, ConnectedProps, ConnectedDispatch } from './App';

function mapStateToProps(state: GlobalState, props: AppProps): ConnectedProps {
    return {
        games : state.games
    };
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return bindActionCreators({ 
        loadGames : () => fetchGames(),
        getGamesData : () => getGamesData(),
    }, dispatch);
};

// tslint:disable-next-line:variable-name
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App) as React.ComponentClass<AppProps>;
