export interface Game {
    aliases: string;
    api_detail_url: string;
    date_added: Date;
    date_last_updated: Date;
    deck: string;
    description: string;
    expected_release_day: null;
    expected_release_month: null;
    expected_release_quarter: null;
    expected_release_year: number;
    guid: string;
    id: number;
    image: Image;
    image_tags: ImageTag[];
    name: string;
    number_of_user_reviews: number;
    original_game_rating: OriginalGameRating[];
    original_release_date: null;
    platforms: Platform[];
    site_detail_url: string;
}

export interface Image {
    icon_url: string;
    medium_url: string;
    screen_url: string;
    screen_large_url: string;
    small_url: string;
    super_url: string;
    thumb_url: string;
    tiny_url: string;
    original_url: string;
    image_tags: string;
}

export interface ImageTag {
    api_detail_url: string;
    name: string;
    total: number;
}

export interface OriginalGameRating {
    api_detail_url: string;
    id: number;
    name: string;
}

export interface Platform {
    api_detail_url: string;
    id: number;
    name: string;
    site_detail_url: string;
    abbreviation: string;
}

export interface GameState {
    games: Game[]
    filteredGames: Game[]
    isLoading: boolean
    error: string | null
}