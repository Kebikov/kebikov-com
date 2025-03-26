import './pricePackageHeader.scss';
import { motion } from "framer-motion";
import type { IArrParagraphs } from '../../data/dataPrice';
import type { IImageWedding } from '../../data/image/weddings/types';
import { FC } from 'react';

const Line = () => (
    <div className="price-line" />
);

interface IPricePackageHeader {
    title: string;
    cash: string;
    description: string;
    arrParagraphs: IArrParagraphs[];
    pic: IImageWedding;
    correction?: boolean;
}


//= PricePackageHeader 
const PricePackageHeader: FC<IPricePackageHeader> = ({
    title, 
    cash, 
    description, 
    arrParagraphs, 
    pic, 
    correction = false
}) => {

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

    return(
        <>
            <div className="price-header">
                <div className="price-header__body">
                    <div className={correction ? "price-header__corection" : "price-header__img"}>
                        <motion.picture
                            variants={motionImg}
                            initial={'hidden'}
                            whileInView={'visible'}
                            viewport={{amount: 0.1, once: true}}
                        >
                                {pic.avif_mobile ? <source srcSet={pic.avif_mobile} type="image/avif" media="(max-width: 767px)" /> : null}
                                {pic.webp_mobile ? <source srcSet={pic.webp_mobile} type="image/webp" media="(max-width: 767px)" /> : null}
                                {pic.jpg_mobile ? <source srcSet={pic.jpg_mobile} type="image/jpeg" media="(max-width: 767px)" /> : null}
                                {pic.avif ? <source srcSet={pic.avif} type="image/avif"/> : null}
                                {pic.webp ? <source srcSet={pic.webp} type="image/webp"/> : null}
                                <img src={pic.jpg} alt="свадебная фотография"/>
                        </motion.picture>
                    </div>
                    <div className="price-header__tape">
                        <h2 className='price-header__h2' >пакет свадебной съемки</h2>
                        <Line/>
                        <div className="price-header__title">{title}</div>
                        <Line/>
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

interface IParagraphs {
    title: string;
    subtitle: string;
    number: number;
}

//= Paragraphs 
const Paragraphs: FC<IParagraphs> = ({
    title, 
    subtitle, 
    number
}) => {

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