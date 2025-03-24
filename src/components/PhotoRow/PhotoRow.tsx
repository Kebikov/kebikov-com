import './photoRow.scss';
import ImageWedding from '../ImageWedding/ImageWedding';
import { FC } from 'react';
import type { IImageWedding } from '@/data/image/weddings/types';


interface IPhotoRow {
    arrPhoto: IImageWedding[];
}


const PhotoRow: FC<IPhotoRow> = ({arrPhoto}) => {

    const items = arrPhoto.map(item => {
        return(
            <div className="photo-row__item" key={item.jpg}>
                <ImageWedding item={item} />
            </div>
        )
    });

    return(
        <div className="photo-row">
            <div className="photo-row__body">
                {items}
            </div>
        </div>
    )
}

export default PhotoRow;