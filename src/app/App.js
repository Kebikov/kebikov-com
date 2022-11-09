import './App.scss';
import Header from '../components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import Spinner from '../components/Spiner/Spiner';
import Slideshow from '../pages/Slideshow';
import AboutMe from '../pages/AboutMe';
import Reviews from '../pages/Reviews';
import PraicePackages from '../pages/PraicePackages';
import Contacts from '../pages/Contacts';
import Footer from '../components/Footer/Footer';
import UpButton from '../components/UpButton/UpButton';
import BeautifulWeddingFinale from '../pages/ArticlesPages/beautiful-wedding-finale/BeautifulWeddingFinale';
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



function App() {
    const [activeMenu, setActiveMenu] = useState(false);

    let dragDown = null;
    let dragUp = null;
    let drag = null;

    const start = (e) => {
        dragDown = e.pageX;
    }

    const end = (e) => {
        dragUp = e.pageX;
        drag = dragUp - dragDown;
        if(drag > 50 && dragDown < 30) {
            setActiveMenu(true);
        }
        
    }

    const changeActiveMenu = (state) => {
        setActiveMenu(state);
    }

    return (
        <BrowserRouter>
            <div className="wrapper" onPointerDown={start} onPointerUp={end}>
                <Header changeActiveMenu={changeActiveMenu} activeMenu={activeMenu}/>
                <main className="main">
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path='/' element={<Main/>}/>
                            <Route path='/weddings-all' element={<WeddingsAll/>}/>
                                <Route path='/weddings-all/:wed' element={<WeddingsPage/>}/>
                            <Route path='slideshow' element={<Slideshow/>}/>
                            <Route path='articles' element={<Articles/>}/>
                                <Route path='/articles/beautiful-wedding-finale' element={<BeautifulWeddingFinale/>}/>
                                <Route path='/articles/bouquet-roll' element={<BouquetRoll/>}/>
                                <Route path='/articles/preparations-wedding' element={<PreparationsWedding/>}/>
                                <Route path='/articles/from-the-photographer' element={<FromThePhotographer/>}/>
                                <Route path='/articles/accessories' element={<Accessories/>}/>
                                <Route path='/articles/perfect-wedding-photo-session' element={<PerfectWeddingPhotoSession/>}/>
                            <Route path='about-me' element={<AboutMe/>}/>
                            <Route path='reviews' element={<Reviews/>}/>
                            <Route path='praice-packages' element={<PraicePackages/>}/>
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

