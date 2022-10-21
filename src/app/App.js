import './App.scss';
import Header from '../components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import WeddingsAll from '../pages/WeddingsAll';
import Slideshow from '../pages/Slideshow';
import Articles from '../pages/Articles';
import AboutMe from '../pages/AboutMe';
import Reviews from '../pages/Reviews';
import PraicePackages from '../pages/PraicePackages';
import Contacts from '../pages/Contacts';

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
            <Header/>
            <main className="main">
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='weddings-all' element={<WeddingsAll/>}/>
                    <Route path='slideshow' element={<Slideshow/>}/>
                    <Route path='articles' element={<Articles/>}/>
                    <Route path='about-me' element={<AboutMe/>}/>
                    <Route path='reviews' element={<Reviews/>}/>
                    <Route path='praice-packages' element={<PraicePackages/>}/>
                    <Route path='contacts' element={<Contacts/>}/>
                </Routes>
            </main>
        </div>
        </BrowserRouter>
        
    )
}

export default App;
