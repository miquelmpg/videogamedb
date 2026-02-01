import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_CHEAPSHARK_BASE_API_URL
});

http.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export const getVideoGamesPriceByTitle = async (title) => {
    try {
        const priceTitle = await http.get(`/api/1.0/games?title=${title}`);
        return priceTitle;
    } catch (error) {
        console.log('An error has occurred obtaining video game data', error);
    }
}

export const getVideoGamesStore = async (cheapestDealID) => {
    try {
        return window.open(`${import.meta.env.VITE_CHEAPSHARK_BASE_API_URL}/redirect?dealID=${cheapestDealID}`, "_blank", "noopener, noreferrer");
    } catch (error) {
        console.log('An error has occurred obtaining cheapest shark data', error);
    }
}