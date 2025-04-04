import '../pages/scss/price.scss';
import Faq from "../components/price-faq/Faq";
import PricePackageHeader from "../components/pricePackageHeader/PricePackageHeader";
import arrHeader from '../data/dataPrice';
import FormContact from '../components/FormContact/FormContact';
import { useEffect } from 'react';
import SEO from '../components/SEO/SEO';

const PricePackages = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    return(
        <>
            <SEO
                url='https://kebikov.com/price-packages'
                title='Цены за Съемку Свадебного Дня Свадебного фотографа В Минске.'
                description='Свадебный фотограф Минск, цены. Три вида готовых пакетов услуг, выберите уже готовый пакет. Приятные цены от 200 до 400 у.е.'
            />
        
            <div className="price-packages-body container">
                <Faq/>
                {/* <PricePackageHeader title={arrHeader[0].title} cash={arrHeader[0].cash} description={arrHeader[0].description} arrParagraphs={arrHeader[0].arrParagraphs} pic={arrHeader[0].pic}/> */}
                <PricePackageHeader title={arrHeader[1].title} cash={arrHeader[1].cash} description={arrHeader[1].description} arrParagraphs={arrHeader[1].arrParagraphs} pic={arrHeader[1].pic} correction={true} />
                <PricePackageHeader title={arrHeader[2].title} cash={arrHeader[2].cash} description={arrHeader[2].description} arrParagraphs={arrHeader[2].arrParagraphs} pic={arrHeader[2].pic}/>
                <PricePackageHeader title={arrHeader[3].title} cash={arrHeader[3].cash} description={arrHeader[3].description} arrParagraphs={arrHeader[3].arrParagraphs} pic={arrHeader[3].pic}/>
                <FormContact color={'var(--color-light-1__to__color-black-1)'}/>
            </div>
        </>
    )
}

export default PricePackages;