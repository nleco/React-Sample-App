import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { GameView, GameViewProps, ConnectedProps, ConnectedDispatch } from './GameView';
import { GlobalState } from '../../state/GlobalState';
import { fetchGames } from '../../actions/games';

function mapStateToProps(state: GlobalState, props: GameViewProps): ConnectedProps {
    console.log('mapStateProps');
    console.log(props.params.gameID);
    console.log(state.games.games);

    let game = null;
    if (state.games.games.length) {
        game = _.find(state.games.games, function (g) { return g.ID === Number(props.params.gameID)});
    }
    
    return {
        game : game
    };
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return bindActionCreators({ 
        loadGames : () => fetchGames()
    }, dispatch);
};

// tslint:disable-next-line:variable-name
export const GameViewContainer = connect(mapStateToProps, mapDispatchToProps)(GameView) as React.ComponentClass<GameViewProps>;
