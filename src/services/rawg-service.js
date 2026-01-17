import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_RAWG_BASE_API_URL,
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY,
    },
});

http.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(error)
);

export const getVideoGameById = async (gameId) => {
    try {
        const game = await http.get(`/games/${gameId}`);
        return game;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

export const getTrailerById = async (gameId) => {
    try {
        const trailer = await http.get(`/games/${gameId}/movies`);
        return trailer;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

export const getScreenshotsById = async (gameId) => {
    try {
        const screenshots = await http.get(`/games/${gameId}/screenshots`);
        return screenshots;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

export const getPostById = async (gameId) => {
    try {
        const post = await http.get(`/games/${gameId}/reddit`);
        return post;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

export const getVideoGamesByGenre = async (genre, platform) => {
    try {
        const gameGenre = await http.get(`/games?${genre}${platform}`);
        return gameGenre.results;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}
// &parent_platforms=${platform}
export const getVideoGamesBySearch = async (search) => {
    try {
        const gameSearch = await http.get(`/games?search=${search}&page_size=1`);
        return gameSearch.results;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

// https://www.reddit.com/r/subreddit/comments/postid.json
// Endpoint: https://oauth.reddit.com/r/<subreddit>/search o /comments/<postid>
// https://www.reddit.com/u/Whereonatrain
