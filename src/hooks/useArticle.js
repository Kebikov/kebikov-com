const useArticle = () => {

    //= FinaleBox 
    const FinaleBox = (props) => {
    const {title, text, img} = props.info;
    const sideStyle = props.side ? 'left-img__item-img' : 'left-img__item-img _order-2';
    const sideStyleTwo = props.side ? 'left-img__item-text' : 'left-img__item-text _order-1';

        //* render 
        return(
                <div className="options__left-img left-img">
                    <div className="left-img__body">
                        <div className={sideStyle}>
                            <div className="left-img__item-img-box">
                                <img src={img[1]} alt="number"/>
                            </div>
                        </div>
                        <div className={sideStyleTwo}>
                            <div className="left-img__text-body">
                                <img src={img[0]} alt="торт"/>
                                <div className="left-img__title">{title}</div>
                            </div>
                            <div className="left-img__text">{text}</div>
                        </div>
                    </div>
                </div>
        )
    }

    return{FinaleBox}
}

export default useArticle;