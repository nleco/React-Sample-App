import { GlobalStateGetter } from "../state/GlobalState";
import { config } from "../globals";
import "whatwg-fetch";


// Fetch Games Started
export type FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export const FETCH_GAMES_STARTED: FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export type FetchGamesStarted = {
    type: FETCH_GAMES_STARTED;
};

function fetchGamesStarted(): FetchGamesStarted { 
    return { type: FETCH_GAMES_STARTED };
}

// Fetch Games Succeeded
export type FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export const FETCH_GAMES_SUCCEEDED: FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export type FetchGamesSucceeded = {
    type: FETCH_GAMES_SUCCEEDED;
    games: object;
};

function fetchGamesSucceeded(games:object): FetchGamesSucceeded { 
    return { 
        type: FETCH_GAMES_SUCCEEDED,
        games: games
    };
}

// Fetch Games Failed
export type FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export const FETCH_GAMES_FAILED: FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export type FetchGamesFailed = {
    type: FETCH_GAMES_FAILED;
};

function fetchGamesFailed(): FetchGamesFailed { 
    return { type: FETCH_GAMES_FAILED };
}

// Fetch Games Thunk
export function fetchGames() {
    return (dispatch: Redux.Dispatch<any>, getState: GlobalStateGetter) => {
        dispatch(fetchGamesStarted());

        // Implement remainder of thunk
        fetch(config.gamesDataURL)
            .then((response) => {
                if (response.ok) {
                    return response;
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then((response) => response.json())
            .then((response) => {
                // lets store the info
                console.log('fetchGames: store');
                                
                dispatch(fetchGamesSucceeded(response.data));
            })
            .catch((error) => {
                console.log('fetchGames: error');
                dispatch(fetchGamesFailed())
            });
    };
}
