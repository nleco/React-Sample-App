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
    timestamp : number;
    keyword : string;
}

// Define any connected dispatch actions here. (The ones mapped by ListContainer.)
export interface ConnectedDispatch {
    handleKeywordChange : Function;
}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<any, any> {    
    render() { 
        let body;
        
        switch (this.props.status) {
            case FETCH_STATUS_LOADED:
                body = <GamesTable games={this.props.games} showSearch="true" keyword={this.props.keyword} handleKeywordChange={this.props.handleKeywordChange}/>;
                break;
            case FETCH_STATUS_ERROR:
                body = <div>
                            <h2>Error Downloading Data</h2>
                            <p>Please try again later</p>
                        </div>;
                break;
            default:
                body = <Loading/>;
        }
                
        return (
            <div className='GameList--root'>
                {body}
            </div>
        );
    }
}