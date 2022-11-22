import Wedding from "../components/Wedding/Wedding";
import { WeddingSeries, nameSeries } from "../components/WeddingSeries/WeddingSeries";
import { useParams } from "react-router-dom";
import { useEffect} from "react";
import { Helmet } from "react-helmet";

const WeddingsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);
    const {wed} = useParams();


    //* code 
    let wedName = '';
    nameSeries.forEach(item => {
        if(item[1] === wed) wedName = item[0];
    });
    
    console.log('render', wed);
    //* render 
    return(
            <>
                <Helmet>
                    <title>{wedName} свадебная серия фотографии.</title>
                    <meta
                        name="description"
                        content={`Фотографии свадьбы ${wedName}, свадебная фотосессия в Минске. Просмотрите фото свадебного дня молодожен. Свадебный фотограф Минск.`}
                    />
                    <link rel="canonical" href={`https://kebikov.com/weddings-all/${wed}`}/>
                </Helmet>

                <Wedding link={wed}/>
                <WeddingSeries plusClass={'mb-50'}/>
            </>
    )
}

export default WeddingsPage;