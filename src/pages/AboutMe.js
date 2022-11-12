import HederArticles from "../components/HederArticles/HederArticles";
import me from '../resources/images/about/1000.jpg';
import { useEffect } from "react";
import './scss/about.scss';
import FormContact from "../components/FormContact/FormContact";

const AboutMe = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const text = 'Привет, меня зовут Евгений — предлагаю услуги по свадебной фотосъемке на всей территории Беларуси, да чего уж там, ради любимой работы, готов сорваться в любую точку мира.\n\nДобрый и позитивный творческий персонаж: фотограф и просто хороший человек, встал на путь свадебного кунг-фу фото в 2010-ом году и смело шагаю вперед, совершенствуя мастерство) Стараюсь быть не просто фотографом, но и другом,что-бы вы чувствовали себя комфортно во время съемки, я понимаю как важен для вас день свадьбы и стараюсь сделать память об этом дне не забываемым.\n\nУ меня на сайте нет фотографий с мастер-классов других фотографов, нет фотографий с воркшопов, нет съемок с нанятыми моделями, все фотографии только с реальными парами, сделанные на реальных свадьбах.\n\nПоверьте, мы будем с вами на одной волне, фотосессия пройдет в непринужденной обстановке и с хорошим настроением.\n\nКрепко обнимаю, жду вашего звонка !';

    return(
        <>
            <HederArticles title={'Кратко обо мне.'}/>
            <div className="about">
                <div className="about__body">
                    <div className="about__pic">
                        <img src={me} alt="me"/>
                    </div>
                    <div className="about__text">{text}</div>
                </div>
            </div>
            <FormContact color={'#fff'}/>
        </>
    )
}

export default AboutMe;

