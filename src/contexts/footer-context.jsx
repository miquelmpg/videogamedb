import { createContext, useState } from "react";

const FooterContext = createContext();

function FooterProviderWrapper({ children }) {
    const [toggle, setToggle] = useState(true);
    const [numImage, setNumImage] = useState(0);

    function toggleFooter() {
        setToggle((prev) => !prev);
    }

    function addOneToImageNumber(recentActivity) {
        (numImage === (recentActivity.length - 6)) ? setNumImage((recentActivity.length - 6)) : setNumImage((prev) => prev + 1);
    }

    function subtractOneToImageNumber() {
        numImage === 0 ? setNumImage(0) : setNumImage((prev) => prev - 1);
    }

    return (
        <FooterContext.Provider value={{toggle, toggleFooter, numImage, addOneToImageNumber, subtractOneToImageNumber}}>
            {children}
        </FooterContext.Provider>
    );
}

export {FooterContext, FooterProviderWrapper};