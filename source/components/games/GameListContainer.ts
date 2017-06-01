import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { updateKeyword } from '../../actions/games';

import { GameList, GameListProps, ConnectedProps, ConnectedDispatch } from './GameList';
import { GlobalState } from '../../state/GlobalState';

function mapStateToProps(state: GlobalState, props: GameListProps): ConnectedProps {
    return {
        games : state.games.games,
        status : state.games.status,
        timestamp : state.games.timestamp,
        keyword : state.games.keyword
    };
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return { 
        handleKeywordChange : (keyword:string) => {
            dispatch(updateKeyword(keyword));
        }
    };
};

// tslint:disable-next-line:variable-name
export const GameListContainer = connect(mapStateToProps, mapDispatchToProps)(GameList) as React.ComponentClass<GameListProps>;
