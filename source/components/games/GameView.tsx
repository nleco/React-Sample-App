import * as React from 'react';
import { Link } from 'react-router';
import { Game } from "../../models/Game";
import { config } from "../../globals";
import Loading from './Loading';
import * as _ from 'lodash';

export interface GameViewProps extends React.Props<GameView> {
    params : any;
}

export interface ConnectedProps {
    game: Game | null;
}

export interface ConnectedDispatch {
    loadGames : Function
}

type CombinedTypes = GameViewProps & ConnectedProps & ConnectedDispatch;


export class GameView extends React.Component<CombinedTypes, void> {
    constructor(props:CombinedTypes) {
        super(props);
        
        this.renderGame = this.renderGame.bind(this);        
        this.renderGameFiles = this.renderGameFiles.bind(this);
    }
    
    componentDidMount() {
        if (!this.props.game) {
            this.props.loadGames();
        }
    }
    
    renderGame(game:Game) {
        console.log('render game');
        console.log(game);
        return (
            <div>
                <div>GAME</div>
                <img src={config.gameIconURLTemplate({ gameID: game.ID })} alt={game.Name}/>
                <h3>{game.Name}</h3>
        
                <p>supports addons: {game.SupportsAddons ? 'yes' : 'no'}</p>
                <p>supports voice: {game.SupportsVoice ? 'yes' : 'no'}</p>
    
                <div>
                    <p>Slug: {game.Slug}</p>
            
                    {game.GameFiles.length ? this.renderGameFiles(game.GameFiles.length) : ''}
                </div>
            </div>
        )
    }
    
    renderGameFiles(files: any) {
        if (!files.length) {
            return '';
        }
        
        return (
            <ul>
                {files.map((file:any) => (<li>{file.FileName}</li>))}
            </ul>
        )
    }
    
    render () {
        console.log('GameView render');
        return (
            <div>
                <Link to="/">Games List</Link>
                
                { this.props.game ? this.renderGame(this.props.game as Game) : <Loading/> }
                
            </div>
        );
    }
}