import HederArticles from "../components/HederArticles/HederArticles";
import me from '../resources/images/about/1000.jpg';
import { useEffect } from "react";
import './scss/about.scss';
import FormContact from "../components/FormContact/FormContact";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AboutMe = ({setLineHeader}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        setLineHeader(false);
        return() => {
            setLineHeader(true);
        }
    },[]);


    //* code 
    const text = 'Привет, меня зовут Евгений — предлагаю услуги по свадебной фотосъемке на всей территории Беларуси, да чего уж там, ради любимой работы, готов сорваться в любую точку мира.\n\nДобрый и позитивный творческий персонаж: фотограф и просто хороший человек, встал на путь свадебного кунг-фу фото в 2010-ом году и смело шагаю вперед, совершенствуя мастерство) Стараюсь быть не просто фотографом, но и другом,что-бы вы чувствовали себя комфортно во время съемки, я понимаю как важен для вас день свадьбы и стараюсь сделать память об этом дне не забываемым.\n\nУ меня на сайте нет фотографий с мастер-классов других фотографов, нет фотографий с воркшопов, нет съемок с нанятыми моделями, все фотографии только с реальными парами, сделанные на реальных свадьбах.\n\nПоверьте, мы будем с вами на одной волне, фотосессия пройдет в непринужденной обстановке и с хорошим настроением.\n\nКрепко обнимаю, жду вашего звонка !';

    const motionImg = {
        hidden: {
            x: -500,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 1
            }
        }
    }

    const motionText = {
        hidden: {
            x: 500,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1
            }
        }
    }

    //* return 
    return(
        <>
            <Helmet>
                <title>Краткая информация обо мне</title>
                <meta
                    name="description"
                    content="Обо мне, на странице краткая информация, познакомитесь со мной чуть лучше, после прочтения, часть вопросов станет для вас яснее.Заходим !"
                />
                <link rel="canonical" href="https://kebikov.com/about-me"/>
            </Helmet>

            <HederArticles title={'Кратко обо мне'}/>
            <div className="container">
                <div className="about">
                    <div className="about__body">
                        <div className="about__pic">
                            <motion.img 
                                variants={motionImg}
                                initial={'hidden'}
                                animate={'visible'}
                                viewport={{once: true}}
                                src={me} alt="me"
                            />
                        </div>
                        <motion.div
                            variants={motionText}
                            initial={'hidden'}
                            animate={'visible'}
                            className="about__text">
                            {text}
                        </motion.div>
                    </div>
                </div>
                <FormContact color={'#fff'}/>
            </div>
        </>
    )
}

export default AboutMe;

