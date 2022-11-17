import Wedding from "../components/Wedding/Wedding";
import { WeddingSeries, nameSeries } from "../components/WeddingSeries/WeddingSeries";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const WeddingsPage = () => {
    //* hooks 
    const [wedding, setWedding] = useState('');
    const {wed} = useParams();

    useEffect(() => {
        setWedding(wed);
    },[wed]);

    //* code 
    let wedName = '';
    nameSeries.forEach(item => {
        if(item[1] === wed) wedName = item[0];
    });
    console.log('',wedName);
    
    
    //* render 
    return(
            <>
                <Helmet>
                    <title>{wedName} свадебная серия фотографии.</title>
                    <meta
                        name="description"
                        content={`Фотографии свадьбы ${wedName}, свадебная фотосессия в Минске. Просмотрите фото свадебного дня молодожен. Свадебный фотограф Минск.`}
                    />
                </Helmet>

                <Wedding link={wedding}/>
                <WeddingSeries plusClass={'mb-50'}/>
            </>
    )
}

export default WeddingsPage;