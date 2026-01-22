const LOCAL_STORAGE_KEY_FAVORITE = 'favorite-db';

export let favoriteGames = localStorage.getItem(LOCAL_STORAGE_KEY_FAVORITE) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_FAVORITE)) : [];

export const store = () => localStorage.setItem(LOCAL_STORAGE_KEY_FAVORITE, JSON.stringify(favoriteGames));