import './titlteBlock.scss';

const TitlteBlock = (props) => {
    return(
        <div className="title-weding">
            <div className="title-weding__line"></div>
            <div className="title-weding__text">{props.title}</div>
            <div className="title-weding__line"></div>
        </div>
    )
}

export default TitlteBlock;