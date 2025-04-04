export type TMenuData = {
    [key in string]: {
        path: string,
        title: string
    }
}


const menuData: TMenuData = {
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

