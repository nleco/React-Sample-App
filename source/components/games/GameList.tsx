import * as React from 'react';
import { Link } from 'react-router';
import { GamesState } from '../../state/GamesState';
import { Game } from "../../models/Game";
import { FetchStatus, FETCH_STATUS_LOADING, FETCH_STATUS_ERROR, FETCH_STATUS_LOADED } from "../../models/FetchStatus";

import Loading from './Loading';
import GamesTable from './GamesTable';

// Define any props taken by List itself.
export interface GameListProps extends React.Props<GameList> {
    
}

// Define any connected props here. (The ones mapped by ListContainer.)
export interface ConnectedProps {
    status : FetchStatus
    games : Game[];
}

// Define any connected dispatch actions here. (The ones mapped by ListContainer.)
export interface ConnectedDispatch {
    loadGames : Function
}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<CombinedTypes, void> {
    componentDidMount() {
        if (!this.props.games.length) {
            this.props.loadGames();
        }
        
        console.log('GameList didmount');
    }
    
    render() { 
        console.log('GameList.tsx - render()');
        console.log(this.props);
        
        let body;
        
        switch (this.props.status) {
            case FETCH_STATUS_LOADED:
                body = <GamesTable games={this.props.games}/>;
                break;
            case FETCH_STATUS_ERROR:
                body = <p>error</p>;
                break;
            default:
                body = <Loading/>;
        }
                
        return (
            <div className='GameList--root'>
                <h1>Curse Games</h1>
                {body}
            </div>
        );
    }
}