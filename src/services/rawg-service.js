import axios from 'axios';
import * as FilterOptionData from './../data/filter-option-data';

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

export const getVideoGamesByGenre = async (genre, platform, page, elements) => {
    try {
        const gameGenre = await http.get(`/games?${genre}${platform}&page=${page}&page_size=${elements}`);
        return gameGenre.results;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

export const getVideoGamesBySearch = async (search) => {
    try {
        const gameSearch = await http.get(`/games?search=${search}&page_size=1`);
        return gameSearch.results;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

export const getDashboardData = async (genre, parentPlatform, platform, initialDate, finalDate, page, elements) => {
    try {
        const gameGenre = await http.get(`/games?${genre}${parentPlatform}${platform}${initialDate}${finalDate}&page=${page}&page_size=${elements}`)
            
            // (initialDate && finalDate) ? `&dates=${initialDate},${finalDate}` : "" );
        return gameGenre.results;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}