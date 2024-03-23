import './header.scss';
import { useSelector } from 'react-redux';
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuPc from '../MenuPc/MenuPc';


const Header = () => {
    console.log('Header');
    const lineHeader = useSelector(state => state.lineHeader);

    return(
        <header className="header">
            <MenuPc/>
            <MenuMobile/>
            {lineHeader ? <div className="header__bottom-line"/> : null}
        </header>
    )
}


export default Header;



