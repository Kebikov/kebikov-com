import {Helmet} from 'react-helmet';
import { FC } from 'react';


interface ISEO {
     /** `Url страницы.` */
    url: string; 
     /** `Title страницы.` */
    title: string;
     /** `Description страницы.` */
    description: string;
     /** `Img для страницы.` */
    img?: string;
}

/**
 * @component Для SEO оптимизации сайта. 
 * - Добавляем в самый верх компонента страницы.
 */
const SEO: FC<ISEO> = ({
    url, 
    title, 
    description, 
    img = 'https://kebikov.com/opengraph/kebikov.jpg'
}) => {
    
    return(
        <>
            <Helmet>
                <title>{title}</title>
                <meta
                    name="description"
                    content={description}
                />
                <meta property="og:type" content="website"/>
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={img} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={img} />
                <meta data-hid="property::og:site_name" property="og:site_name" content="KEBIKOV.COM"/>

                <link rel="canonical" href={url} />
            </Helmet>
        </>
    )
}


export default SEO;