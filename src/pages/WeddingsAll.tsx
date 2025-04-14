import './scss/weddingsAll.scss';
import WeddingSeries from "../components/WeddingSeries/WeddingSeries";
import { useEffect } from "react";
import SEO from "../components/SEO/SEO";


/**
 * @page Свадебные серии.
 * - kebikov.com/weddings-all
 */
const WeddingsAll = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        let parent: HTMLElement | null = null ;
        const wed = document.querySelector('.wed-center');
        if(wed) {
            parent = wed.parentElement as HTMLElement;
            if(parent) parent.classList.add('add-wed-all');
        }
        
        
        return() => {
            if(parent) parent.classList.remove('add-wed-all');
        }
    },[]);

    return(
            <>
                <SEO
                    url="https://kebikov.com/weddings-all"
                    title="Фотографии свадеб в Минске,свадебные фотосессии в Минске."
                    description="Фотографии свадеб снятых в Минске, свадебные фотосессии в Минске. Просмотрите съемки свадебных дней молодожен в Минске. Вам будет интересно !"
                    img="https://kebikov.com/opengraph/weddings-all.jpg"
                />

                <div className="container" style={{maxWidth: '1450px'}}>
                    <div className="weddingsAll" >
                        <div className="weddingsAll__body" >
                            <p>
                                На этой странице вы найдёте подборку свадебных фотосессий.
                                Каждая история — это не просто фотографии, а живая хроника чувств, улыбок, волнительных взглядов и трогательных моментов.
                            </p>
                            <p>
                                Я верю, что свадебная фотография — это искусство сохранить любовь во времени. 
                                Поэтому в своей работе я стараюсь подчеркнуть искренность момента. 
                                Моя задача — запечатлеть не только красоту внешнюю, но и тепло, которое рождается между двумя сердцами в день их свадьбы.
                            </p>
                            <p>
                                Если вы ищете профессионального <a href='/' className='ancor' >свадебного фотографа в Минске</a>, приглашаю вас познакомиться с моими работами. Возможно, среди этих историй вы узнаете что-то близкое и своё.
                            </p>
                        </div>
                    </div>
                    <WeddingSeries/>
                </div>
            </>
            
    )
}

export default WeddingsAll;