import WeddingSeries from "../components/WeddingSeries/WeddingSeries";
import { useEffect } from "react";
import SEO from "../components/SEO/SEO";


/**
 * @page Свадебные серии.
 * - kebikov.com/weddings-all
 */
const WeddingsAll = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        const wed = document.querySelector('.wed-center');
        const parent = wed.parentElement;
        parent.classList.add('add-wed-all');
        
        return() => {
            parent.classList.remove('add-wed-all');
        }
    },[]);

    return(
            <>
                <SEO
                    url="https://kebikov.com/weddings-all"
                    title="Фотографии свадеб в Минске,свадебные фотосессии в Минске."
                    description="Фотографии свадеб снятых в Минске, свадебные фотосессии в Минске. Просмотрите съемки свадебных дней молодожен в Минске. Вам будет интересно !"
                    img="https://kebikov.com/opengraph/weddings-all.jpg"
                />

                <div className="wed-center container">
                    <WeddingSeries/>
                </div>
            </>
            
    )
}

export default WeddingsAll;