 export function ratingScore(rating) {
        return rating > 3.34 ? '#4CAF50' : rating < 1.66 ? '#FF4C4C' : '#FFC107';
    }