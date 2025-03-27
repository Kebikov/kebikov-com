import './titlteBlock.scss';

//= TitlteBlock 
const TitlteBlock = (props) => {

    return(
        <div className="title-weding">
            <div className="title-weding__line"></div>
            <h2 className="title-weding__text">{props.title}</h2>
            <div className="title-weding__line"></div>
        </div>
    )
}

export default TitlteBlock;