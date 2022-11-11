import './pricePackageHeader.scss';
import jpg1 from '../../resources/images/praice/1.jpg';
import jpg2 from '../../resources/images/praice/2.jpg';

//= PricePackageHeader 
const PricePackageHeader = ({title, cash, description, arrParagraphs}) => {

    //* code 
    const itemsParagraphs = arrParagraphs.map((item, i) => {
        return(
            <Paragraphs title={item.title} subtitle={item.subtitle} key={i}/>
        )
    });

    //* return 
    return(
        <>
            <div className="price-header">
                <div className="price-header__body">
                    <div className="price-header__img">
                        <img src={jpg1} alt="weddings"/>
                    </div>
                    <div className="price-header__tape">
                        <div className="price-header__title">{title}</div>
                        <div className="price-header__cash">{cash}</div>
                    </div>
                </div>
            </div>
            <div className="price-description">{description}</div>
            
            <div className="description">
                {itemsParagraphs}
            </div>
        </>
        
    )
}

//= Paragraphs 
const Paragraphs = ({title, subtitle}) => {

    //* return 
    return(
        <div className="paragraphs">
            <div className="paragraphs__body">
                <span>{title}</span>{subtitle}
            </div>
        </div>
    )
}

export default PricePackageHeader;