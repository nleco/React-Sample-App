import * as React from 'react';
import { Link } from 'react-router';
import { Game } from "../../models/Game";
import { config } from "../../globals";

export interface GameTableProps extends React.Props<GamesTable> {
    games : Game[]
}

export default class GamesTable extends React.Component<GameTableProps, void> {
    constructor() {
        super();
        
        this.renderGame = this.renderGame.bind(this);
    }
    
    renderGame(game:Game) {
        return (
            <div className="GameTable--game" key={game.ID}>
                <Link to={'/view/' + game.ID} className="GameTable--game--image">
                    <img src={config.gameIconURLTemplate({ gameID: game.ID })} alt={game.Name}/>
                </Link>
            
                <div className="GameTable--game--info">
                    <p className="GameTable--game--info--title">
                        <Link to={'/view/' + game.ID}>{game.Name}</Link>
                    </p>
            
                    <ul className="GameTable--game--info--supports">
                        <li className="GameTable--game--info--supports--item">
                            {game.SupportsAddons ? <i className="mdi mdi-checkbox-marked mod-game-yes GameTable--game--info--supports--item--icon"></i> : <i className="mdi mdi-close-box mod-game-no GameTable--game--info--supports--item--icon"></i>}
                            <p className="GameTable--game--info--supports--item--text">Supports Addons</p>
                        </li>
                        <li className="GameTable--game--info--supports--item">
                            {game.SupportsVoice ? <i className="mdi mdi-check mod-game-yes GameTable--game--info--supports--item--icon"></i> : <i className="mdi mdi-close-box mod-game-no GameTable--game--info--supports--item--icon"></i>}
                            <p className="GameTable--game--info--supports--item--text">Supports Voice</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    
    render () {
        return (
            <div className="GameTable">
                {this.props.games.map((game) => this.renderGame(game))}
            </div>
        );
    }
}