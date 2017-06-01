import { GlobalStateGetter } from "../state/GlobalState";
import { config } from "../globals";
import "whatwg-fetch";


// Fetch Games Started
export type FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export const FETCH_GAMES_STARTED: FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export type FetchGamesStarted = {
    type: FETCH_GAMES_STARTED;
};

export function fetchGamesStarted(): FetchGamesStarted { 
    return { type: FETCH_GAMES_STARTED };
}

// Fetch Games Succeeded
export type FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export const FETCH_GAMES_SUCCEEDED: FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export type FetchGamesSucceeded = {
    type: FETCH_GAMES_SUCCEEDED;
    games: object;
    timestamp: number;
};

export function fetchGamesSucceeded(games:object, timestamp: number): FetchGamesSucceeded { 
    return { 
        type: FETCH_GAMES_SUCCEEDED,
        games: games,
        timestamp: timestamp
    };
}

// Fetch Games Failed
export type FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export const FETCH_GAMES_FAILED: FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export type FetchGamesFailed = {
    type: FETCH_GAMES_FAILED;
};

export function fetchGamesFailed(): FetchGamesFailed { 
    return { type: FETCH_GAMES_FAILED };
}

// Update keyword
export type UPDATE_KEYWORD = 'UPDATE_KEYWORD';
export const UPDATE_KEYWORD: UPDATE_KEYWORD = 'UPDATE_KEYWORD';
export type UpdateKeyword = {
    type: UPDATE_KEYWORD;
    keyword: string;
};

export function updateKeyword(keyword: string): UpdateKeyword { 
    return { 
        type: UPDATE_KEYWORD,
        keyword: keyword
    };
}

// reload data thunk
export function getGamesData() {
    return (dispatch: Redux.Dispatch<any>, getState: GlobalStateGetter) => {
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
            // only store if timestamp is updated.
            // NOTE: we could instead store the expires header to avoid fetching data
            if (getState().games.timestamp < response.timestamp) {                            
                dispatch(fetchGamesSucceeded(response.data, response.timestamp));
            }
        })
    };
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
                dispatch(fetchGamesSucceeded(response.data, response.timestamp));
            })
            .catch((error) => {
                dispatch(fetchGamesFailed())
            });
    };
}
