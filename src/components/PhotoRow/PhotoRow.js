import './photoRow.scss';

const PhotoRow = ({arrPhoto}) => {

    const items = arrPhoto.map(item => {
        return(
            <div className="photo-row__item" key={item}>
                <img src={item} alt="weddings" className="photo-row__img"/>
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