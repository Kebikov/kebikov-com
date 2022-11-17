import '../scss/slidesShow.scss';
import DA from '../resources/video/D&A.mp4';
import SL from '../resources/video/S&L.mp4';
import MY from '../resources/video/M&Y.mp4';
import NK from '../resources/video/N&K.mp4';
import PT from '../resources/video/P&T.mp4';
import SD from '../resources/video/S&D.mp4';
import { Helmet } from "react-helmet";

const Slideshow = () => {

    return(
        <div className="video container">

            <Helmet>
                <title>Свадебные Slideshow, эмоции идут в комплекте.</title>
                <meta
                    name="description"
                    content="Заходите и посмотрите свадебные Slideshow, все фото с реальных свадеб. Яркие и живые чуства в свадебных роликах.Свадебный фотограф Минск."
                />
            </Helmet>

            <div className="video__body">
                <div className="video__item">
                    <video src={DA} controls/>
                </div>
                <div className="video__item">
                    <video src={SL} controls/>
                </div>
                <div className="video__item">
                    <video src={MY} controls/>
                </div>
                <div className="video__item">
                    <video src={NK} controls/>
                </div>
                <div className="video__item">
                    <video src={PT} controls/>
                </div>
                <div className="video__item">
                    <video src={SD} controls/>
                </div>
            </div>
        </div>
    )
}

export default Slideshow;