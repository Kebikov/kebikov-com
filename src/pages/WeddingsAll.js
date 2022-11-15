import WeddingSeries from "../components/WeddingSeries/WeddingSeries";
import { useEffect } from "react";

const WeddingsAll = () => {
    useEffect(() => {
        const wed = document.querySelector('.wed-center');
        const parent = wed.parentElement;
        parent.classList.add('add-wed-all');

        return() => {
            parent.classList.remove('add-wed-all');
        }
    },[]);

    return(
            <div className="wed-center container">
                <WeddingSeries/>
            </div>
    )
}

export default WeddingsAll;