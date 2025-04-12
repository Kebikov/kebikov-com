import './social.scss';


const Social = () => {
    return(
        <div className="social" id="social" >
            <div className="social__body" >
                <div className="social__info-block">
                    <span>Phone<br/></span>
                    <a href={"tel:+375296949843"} style={{textDecoration: 'underline'}}>+375 29 694-98-43</a>
                </div>
                <div className="social__info-block">
                    <span>Address<br/></span>
                    г.Минск, ул.Рафиева 109 / 126
                </div>
                <div className="social__info-block">
                    <span>Email<br/></span>
                    kebikovgen@gmail.com
                </div>
            </div>
        </div>
    )
} 

export default Social;