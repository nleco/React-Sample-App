import * as React from 'react';
import { Link } from 'react-router';
import * as _ from 'lodash';

import { Game } from "../../models/Game";
import { config } from "../../globals";


export default class GamesTable extends React.Component<any, any> {
    constructor(props:any) {
        super(props);
        
        this.state = {
            games : []
        }
        
        this.renderGame = this.renderGame.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getNewGameList = this.getNewGameList.bind(this);
        this.filterGameList = this.filterGameList.bind(this);        
    }
    
    componentDidMount() {
        this.setState ({
            games : this.filterGameList()
        });
    }
    
    getNewGameList() {
        return Object.assign([], this.props.games);
    }
    
    filterGameList() {
        return _.filter(this.getNewGameList(), (game:Game) => {
            if (!this.props.keyword || game.Name.toLowerCase().indexOf(this.props.keyword.toLowerCase()) >= 0) {
                return true;
            }

            return false;
        });
    }
    
    handleChange(e:any) {        
        this.props.handleKeywordChange(e.target.value);
        this.setState ({
            games : this.filterGameList()
        });
    }
    
    renderSearchForm() {
        return (
            <div className="SearchForm">
                <input type="text" className="SearchForm--input" onChange={this.handleChange} placeholder="Search for a game by name" value={this.props.keyword}/>
            </div>
        )
    }
    
    renderGame(game:Game) {
        let gameURL = config.gameURLTemplate({slug: game.Slug});
        return (
            <div className="GameTable--game" key={game.ID}>
                <Link to={gameURL} className="GameTable--game--image">
                    <img src={config.gameIconURLTemplate({ gameID: game.ID })} alt={game.Name}/>
                </Link>
            
                <div className="GameTable--game--info">
                    <Link to={gameURL} className="GameTable--game--info--title">{game.Name}</Link>
            
                    <ul className="GameTable--game--info--supports">
                        <li className="GameTable--game--info--supports--item">
                            {game.SupportsAddons ? <i className="mdi mdi-thumb-up mod-game-yes GameTable--game--info--supports--item--icon"></i> : <i className="mdi mdi-thumb-down mod-game-no GameTable--game--info--supports--item--icon"></i>}
                            <p className="GameTable--game--info--supports--item--text">Supports Addons</p>
                        </li>
                        <li className="GameTable--game--info--supports--item">
                            {game.SupportsVoice ? <i className="mdi mdi-thumb-up mod-game-yes GameTable--game--info--supports--item--icon"></i> : <i className="mdi mdi-thumb-down mod-game-no GameTable--game--info--supports--item--icon"></i>}
                            <p className="GameTable--game--info--supports--item--text">Supports Voice</p>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    
    render () {
        return (
            <div>
                {this.props.showSearch ? this.renderSearchForm() : ''}
                <div className="GameTable">
                    {this.state.games.map((game:Game) => this.renderGame(game))}
                </div>
            </div>
        );
    }
}