import '../Header/header.scss';
import LinkMenu from "../LinkMenu/LinkMenu";
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_MENU } from '../../redux/slice/indexSlice';
import menuData from '../../data/DataLinks';
import { useAppSelector } from '@/redux/store/hooks';
import ToggleTheme from '../ToggleTheme/ToggleTheme';
import Burger from '@/components/Burger/Burger';


const MenuMobile = () => {

    const activeMenu = useAppSelector(state => state.indexSlice.activeMenu);
    const dispatch = useDispatch();

    const onBurger = () => dispatch(SET_ACTIVE_MENU(!activeMenu));

    const ButtonClear = () => (
        <button 
            style={{
                width: '100px',
                height: '50px',
                background: 'red',
                fontSize: '20px'
            }}
            onClick={() => {
                localStorage.clear();
                alert('Память очишена.')
            }}
        >
            clear
        </button>
    )

    return(
        <>
            <Burger activeMenu={activeMenu} onClick={onBurger} />
            <div className={activeMenu ? "menu-mob active" : "menu-mob"}>
                <ul className="menu-mob__list">
                    <div className="menu-mob__close" onClick={onBurger}></div>
                    <LinkMenu data={menuData.main} mobile />
                    <LinkMenu data={menuData.weddings} mobile />
                    <LinkMenu data={menuData.articles} mobile />
                    <LinkMenu data={menuData.aboutMe} mobile />
                    <LinkMenu data={menuData.reviews} mobile />
                    <LinkMenu data={menuData.praice} mobile />
                    <LinkMenu data={menuData.contacts} mobile />
                </ul>
                <ToggleTheme/>

                {
                    process.env.NODE_ENV === 'development' ?
                    <ButtonClear/>
                    :
                    null
                }
                
            </div>
        </>
    )
}

export default MenuMobile;