import { GamesState } from "../state/GamesState";
import { Game } from "../models/Game";
import * as _ from 'lodash';

import { FETCH_STATUS_LOADING, FETCH_STATUS_ERROR, FETCH_STATUS_LOADED } from '../models/FetchStatus';
import { 
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed, UpdateKeyword,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED,
    UPDATE_KEYWORD
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed | UpdateKeyword;

const initialState: GamesState = {
    status: FETCH_STATUS_LOADING,
    games: [],
    timestamp: 0,
    keyword: ''
};

export function gamesReducer(state: GamesState = initialState, action: Actions) : GamesState {    
    switch (action.type) {
        case FETCH_GAMES_STARTED:
            return Object.assign({}, state, {
                status: FETCH_STATUS_LOADING
            });
        case FETCH_GAMES_FAILED:
            return Object.assign({}, state, {
                status: FETCH_STATUS_ERROR
            });
        case FETCH_GAMES_SUCCEEDED:
            let games : Game[] = _.map(action.games as Object[], function (game : any) {
                return {
                    ID: game.ID,
                    Name: game.Name,
                    SupportsAddons: game.SupportsAddons,
                    SupportsVoice: game.SupportsVoice,
                    Order: game.Order,
                    Slug: game.Slug,
                    GameFiles: game.GameFiles,
                    CategorySections: game.CategorySections
                };
            });
            
            // order by order
            games = _.sortBy(games, ['Order', 'Name']);
            return {
                status: FETCH_STATUS_LOADED,
                games: games,
                timestamp: action.timestamp,
                keyword: state.keyword
            };
        case UPDATE_KEYWORD:
            return Object.assign({}, state, {
                keyword : action.keyword
            });
    }

    return state;
}
