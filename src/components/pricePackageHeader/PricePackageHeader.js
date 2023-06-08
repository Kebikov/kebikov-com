import './pricePackageHeader.scss';
import { motion } from "framer-motion";

//= PricePackageHeader 
const PricePackageHeader = ({title, cash, description, arrParagraphs, pic, correction = false}) => {

    //* code 
    const itemsParagraphs = arrParagraphs.map((item, i) => {
        return(
            <Paragraphs title={item.title} subtitle={item.subtitle} number={i} key={i}/>
        )
    });

    const motionImg = {
        hidden: {
            x: 200,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    //* return 
    return(
        <>
            <div className="price-header">
                <div className="price-header__body">
                    <div className={correction ? "price-header__corection" : "price-header__img"}>
                        <motion.img
                            variants={motionImg}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{amount: 0.1, once: true}}
                            src={pic} alt="weddings"
                        />
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

    const advent = {
        hidden: {
            opacity: 0,
            scale: 0.7
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    }

    //* return 
    return(
        <motion.div 
            variants={advent}
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{amount: 0.1, once: true}}
            className="paragraphs"
        >
            <div className="paragraphs__body">
                <div className="paragraphs__number">{`0${number + 1}`}</div>
                <div className="paragraphs__info">
                    <span>{title}</span>{subtitle}
                </div>
            </div>
        </motion.div>
    )
}

export default PricePackageHeader;