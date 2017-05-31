export interface Game {
    ID: number;
    Name: string;
    SupportsAddons: boolean;
    SupportsVoice: boolean;
    Order: number;
    Slug: string;
    GameFiles: Object[];
    CategorySections: Object[];
}
