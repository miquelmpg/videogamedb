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
    const game = await http.get(`/games/${gameId}`);
    return game;
}

export const getTrailerById = async (gameId) => {
    const trailer = await http.get(`/games/${gameId}/movies`);
    return trailer;
}

export const getScreenshotsById = async (gameId) => {
    const screenshots = await http.get(`/games/${gameId}/screenshots`);
    return screenshots;
}

export const getPostById = async (gameId) => {
    const post = await http.get(`/games/${gameId}/reddit`);
    return post;
}

export const getVideoGamesByGenre = async (genre, platform, page, elements) => {
    try {
        const gameGenre = await http.get(`/games?${genre && `genres=${genre}`}${platform && `&parent_platforms=${platform}`}&page=${page}&page_size=${elements}`);
        return gameGenre.results;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

export const getVideoGamesBySearch = async (search) => {
    try {
        const gameSearch = await http.get(`/games?search=${search}`);
        return gameSearch.results;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

export const getDashboardData = async (genre, parentPlatform, platform, initialDate, finalDate, page, elements) => {
    try {
        const gameGenre = await http.get(`/games?${genre && `genres=${genre}`}${parentPlatform && `&parent_platforms=${parentPlatform}`}${platform && `&platforms=${platform}`}${initialDate && `&dates=${initialDate}`}${finalDate && `,${finalDate}`}&page=${page}&page_size=${elements}`);
        return gameGenre.results;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}