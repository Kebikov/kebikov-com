import './App.scss';
import { useEffect } from 'react';
import usehelpPassAllImg from './service/usehelpPassAllImg';
import useHelperLazyLoad from './service/useHelperLazyLoad';
import box from './resource/spiner/box.jpg';

const allJpg = usehelpPassAllImg(require.context('./resource/all-weddings/DA/jpg/', false, /\.(png|jpe?g|svg|webp)$/), 'jpg');
const allWebP = usehelpPassAllImg(require.context('./resource/all-weddings/DA/webP/', false, /\.(png|jpe?g|svg|webp)$/), 'webp');


const App = () => {
    //=hooks 
    useEffect(() => {
        const imgObserver = new IntersectionObserver(entryCall, {rootMargin: '0px 0px 800px 0px'});
        const pictureAll = document.querySelectorAll('picture');
        pictureAll.forEach(item => imgObserver.observe(item));
    },[]);

    const {entryCall} = useHelperLazyLoad();

    //=code 
    const items = twoArr(allJpg, allWebP).map(item => {
        return(
            <picture key={item} className='anime'>
                <source type="image/webp" data-src={item[1]} key={item[1]}/>
                <img src={box} height={'600px'} data-src={item[0]} alt={'img'} key={item} />
            </picture>
            
        )
    });

    
    //=render 
    return(
            <div className="wrapper">
                {items}
            </div>
    )
}

export default App;


