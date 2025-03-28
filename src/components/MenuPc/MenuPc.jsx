import '../Header/header.scss';
import LinkMenu from '../LinkMenu/LinkMenu';
import { useDispatch } from 'react-redux';
import { setActiveMenu } from '../../redux/slice/indexSlice';
import logoImg from '../../resources/images/header/1.jpg';
import menuData from '../../data/DataLinks';
import { useAppDispatch } from '../../redux/store/hooks';
import { NavLink } from 'react-router-dom';


/**
 * Element.JSX Menu PC.
 * @example <MenuPc/>
 */

const MenuPc = () => {

    const dispatch = useAppDispatch();

    const onBurgerFalse = () => {
        dispatch(setActiveMenu(false));
    }

    return(
        <div className="heder-pc">
            <div className="heder-pc__body">
                <ul className="heder-pc__left">
                    <LinkMenu data={menuData.main} action={onBurgerFalse} classLi={'heder-pc__line'} classActive={'heder-pc__link'} />
                    <LinkMenu data={menuData.weddings} action={onBurgerFalse} classLi={'heder-pc__line'} classActive={'heder-pc__link'} />
                    <LinkMenu data={menuData.articles} action={onBurgerFalse} classLi={'heder-pc__line'} classActive={'heder-pc__link'} />
                    <LinkMenu data={menuData.aboutMe} action={onBurgerFalse} classLi={'heder-pc__line'} classActive={'heder-pc__link'} />
                </ul>
                <NavLink to={'/'} className="heder-pc__logo">
                    <img src={logoImg} alt="my_alt" height="80" width="153"/>
                </NavLink>
                <ul className="heder-pc__right">
                    <LinkMenu data={menuData.reviews} action={onBurgerFalse} classLi={'heder-pc__line'} classActive={'heder-pc__link'} />
                    <LinkMenu data={menuData.praice} action={onBurgerFalse} classLi={'heder-pc__line'} classActive={'heder-pc__link'} />
                    <LinkMenu data={menuData.contacts} action={onBurgerFalse} classLi={'heder-pc__line'} classActive={'heder-pc__link'} />
                </ul>
            </div>
        </div>
    )
}


export default MenuPc;