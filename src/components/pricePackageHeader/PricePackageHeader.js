import './pricePackageHeader.scss';

//= PricePackageHeader 
const PricePackageHeader = ({title, cash, description, arrParagraphs, pic}) => {

    //* code 
    const itemsParagraphs = arrParagraphs.map((item, i) => {
        return(
            <Paragraphs title={item.title} subtitle={item.subtitle} number={i} key={i}/>
        )
    });

    //* return 
    return(
        <>
            <div className="price-header">
                <div className="price-header__body">
                    <div className="price-header__img">
                        <img src={pic} alt="weddings"/>
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
const Paragraphs = ({title, subtitle, number}) => {

    //* return 
    return(
        <div className="paragraphs">
            <div className="paragraphs__body">
                <div className="paragraphs__number">{`0${number + 1}`}</div>
                <div className="paragraphs__info">
                    <span>{title}</span>{subtitle}
                </div>
                
            </div>
        </div>
    )
}

export default PricePackageHeader;