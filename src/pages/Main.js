import GalleryMain from "../components/GalleryMain/GalleryMain";
import TitlteBlock from "../components/TitlteBlock/TitlteBlock";
import {WeddingSeries} from "../components/WeddingSeries/WeddingSeries";
import { useEffect, useContext } from "react";
import { Helmet } from "react-helmet";

import lineContext from "../context/context-line-header";

const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        context.setLine(true);
        return () => {
            context.setLine(false);
        }
    },[]);

    const context = useContext(lineContext);


    return(
            <div className="container">
                <Helmet>
                    <title>Свадебный Фотограф Минск, Кебиков Евгений.</title>
                    <meta
                        name="description"
                        content="Яркие, живые, наполненные улыбками и радостью, фотографии вашего свадебного дня.Свадебный фотограф Минск,Кебиков Евгений +375 29 694-98-43"
                    />
                    <link rel="canonical" href="https://kebikov.com/" />
                </Helmet>

                <GalleryMain/>
                <TitlteBlock title={'Свадебный фотограф Минск'}/>
                <WeddingSeries plusClass={'mb-50'}/>
            </div>
    )
}

export default Main;