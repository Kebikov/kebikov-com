import GalleryMain from "../components/GalleryMain/GalleryMain";
import TitlteBlock from "../components/TitlteBlock/TitlteBlock";
import WeddingSeries from "../components/WeddingSeries/WeddingSeries";
import { useEffect } from "react";
import SEO from "../components/SEO/SEO";

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
        <>
            <SEO 
                url="https://kebikov.com/"
                title="Свадебный Фотограф Минск, Кебиков Евгений."
                description="Яркие, живые, наполненные улыбками и радостью, фотографии вашего свадебного дня.Свадебный фотограф Минск,Кебиков Евгений +375 29 694-98-43"
                img="https://kebikov.com/opengraph/kebikov.jpg"
            />
            
            <div className="container">
                <GalleryMain/>
                <TitlteBlock title={'Свадебныe серии'}/>
                <WeddingSeries/>
            </div>
        </>

    )
}

export default Main;




