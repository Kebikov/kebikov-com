import GalleryMain from "../components/GalleryMain/GalleryMain";
import TitlteBlock from "../components/TitlteBlock/TitlteBlock";
import WeddingSeries from "../components/WeddingSeries/WeddingSeries";
import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    return(
            <div className="container">
                <GalleryMain/>
                <TitlteBlock title={'Свадебные серии'}/>
                <WeddingSeries plusClass={'mb-50'}/>
            </div>
    )
}

export default Main;