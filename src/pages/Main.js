import GalleryMain from "../components/GalleryMain/GalleryMain";
import TitlteBlock from "../components/TitlteBlock/TitlteBlock";
import { WeddingSeries } from "../components/WeddingSeries/WeddingSeries";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import { useDispatch } from "react-redux";
import { setLineHeader } from "../redux/slice/indexSlice";

const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(setLineHeader(true));
        return () => {
            dispatch(setLineHeader(false));
        }
    },[]);

    const dispatch = useDispatch();


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