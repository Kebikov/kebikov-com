import GalleryMain from "../components/GalleryMain/GalleryMain";
import TitlteBlock from "../components/TitlteBlock/TitlteBlock";
import WeddingSeries from "../components/WeddingSeries/WeddingSeries";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { useDispatch } from "react-redux";
import { setLineHeader } from "../redux/slice/indexSlice";

//-- Main 
const Main = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        //dispatch(setLineHeader(true));
        return () => {
            dispatch(setLineHeader(false));
        }
    },[]);


    return(
            <div className="container">
                <Helmet>
                
                    <title>Фотографии свадеб в Минске,свадебные фотосессии в Минске.</title>
                    <meta
                        name="description"
                        content="Фотографии свадеб снятых в Минске, свадебные фотосессии в Минске. Просмотрите съемки свадебных дней молодожен в Минске. Вам будет интересно !"
                    />
                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://kebikov.com/"/>
                    <meta property="og:title" content="Свадебный Фотограф Минск, Кебиков Евгений" />
                    <meta property="og:description" content="Яркие, живые, наполненные улыбками и радостью, фотографии вашего свадебного дня.Свадебный фотограф Минск,Кебиков Евгений +375 29 694-98-43"/>
                    <meta property="og:image" content="https://kebikov.com/static/graph/kebikov.jpg"/>
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:image" content="https://kebikov.com/static/graph/kebikov.jpg" />
                    <meta data-hid="property::og:site_name" property="og:site_name" content="KEBIKOV.COM"/>
                    <link rel="canonical" href="https://kebikov.com/weddings-all" />

                    <link rel="canonical" href="https://kebikov.com/" />
                </Helmet>
                
                <GalleryMain/>
                <TitlteBlock title={'Свадебныe серии'}/>
                <WeddingSeries/>
            </div>
    )
}

export default Main;


