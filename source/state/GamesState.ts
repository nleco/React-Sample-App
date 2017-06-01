import { Game } from "../models/Game";
import { FetchStatus } from "../models/FetchStatus";

export interface GamesState {
    status: FetchStatus;
    games: Game[];
    timestamp: number;
    keyword: string;
}
