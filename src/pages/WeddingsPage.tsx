import Wedding from "../components/Wedding/Wedding";
import WeddingSeries from "../components/WeddingSeries/WeddingSeries";
import { useParams } from "react-router-dom";
import { useEffect} from "react";
import { Helmet } from "react-helmet";
//* const 
import nameSeries from './data/dataSeries';


const WeddingsPage = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    /**
     * wed окончание пути.
     * @example
     * "MY" || "NK" ...
     */
    const {wed} = useParams();

     /** `Поиск обьекта и возврат полного имени свадьбы.` */
    const name = nameSeries.find(item => item.link === wed)?.title;
    
    if(!wed) return null
    
    return(
            <>
                <Helmet>
                    <title>{name} свадебная серия фотографии.</title>
                    <meta
                        name="description"
                        content={`Фотографии свадьбы ${name}, свадебная фотосессия в Минске. Просмотрите фото свадебного дня молодожен. Свадебный фотограф Минск.`}
                    />
                    <link rel="canonical" href={`https://kebikov.com/weddings-all/${wed}`}/>
                </Helmet>

                <Wedding link={wed}/>
                <WeddingSeries/>
            </>
    )
}

export default WeddingsPage;