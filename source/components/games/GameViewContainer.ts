import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import { GameView, GameViewProps, ConnectedProps, ConnectedDispatch } from './GameView';
import { Game } from "../../models/Game";

import { GlobalState } from '../../state/GlobalState';
import { fetchGames } from '../../actions/games';

function mapStateToProps(state: GlobalState, props: GameViewProps): ConnectedProps {
    let game = {} as Game;
    if (state.games.games.length) {
        game = _.find(state.games.games, function (g) { return g.Slug === props.params.slug});
    }
    
    return {
        game : game,
        status : state.games.status
    };
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return bindActionCreators({ 
        
    }, dispatch);
};

// tslint:disable-next-line:variable-name
export const GameViewContainer = connect(mapStateToProps, mapDispatchToProps)(GameView) as React.ComponentClass<GameViewProps>;
