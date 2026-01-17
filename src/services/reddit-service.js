export const getRedditPostByUser = (userName) => {
    try {
        const link =  import.meta.env.VITE_REDDIT_BASE_API_URL + userName;
        return link;
    } catch (error) {
        console.log('An error has occurred obtaining reddit user data', error);
    }
}