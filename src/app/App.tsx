import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
//* redux 
import store from '../redux/store/store';
import { FC } from 'react';
import { Provider } from 'react-redux';
//*components 
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Spiner from '../components/Spiner/Spiner';
import UpButton from '../components/UpButton/UpButton';
import ShowImage from '../components/ShowImage/ShowImage';

const Contacts = lazy(() => import('../pages/Contacts'));
const AboutMe = lazy(() => import('../pages/AboutMe'));
const Reviews = lazy(() => import('../pages/Reviews'));
const BeautifulWeddingFinale = lazy(() => import('../pages/ArticlesPages/beautiful-wedding-finale/BeautifulWeddingFinale'));
const PricePackages = lazy(() => import('../pages/PricePackages'));
const BouquetRoll = lazy(() => import('../pages/ArticlesPages/bouquet-roll/BouquetRoll'));
const Page404 = lazy(() => import('../pages/Page404'));
const Main = lazy(() => import('../pages/Main'));
const WeddingsAll = lazy(() => import('../pages/WeddingsAll'));
const Articles = lazy(() => import('../pages/Articles'));
const WeddingsPage = lazy(() => import('../pages/WeddingsPage'));
const PreparationsWedding = lazy(() => import('../pages/ArticlesPages/preparations-wedding/PreparationsWedding'));
const FromThePhotographer = lazy(() => import('../pages/ArticlesPages/from-the-photographer/FromThePhotographer'));
const Accessories = lazy(() => import('../pages/ArticlesPages/accessories/Accessories'));
const PerfectWeddingPhotoSession = lazy(() => import('../pages/ArticlesPages/perfect-wedding-photo-session/PerfectWeddingPhotoSession'));
import PopupTheme from '@/components/PopupTheme/PopupTheme';


//= App 
function App() {
    
    //* code 
    const bodyOverflow = () => {
        const body = document.body;
        store.getState().indexSlice.activeMenu ? body.style.overflowY = 'hidden' : body.style.overflowY = 'auto';
    }

    bodyOverflow();


    //* return 
    return (
        
        <Provider store={store} >
            <BrowserRouter>
                <div className="wrapper">
                    <PopupTheme/>
                    <ShowImage/>
                    <Header/>
                    <main className="main" >
                        <Suspense fallback={<Spiner/>}>
                            <Routes>
                                <Route path='/' element={<Main/>}/>
                                <Route path='/weddings-all' element={<WeddingsAll/>}/>
                                    <Route path='/weddings-all/:wed' element={<WeddingsPage/>}/>
                                <Route path='articles' element={<Articles/>}/>
                                    <Route path='/articles/beautiful-wedding-finale' element={<BeautifulWeddingFinale/>}/>
                                    <Route path='/articles/bouquet-roll' element={<BouquetRoll/>}/>
                                    <Route path='/articles/preparations-wedding' element={<PreparationsWedding/>}/>
                                    <Route path='/articles/from-the-photographer' element={<FromThePhotographer/>}/>
                                    <Route path='/articles/accessories' element={<Accessories/>}/>
                                    <Route path='/articles/perfect-wedding-photo-session' element={<PerfectWeddingPhotoSession/>}/>
                                <Route path='about-me' element={<AboutMe/>}/>
                                <Route path='reviews' element={<Reviews/>}/>
                                <Route path='price-packages' element={<PricePackages/>}/>
                                <Route path='contacts' element={<Contacts/>}/>
                                <Route path='*' element={<Page404/>}/>
                            </Routes>
                        </Suspense>
                        <UpButton/>
                    </main>
                    <Footer/>
                </div>
            </BrowserRouter>
        </Provider>
    )
}


export default App;

