import './header.scss';
import MenuMobile from '../MenuMobile/MenuMobile';
import MenuPc from '../MenuPc/MenuPc';
import { useAppSelector } from '@/redux/store/hooks';


const Header = () => {

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

{/* <header className="header">
    <div className='heder-pc' ></div>
    <div className='burger' ></div>
</header>

.header{
    position: relative;
    z-index: 100;
}

.heder-pc {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 4;
}

.burger {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 112px;
    left: 20px;
    z-index: 2;
} */}