import {WeddingSeries} from "../components/WeddingSeries/WeddingSeries";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import HederArticles from '../components/HederArticles/HederArticles';

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
                <Helmet>
                    <title>Фотографии свадеб в Минске,свадебные фотосессии в Минске.</title>
                    <meta
                        name="description"
                        content="Фотографии свадеб снятых в Минске, свадебные фотосессии в Минске. Просмотрите съемки свадебных дней молодожен в Минске. Вам будет интересно !"
                    />
                    <link rel="canonical" href="https://kebikov.com/weddings-all" />
                </Helmet>

                <HederArticles title={'Свадебные серии'}/>
                <div className="wed-center container">
                    <WeddingSeries/>
                </div>
            </>
            
    )
}

export default WeddingsAll;