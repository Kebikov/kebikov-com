import './header.scss';
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuPc from '../MenuPc/MenuPc';
import { useAppSelector } from '@/redux/store/hooks';


const Header = () => {
    console.log('Header');
    const lineHeader = useAppSelector(state => state.indexSlice.lineHeader);

    return(
        <header className="header">
            <MenuPc/>
            <MenuMobile/>
            {lineHeader ? <div className="header__bottom-line"/> : null}
        </header>
    )
}


export default Header;



