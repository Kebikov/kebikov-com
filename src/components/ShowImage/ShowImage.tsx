import './showImage.scss';
import { useEffect } from 'react';


const ShowImage = () => {

    

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, []);

    return(
        <div className="showImage">
            <div className='showImage__close' ></div>
            <div className="showImage__body">
                <div className="showImage__img" >
                    <img src={require('../../resources/images/main-page/1.jpg')} alt="#" />
                </div>
            </div>
        </div>
    )
}

export default ShowImage;