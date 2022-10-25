import './App.scss';
import Header from '../components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Spinner from '../components/Spiner/Spiner';
import Slideshow from '../pages/Slideshow';
import AboutMe from '../pages/AboutMe';
import Reviews from '../pages/Reviews';
import PraicePackages from '../pages/PraicePackages';
import Contacts from '../pages/Contacts';
import Footer from '../components/Footer/Footer';
import UpButton from '../components/UpButton/UpButton';
import BeautifulWeddingFinale from '../pages/ArticlesPages/BeautifulWeddingFinale/BeautifulWeddingFinale';
const BouquetRoll = lazy(() => import('../pages/ArticlesPages/BouquetRoll/BouquetRoll'));
const Page404 = lazy(() => import('../pages/Page404'));
const Main = lazy(() => import('../pages/Main'));
const WeddingsAll = lazy(() => import('../pages/WeddingsAll'));
const Articles = lazy(() => import('../pages/ArticlesPage'));
const WeddingsPage = lazy(() => import('../pages/WeddingsPage'));
const PreparationsWedding = lazy(() => import('../pages/ArticlesPages/PreparationsWedding/PreparationsWedding'));
const FromThePhotographer = lazy(() => import('../pages/ArticlesPages/FromThePhotographer/FromThePhotographer'));
const Accessories = lazy(() => import('../pages/ArticlesPages/Accessories/Accessories'));

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <main className="main">
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path='/' element={<Main/>}/>
                            <Route path='/weddings-all' element={<WeddingsAll/>}/>
                                <Route path='/weddings-all/:wed' element={<WeddingsPage/>}/>
                            <Route path='slideshow' element={<Slideshow/>}/>
                            <Route path='articles' element={<Articles/>}/>
                                <Route path='beautiful-wedding-finale' element={<BeautifulWeddingFinale/>}/>
                                <Route path='bouquet-roll' element={<BouquetRoll/>}/>
                                <Route path='preparations-wedding' element={<PreparationsWedding/>}/>
                                <Route path='from-the-photographer' element={<FromThePhotographer/>}/>
                                <Route path='accessories' element={<Accessories/>}/>
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

