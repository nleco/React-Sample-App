import * as React from 'react';
import { Link } from 'react-router';
import * as _ from 'lodash';

import { Game } from "../../models/Game";
import { config } from "../../globals";
import { FetchStatus, FETCH_STATUS_LOADING, FETCH_STATUS_ERROR, FETCH_STATUS_LOADED } from "../../models/FetchStatus";


import Loading from './Loading';
import GamesTable from './GamesTable';


export interface GameViewProps extends React.Props<GameView> {
    params : any;
}

export interface ConnectedProps {
    game: Game | null;
    status : FetchStatus;
}

export interface ConnectedDispatch {
    
}

type CombinedTypes = GameViewProps & ConnectedProps & ConnectedDispatch;


export class GameView extends React.Component<CombinedTypes, void> {
    constructor(props:CombinedTypes) {
        super(props);
        
        this.renderGame = this.renderGame.bind(this);        
        this.renderGameFiles = this.renderGameFiles.bind(this);
        this.renderCategories = this.renderCategories.bind(this);
    }
    
    renderGame(game:Game) {
        return (
            <div>
                <GamesTable games={[game]}/>
            
                <div className="u-text-center">
                    <strong className="u-bold">Categories: </strong>
                    {this.renderCategories(game.CategorySections)}
                </div>
            
                <div>
                    <h3 className="GameView--sectionHeader">Game Files</h3>
                    {this.renderGameFiles(game.GameFiles)}
                </div>
            </div>
        )
    }
    
    renderGameFiles(files: any) {
        if (!files.length) {
            return <p>None</p>;
        }
        
        return (
            <ul>
                {files.map((file:any) => (<li key={file.Id}>{file.FileName}</li>))}
            </ul>
        )
    }
    
    renderCategories(categories: any) {
        if (!categories.length) {
            return <span>None</span>
        }
        
        return (
            <span>
                {categories.map((cat:any) => cat.Name).join(', ')}
            </span>
        );
    }
    
    render () {        
        return (
            <div className="u-mr-10 u-ml-10">
                <div className="u-mt-10">
                    <Link to="/" className="mod-back"><i className="mdi mdi-chevron-left"></i>Back to Games List</Link>
                </div>
                <div className="GameView">
                    { !_.isEmpty(this.props.game) ? this.renderGame(this.props.game as Game) : <Loading/> }
                </div>
            </div>
        );
    }
}