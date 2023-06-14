import '../pages/scss/price.scss';
import Faq from "../components/price-faq/Faq";
import PricePackageHeader from "../components/pricePackageHeader/PricePackageHeader";
import arrHeader from './data/dataPrice';
import FormContact from '../components/FormContact/FormContact';
import { Helmet } from "react-helmet";
import HederArticles from '../components/HederArticles/HederArticles';
import { useEffect } from 'react';

const PricePackages = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return(
            <div className="price-packages-body container">
                <Helmet>
                    <title>Свадебный Фотограф Минск, Цены за Съемку Свадебного Дня</title>
                    <meta
                        name="description"
                        content="Свадебный фотограф Минск, цены. Четыре вида готовых пакетов услуг, выберите уже готовый пакет. Приятные цены от 200 до 550 у.е."
                    />
                    <link rel="canonical" href="https://kebikov.com/price-packages"/>
                </Helmet>

                {/* <HederArticles title={'Свадебный фотограф Минск,цены'}/> */}
                <Faq/>
                <PricePackageHeader title={arrHeader[0].title} cash={arrHeader[0].cash} description={arrHeader[0].description} arrParagraphs={arrHeader[0].arrParagraphs} pic={arrHeader[0].pic}/>
                <PricePackageHeader title={arrHeader[1].title} cash={arrHeader[1].cash} description={arrHeader[1].description} arrParagraphs={arrHeader[1].arrParagraphs} pic={arrHeader[1].pic} correction={true} />
                <PricePackageHeader title={arrHeader[2].title} cash={arrHeader[2].cash} description={arrHeader[2].description} arrParagraphs={arrHeader[2].arrParagraphs} pic={arrHeader[2].pic}/>
                <PricePackageHeader title={arrHeader[3].title} cash={arrHeader[3].cash} description={arrHeader[3].description} arrParagraphs={arrHeader[3].arrParagraphs} pic={arrHeader[3].pic}/>
                <FormContact color={'#f1ece7'}/>
            </div>
    )
}

export default PricePackages;