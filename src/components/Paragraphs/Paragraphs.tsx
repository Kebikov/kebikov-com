import { motion } from "framer-motion";
import './paragraphs.scss';
import { FC } from 'react';


interface IParagraphs {
    title: string;
    subtitle: string;
    number: number;
}


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
                <div className="paragraphs__number">
                    {`0${number + 1}`}
                </div>
                <div className="paragraphs__info">
                    <span>{title}</span>{subtitle}
                </div>
            </div>
        </motion.div>
    )
}

export default Paragraphs;