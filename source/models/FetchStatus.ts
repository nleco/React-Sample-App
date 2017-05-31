// Fetch Games Started statuses

export type FETCH_STATUS_LOADING = 'FETCH_STATUS_LOADING';
export const FETCH_STATUS_LOADING: FETCH_STATUS_LOADING = 'FETCH_STATUS_LOADING';

export type FETCH_STATUS_ERROR = 'FETCH_STATUS_ERROR';
export const FETCH_STATUS_ERROR: FETCH_STATUS_ERROR = 'FETCH_STATUS_ERROR';

export type FETCH_STATUS_LOADED = 'FETCH_STATUS_LOADED';
export const FETCH_STATUS_LOADED: FETCH_STATUS_LOADED = 'FETCH_STATUS_LOADED';

export type FetchStatus = FETCH_STATUS_LOADING | FETCH_STATUS_ERROR | FETCH_STATUS_LOADED;