import { GamesState } from "../state/GamesState";
import { 
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED,
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed;

const initialState: GamesState = {
    games: []
};

export function gamesReducer(state: GamesState = initialState, action: Actions) {
    switch (action.type) {
        case FETCH_GAMES_STARTED:
            console.log('reducer: fetch started');
            // Handle action
            break;
        case FETCH_GAMES_FAILED:
            console.log('reducer: fetch failed');
            // Handle action
            break;
        case FETCH_GAMES_SUCCEEDED:
            console.log('reducer: fetch succeeded');
            // Handle action
            break;
    }

    return state;
}
