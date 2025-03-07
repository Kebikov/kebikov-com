import './galleryMain.scss';
import { useEffect, useState } from 'react';
import CreateAllColumns from '../../helper/CreateAllColumns';


const GalleryMain = () => {

    const [columsTotal, setColumnsTotal] = useState<number>(4);

    useEffect(() => {
        window.addEventListener('resize', size);
        size();
        return () => {
            window.removeEventListener('resize', size);
        }
    },[columsTotal]);


    const size = () => {
        document.documentElement.clientWidth > 749 ? setColumnsTotal(4) : setColumnsTotal(2);
    }


    return(
        <div className="gallery">
            {
                columsTotal === 4 ? 
                <CreateAllColumns row={4} /> 
                : 
                <CreateAllColumns row={2}/>
            }
        </div>
    )
}


export default GalleryMain;