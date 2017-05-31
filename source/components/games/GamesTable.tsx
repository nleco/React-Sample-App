import * as React from 'react';
import { Link } from 'react-router';
import { Game } from "../../models/Game";
import { config } from "../../globals";

export interface GameTableProps extends React.Props<GameTable> {
    games : Game[]
}

export default class GameTable extends React.Component<GameTableProps, void> {
    constructor() {
        super();
        
        this.renderRow = this.renderRow.bind(this);
    }
    
    renderRow(game:Game) {
        return (
            <tr key={game.ID}>
                <td>
                    <Link to={'/view/' + game.ID}>
                        <img src={config.gameIconURLTemplate({ gameID: game.ID })} alt={game.Name}/>
                        <p>{game.Name}</p>
                    </Link>
                </td>
                <td>{game.SupportsAddons ? 'yes' : 'no'}</td>
                <td>{game.SupportsVoice ? 'yes' : 'no'}</td>
            </tr>
        );
    }
    
    render () {
        return (
            <table className="GameTable--root">
                <thead>
                    <tr>
                        <th>GAME</th>
                        <th>ADDONS</th>
                        <th>VOICE</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.games.map((game) => this.renderRow(game))}
                </tbody>
            </table>
        );
    }
}