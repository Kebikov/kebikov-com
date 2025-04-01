import { useState, useEffect } from "react"
import { getTheme } from "@/helper/fncLocalStorage";

export const useGetTheme = () => {

    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {

        const htmlTheme = document.documentElement.getAttribute("data-theme");
        if(htmlTheme !== theme) document.documentElement.setAttribute("data-theme", theme);

        const handleStorageChange = () => {
            const theme = getTheme();
            console.log('handleStorageChange = ', theme);
            setTheme(theme);
            document.documentElement.setAttribute("data-theme", theme);
        };
    
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return {
        theme
    }
}