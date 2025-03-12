import '../Header/header.scss';
import LinkMenu from "../LinkMenu/LinkMenu";
import { useDispatch } from 'react-redux';
import { setActiveMenu } from '../../redux/slice/indexSlice';
import menuData from '../../data/DataLinks';
import { useAppSelector } from '@/redux/store/hooks';


const MenuMobile = () => {

    const activeMenu = useAppSelector(state => state.indexSlice.activeMenu);
    const dispatch = useDispatch();

    const onBurger = () => {
        dispatch(setActiveMenu(!activeMenu));
    }

    const onBurgerFalse = () => {
        dispatch(setActiveMenu(false));
    }

    return(
        <>
            <div className={activeMenu ? "burger active" : "burger"}>
                <div className={activeMenu ? "burger__body active" : "burger__body"} onClick={onBurger}>
                    <div className="burger__line"></div>
                </div>
            </div>
            <div className={activeMenu ? "menu-mob active" : "menu-mob"}>
                <ul className="menu-mob__list">
                    <div className="menu-mob__close" onClick={onBurger}></div>
                    <LinkMenu data={menuData.main} action={onBurgerFalse} classLi={'menu-mob__line'} classActive={'menu-mob__link'} />
                    <LinkMenu data={menuData.weddings} action={onBurgerFalse} classLi={'menu-mob__line'} classActive={'menu-mob__link'} />
                    <LinkMenu data={menuData.articles} action={onBurgerFalse} classLi={'menu-mob__line'} classActive={'menu-mob__link'} />
                    <LinkMenu data={menuData.aboutMe} action={onBurgerFalse} classLi={'menu-mob__line'} classActive={'menu-mob__link'} />
                    <LinkMenu data={menuData.reviews} action={onBurgerFalse} classLi={'menu-mob__line'} classActive={'menu-mob__link'} />
                    <LinkMenu data={menuData.praice} action={onBurgerFalse} classLi={'menu-mob__line'} classActive={'menu-mob__link'} />
                    <LinkMenu data={menuData.contacts} action={onBurgerFalse} classLi={'menu-mob__line'} classActive={'menu-mob__link'} />
                </ul>
            </div>
        </>
    )
}

export default MenuMobile;