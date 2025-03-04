import './headerImage.scss';


const Hello = () => (
    <div className='hello'>
        <div className='hello__hi'>ПРИВЕТ !</div>
        <h1 className='hello__I'>Я - Евгений - свадебный фотограф в Минске !</h1>
        <div className='hello__text'>Вот уже 10 лет я запечатлеваю самые искренние эмоции, счастливые улыбки и трепетные взгляды влюблённых.<br/>Для меня свадьба — это не просто событие, а настоящая магия момента, который должен остаться с вами навсегда.</div>
        <h2 className='hello__show'>На моем сайте все про свадебную съемку. Приятного просмотра.</h2>
    </div>
);


const MainImage = () => (
    <div className='header-image__box-img'>
        <picture>
            <source srcSet={require('../../resources/images/header-image/main-1920.webp')} type="image/webp" media="(max-width: 1500px)" />
            <source srcSet={require('../../resources/images/header-image/main-1920.jpg')} type="image/jpeg" media="(max-width: 1500px)" />
            <source srcSet={require('../../resources/images/header-image/main-2560.webp')} type="image/webp" />
            <img className="header-image__img" src={require('../../resources/images/header-image/main-2560.jpg')} alt="Свадебный фотограф в Минске" />
        </picture>
    </div>
)


const HeaderImage = () => {

    console.log(navigator.userAgent);
    console.log('67868');

    return(
        <div className='header-image' >
            <div style={{fontSize: '20px'}}>{navigator.userAgent}</div>
            {/* <div className='header-image__body'>
                <Hello/>
                <MainImage/>
            </div> */}
        </div>
    )
};


export default HeaderImage;