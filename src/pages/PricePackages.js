import '../pages/scss/price.scss';
import Faq from "../components/price-faq/Faq";
import PricePackageHeader from "../components/pricePackageHeader/PricePackageHeader";
import arrHeader from './data/dataPrice';
import FormContact from '../components/FormContact/FormContact';
import { Helmet } from "react-helmet";

const PricePackages = () => {


    return(
            <div className="price-packages-body container">
                <Helmet>
                    <title>Свадебный Фотограф Минск, Цены за Съемку Свадебного Дня</title>
                    <meta
                        name="description"
                        content="Свадебный фотограф Минск, цены. Четыре вида готовых пакетов услуг, выберите уже готовый пакет. Приятные цены от 250 до 550 у.е."
                    />
                </Helmet>

                <Faq/>
                <PricePackageHeader title={arrHeader[0].title} cash={arrHeader[0].cash} description={arrHeader[0].description} arrParagraphs={arrHeader[0].arrParagraphs} pic={arrHeader[0].pic}/>
                <PricePackageHeader title={arrHeader[1].title} cash={arrHeader[1].cash} description={arrHeader[1].description} arrParagraphs={arrHeader[1].arrParagraphs} pic={arrHeader[1].pic}/>
                <PricePackageHeader title={arrHeader[2].title} cash={arrHeader[2].cash} description={arrHeader[2].description} arrParagraphs={arrHeader[2].arrParagraphs} pic={arrHeader[2].pic}/>
                <FormContact color={'#f1ece7'}/>
            </div>
    )
}

export default PricePackages;