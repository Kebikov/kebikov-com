import { FC } from "react";
import { ReactNode } from "react";


interface INoWrap {
    children: ReactNode;
}

const NoWrap: FC<INoWrap> = ({children}) => {
    return (
        <span style={{whiteSpace: 'nowrap'}} >{children}</span>
    )
}

export default NoWrap;