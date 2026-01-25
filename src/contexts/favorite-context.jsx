import { createContext, useState } from "react";

const FavoriteContext = createContext();

function FavoriteProviderWrapper({ children }) {
    const [favoriteToggle, setFavoriteToggle] = useState(false);

    function toggleFavorite() {
        setFavoriteToggle((prev) => !prev);
    }

    return (
        <FavoriteContext.Provider value={{favoriteToggle, toggleFavorite}}>
            {children}
        </FavoriteContext.Provider>
    );
}

export {FavoriteContext, FavoriteProviderWrapper};