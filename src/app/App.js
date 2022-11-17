import './App.scss';
import Header from '../components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState, useEffect } from 'react';
import Spinner from '../components/Spiner/Spiner';
import Slideshow from '../pages/Slideshow';
import AboutMe from '../pages/AboutMe';
import Reviews from '../pages/Reviews';
import Contacts from '../pages/Contacts';
import Footer from '../components/Footer/Footer';
import UpButton from '../components/UpButton/UpButton';
import BeautifulWeddingFinale from '../pages/ArticlesPages/beautiful-wedding-finale/BeautifulWeddingFinale';
const PricePackages = lazy(() => import('../pages/PricePackages'));
const BouquetRoll = lazy(() => import('../pages/ArticlesPages/bouquet-roll/BouquetRoll'));
const Page404 = lazy(() => import('../pages/Page404'));
const Main = lazy(() => import('../pages/Main'));
const WeddingsAll = lazy(() => import('../pages/WeddingsAll'));
const Articles = lazy(() => import('../pages/ArticlesPage'));
const WeddingsPage = lazy(() => import('../pages/WeddingsPage'));
const PreparationsWedding = lazy(() => import('../pages/ArticlesPages/preparations-wedding/PreparationsWedding'));
const FromThePhotographer = lazy(() => import('../pages/ArticlesPages/from-the-photographer/FromThePhotographer'));
const Accessories = lazy(() => import('../pages/ArticlesPages/accessories/Accessories'));
const PerfectWeddingPhotoSession = lazy(() => import('../pages/ArticlesPages/perfect-wedding-photo-session/PerfectWeddingPhotoSession'));


//= App 
function App() {
    //* hook 
    useEffect(() => {
        window.addEventListener('resize', size);
        size();
        return() => {
            window.removeEventListener('resize', size);
        }
    },[]);

    const [activeMenu, setActiveMenu] = useState(false);
    const [workSwipe, setWorkSwipe] = useState(null);
    const [lineHeader, setLineHeader] = useState(true);

    //* code 
    let dragDown = null;
    let dragUp = null;
    let drag = null;

    const bodyOverflow = () => {
        const body = document.body;
        activeMenu ? body.style.overflowY = 'hidden' : body.style.overflowY = 'auto';
    }

    const size = () => {
        let widthPage = document.documentElement.clientWidth;
        widthPage < 1024 ? setWorkSwipe(true) : setWorkSwipe(false); 
    }

    const start = (e) => {
        if(workSwipe){
            dragDown = e.pageX;
        }
    }

    const end = (e) => {
        if(workSwipe){
            dragUp = e.pageX;
            drag = dragUp - dragDown;
            if(drag > 20 && dragDown < 70) {
                setActiveMenu(true);
            }
        }
    }

    const changeActiveMenu = (state) => {
        setActiveMenu(state);
    }

    bodyOverflow();

    //* return 
    return (
        <BrowserRouter>
            <div className="wrapper" onPointerDown={start} onPointerUp={end}>
                <Header changeActiveMenu={changeActiveMenu} activeMenu={activeMenu} workSwipe={workSwipe} lineHeader={lineHeader}/>
                <main className="main">
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path='/' element={<Main/>}/>
                            <Route path='/weddings-all' element={<WeddingsAll setLineHeader={setLineHeader}/>}/>
                                <Route path='/weddings-all/:wed' element={<WeddingsPage/>}/>
                            <Route path='slideshow' element={<Slideshow/>}/>
                            <Route path='articles' element={<Articles/>}/>
                                <Route path='/articles/beautiful-wedding-finale' element={<BeautifulWeddingFinale setLineHeader={setLineHeader}/>}/>
                                <Route path='/articles/bouquet-roll' element={<BouquetRoll setLineHeader={setLineHeader}/>}/>
                                <Route path='/articles/preparations-wedding' element={<PreparationsWedding setLineHeader={setLineHeader}/>}/>
                                <Route path='/articles/from-the-photographer' element={<FromThePhotographer setLineHeader={setLineHeader}/>}/>
                                <Route path='/articles/accessories' element={<Accessories setLineHeader={setLineHeader}/>}/>
                                <Route path='/articles/perfect-wedding-photo-session' element={<PerfectWeddingPhotoSession setLineHeader={setLineHeader}/>}/>
                            <Route path='about-me' element={<AboutMe setLineHeader={setLineHeader}/>}/>
                            <Route path='reviews' element={<Reviews setLineHeader={setLineHeader}/>}/>
                            <Route path='praice-packages' element={<PricePackages/>}/>
                            <Route path='contacts' element={<Contacts/>}/>
                            <Route path='*' element={<Page404/>}/>
                        </Routes>
                    </Suspense>
                    <UpButton/>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
        
    )
}

export default App;

