import React from 'react';
import renderer from 'react-test-renderer';

import {
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED, UPDATE_KEYWORD,
    fetchGamesStarted, fetchGamesSucceeded, fetchGamesFailed, updateKeyword
} from '../actions/games';

test('fetchGamesStarted() returns the proper action.', () => {
    const action = {
        type : FETCH_GAMES_STARTED
    };
    expect(fetchGamesStarted()).toEqual(action);
});

test('fetchGamesSucceeded() returns the proper action.', () => {
    const timestamp = 123456789;
    const games = [{
        ID: 7;
        Name: 'My Awesome Game';
        SupportsAddons: true;
        SupportsVoice: false;
        Order: 1;
        Slug: 'MAG';
        GameFiles: [];
        CategorySections: [];
    }]
    const action = {
        type : FETCH_GAMES_SUCCEEDED,
        games : games,
        timestamp : timestamp
    };
    
    expect(fetchGamesSucceeded(games, timestamp)).toEqual(action);
});


test('fetchGamesFailed() returns the proper action.', () => {
    const action = {
        type : FETCH_GAMES_FAILED
    };
    expect(fetchGamesFailed()).toEqual(action);
});

test('updateKeyword() returns the proper action.', () => {
    const keyword = 'superman';
    const action = {
        type : UPDATE_KEYWORD,
        keyword: keyword
    };
    expect(updateKeyword(keyword)).toEqual(action);
});
