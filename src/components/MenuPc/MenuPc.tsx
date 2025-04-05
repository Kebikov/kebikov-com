import '../Header/header.scss';
import LinkMenu from '../LinkMenu/LinkMenu';
import logoWhite from '@image/logo/logo-white.png';
import logoBlack from '@image/logo/logo-black.png';
import menuData from '../../data/DataLinks';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '@/redux/store/hooks';


const MenuPc = () => {

    const currentTheme = useAppSelector(state => state.indexSlice.theme);

    return(
        <div className="heder-pc">
            <div className="heder-pc__body">
                <ul className="heder-pc__left">
                    <LinkMenu data={menuData.main} />
                    <LinkMenu data={menuData.weddings} />
                    <LinkMenu data={menuData.articles} />
                    <LinkMenu data={menuData.aboutMe} />
                </ul>
                <NavLink to={'/'} className="heder-pc__logo">
                    <img src={currentTheme === "dark" ? logoWhite : logoBlack} alt="my_alt" height="80" width="153"/>
                </NavLink>
                <ul className="heder-pc__right">
                    <LinkMenu data={menuData.reviews} />
                    <LinkMenu data={menuData.praice} />
                    <LinkMenu data={menuData.contacts} />
                </ul>
            </div>
        </div>
    )
}


export default MenuPc;