import '../scss/slidesShow.scss';
import DA from '../resources/video/D&A.mp4';
import SL from '../resources/video/S&L.mp4';
import MY from '../resources/video/M&Y.mp4';
import NK from '../resources/video/N&K.mp4';
import PT from '../resources/video/P&T.mp4';
import SD from '../resources/video/S&D.mp4';
import posterDA from '../resources/images/poster/DA.jpg';
import posterSL from '../resources/images/poster/SL.jpg';
import posterMY from '../resources/images/poster/MY.jpg';
import posterNK from '../resources/images/poster/NK.jpg';
import posterPT from '../resources/images/poster/PT.jpg';
import posterSD from '../resources/images/poster/SD.jpg';


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
                    <video src={DA} controls poster={posterDA}/>
                </div>
                <div className="video__item">
                    <video src={SL} controls poster={posterSL}/>
                </div>
                <div className="video__item">
                    <video src={MY} controls poster={posterMY}/>
                </div>
                <div className="video__item">
                    <video src={NK} controls poster={posterNK}/>
                </div>
                <div className="video__item">
                    <video src={PT} controls poster={posterPT}/>
                </div>
                <div className="video__item">
                    <video src={SD} controls poster={posterSD}/>
                </div>
            </div>
        </div>
    )
}

export default Slideshow;