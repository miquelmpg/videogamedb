const LOCAL_STORAGE_KEY_RECENT_ACTIVITY = 'recentActivity-db';

export let recentActivityGames = localStorage.getItem(LOCAL_STORAGE_KEY_RECENT_ACTIVITY) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_RECENT_ACTIVITY)) : [];

export const store = () => localStorage.setItem(LOCAL_STORAGE_KEY_RECENT_ACTIVITY, JSON.stringify(recentActivityGames));