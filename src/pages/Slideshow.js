import '../scss/slidesShow.scss';
import DA from '../resources/video/D&A.mp4';
import SL from '../resources/video/S&L.mp4';
import MY from '../resources/video/M&Y.mp4';
import NK from '../resources/video/N&K.mp4';
import PT from '../resources/video/P&T.mp4';
import SD from '../resources/video/S&D.mp4';
// import poster1 from '../resources/video/poster/1.jpg';
// import poster2 from '../resources/video/poster/2.jpg';
// import poster3 from '../resources/video/poster/MY.jpg';
// import poster4 from '../resources/video/poster/NK.jpg';
// import poster5 from '../resources/video/poster/PT.jpg';
// import poster6 from '../resources/video/poster/SD.jpg';

import { Helmet } from "react-helmet";
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setLineHeader } from '../redux/actions/actions';

const Slideshow = () => {
    useEffect(() => {
        dispatch(setLineHeader(true));
        return () => {
            dispatch(setLineHeader(false));
        }
    },[]);

    const dispatch = useDispatch();

    //* code 


    //* return 
    return(
        <div className="video container">
            <Helmet>
                <title>Свадебные Slideshow, эмоции идут в комплекте.</title>
                <meta
                    name="description"
                    content="Заходите и посмотрите свадебные Slideshow, все фото с реальных свадеб. Яркие и живые чуства в свадебных роликах.Свадебный фотограф Минск."
                />
                <link rel="canonical" href="https://kebikov.com/slideshow" />
            </Helmet>

            <div className="video__body">
                <div className="video__item">
                    <video src={DA} controls />
                </div>
                <div className="video__item">
                    <video src={SL} controls />
                </div>
                <div className="video__item">
                    <video src={MY} controls />
                </div>
                <div className="video__item">
                    <video src={NK} controls />
                </div>
                <div className="video__item">
                    <video src={PT} controls />
                </div>
                <div className="video__item">
                    <video src={SD} controls />
                </div>
                {/* <div className="video__item">
                    <video src={DA} controls poster={poster1}/>
                </div>
                <div className="video__item">
                    <video src={SL} controls poster={poster2}/>
                </div>
                <div className="video__item">
                    <video src={MY} controls poster={poster3}/>
                </div>
                <div className="video__item">
                    <video src={NK} controls poster={poster4}/>
                </div>
                <div className="video__item">
                    <video src={PT} controls poster={poster5}/>
                </div>
                <div className="video__item">
                    <video src={SD} controls poster={poster6}/>
                </div> */}
            </div>
        </div>
    )
}

export default Slideshow;