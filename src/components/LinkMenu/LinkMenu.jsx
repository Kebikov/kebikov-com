import { NavLink } from 'react-router-dom';

/**
 * Object of information.
 * @typedef {Object} TMenuItem
 * @property {string} path Path for passing on page.
 * @property {string} title Title for page.
 */

/**
 * @typedef {Object} TLinkMenu
 * @property {TMenuItem} data Object of information.
 * @property {Function} action Pressing action.
 * @property {string} classLi Parent element class.
 * @property {string} classActive Link element class.
 */

/**
 * Element.JSX as link in menu.
 * - `data` Object of information.
 * - `action` Pressing action.
 * - `classLi` Parent element class.
 * - `classActive` Link element class.
 * @param {TLinkMenu}  
 * @example <LinkMenu data={#} action={#} classLi={#} classActive={#} />
 */

const LinkMenu = ({data, action, classLi, classActive}) => {
    
    const end = data.path === '/' ? true : false;

    return(
        <li className={classLi}>
            {
                end ? 
                <NavLink end to={data.path} onClick={action} className={( ({isActive}) => (isActive ? `${classActive} activeLink` : classActive) )}>
                    {data.title}
                </NavLink> 
                : 
                <NavLink to={data.path} onClick={action} className={( ({isActive}) => (isActive ? `${classActive} activeLink` : classActive) )}>
                    {data.title}
                </NavLink>
            }
        </li>
    )
}


export default LinkMenu;