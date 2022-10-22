import Wedding from "../components/Wedding/Wedding";
import WeddingSeries from "../components/WeddingSeries/WeddingSeries";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const WeddingsPage = () => {
    //* hooks 
    const [wedding, setWedding] = useState('');
    const {wed} = useParams();
    useEffect(() => {
        setWedding(wed);
    },[wed]);
    
    
    //* render 
    return(
        <>
            <Wedding link={wedding}/>
            <WeddingSeries plusClass={'mb-50'}/>
        </>
    )
}

export default WeddingsPage;