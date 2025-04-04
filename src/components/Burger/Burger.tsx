import { FC } from "react";


interface IBurger {
    activeMenu: boolean;
    onClick: () => void;
}


const Burger: FC<IBurger> = ({
    activeMenu,
    onClick
}) => {
    return(
        <div className={activeMenu ? "burger active" : "burger"}>
            <div className={activeMenu ? "burger__body active" : "burger__body"} onClick={onClick}>
                <div className="burger__line"></div>
            </div>
        </div>
    )
}

export default Burger;