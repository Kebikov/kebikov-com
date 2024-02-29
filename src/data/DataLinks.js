//@ts-check
// Если вам нужен адекватный сотрудник который легко вольется в команду, готовый к обучению.
/**
 * Object of information.
 * @typedef {Object} TMenuItem
 * @property {string} path Path for passing on page.
 * @property {string} title Title for page.
 */

/**
 * @typedef {Object} TMenuData
 * @property {TMenuItem} main Object of information for page 'main'.
 * @property {TMenuItem} weddings Object of information for page 'weddings'.
 * @property {TMenuItem} articles Object of information for page 'articles'.
 * @property {TMenuItem} aboutMe Object of information for page 'aboutMe'.
 * @property {TMenuItem} reviews Object of information for page 'reviews'.
 * @property {TMenuItem} praice Object of information for page 'praice'.
 * @property {TMenuItem} contacts Object of information for page 'contacts'.
 */

/**
 * Object of objects, containing information for page.
 * @type {TMenuData}
 */
const menuData = {
    main: {
        path: '/',
        title: 'Главная'
    },
    weddings: {
        path: 'weddings-all',
        title: 'Свадебные серии',
    },
    articles: {
        path: 'articles',
        title: 'Статьи'
    },
    aboutMe: {
        path: 'about-me',
        title: 'Обо мне'
    },
    reviews: {
        path: 'reviews',
        title: 'Отзывы клиентов'
    },
    praice: {
        path: 'price-packages',
        title: 'Пакеты услуг'
    },
    contacts: {
        path: 'contacts',
        title: 'Контакты'
    }
};


export default menuData;

