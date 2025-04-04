import { NavLink } from 'react-router-dom';
import { TMenuData } from '@/data/DataLinks';
import { FC } from 'react';
import { useAppDispatch } from '@/redux/store/hooks';
import { SET_ACTIVE_MENU } from '@/redux/slice/indexSlice';


interface ILinkMenu {
    data: TMenuData[string]; 
    mobile?: boolean;
}

const LinkMenu: FC<ILinkMenu> = ({
    data,
    mobile = false
}) => {

    const dispatch = useAppDispatch();

    const onClick = () => dispatch(SET_ACTIVE_MENU(false));

    const classLi = mobile ? 'menu-mob__line' : 'heder-pc__line';
    const classNavLink = mobile ? 'menu-mob__link' : 'heder-pc__link';

    return(
        <li className={classLi}>
            <NavLink 
                end={data.path === '/'} 
                to={data.path} 
                onClick={onClick} 
                className={({isActive}) => (isActive ? `${classNavLink} activeLink` : classNavLink)}
            >
                <p>
                    {data.title}
                </p>
            </NavLink> 
        </li>
    )
}


export default LinkMenu;