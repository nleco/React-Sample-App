import { GamesState } from "../state/GamesState";
import { Game } from "../models/Game";
import * as _ from 'lodash';

import { FETCH_STATUS_LOADING, FETCH_STATUS_ERROR, FETCH_STATUS_LOADED } from '../models/FetchStatus';
import { 
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED,
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed;

const initialState: GamesState = {
    status: FETCH_STATUS_LOADING,
    games: []
};

export function gamesReducer(state: GamesState = initialState, action: Actions) : GamesState {    
    switch (action.type) {
        case FETCH_GAMES_STARTED:
            console.log('reducer: fetch games started');
            return {
                status: FETCH_STATUS_LOADING,
                games: []
            };
        case FETCH_GAMES_FAILED:
            console.log('reducer: fetch games failed');
            return {
                status: FETCH_STATUS_ERROR,
                games: []
            };
        case FETCH_GAMES_SUCCEEDED:
            console.log('reducer: fetch games succeeded');
            
            // get only what we need
            let games : Game[] = _.map(action.games as Object[], function (game : any) {
                return {
                    ID: game.ID,
                    Name: game.Name,
                    SupportsAddons: game.SupportsAddons,
                    SupportsVoice: game.SupportsVoice,
                    Order: game.Order,
                    Slug: game.Slug,
                    GameFiles: game.GameFiles,
                    CategorySections: game.CategorySelections
                };
            });
            
            // order by order
            games = _.sortBy(games, ['Order', 'Name']);
                        
            return {
                status: FETCH_STATUS_LOADED,
                games: games
            };
    }

    return state;
}
