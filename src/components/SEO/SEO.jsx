
import {Helmet} from 'react-helmet';

/**
 * @typedef {Object} Propse
 * @property {string} url Url страницы.
 * @property {string} title Title страницы.
 * @property {string} description Description страницы.
 * @property {string} img Img для страницы.
 */

/**
 * Для SEO оптимизации сайта. 
 * - Добавляем в самый верх компонента страницы.
 * @component
 * @param {Propse}
 * @example <SEO url="#" title="#" description="#" img="#"/>
 * @returns {import('@babel/types').JSXElement}
 */
const SEO = ({url, title, description, img}) => {
    return(
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
        </Helmet>
    )
}

export default SEO;