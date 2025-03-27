import { useWindowSize } from 'react-use';
import { CSSProperties } from 'react';

const Size = () => {

    const {width, height} = useWindowSize();

    return(
        <div style={style} >{`width: ${width}, height: ${height}`}</div>
    )
}

const style: CSSProperties = {
    position: 'fixed',
    zIndex: 10000,
    top: '10px',
    left: '10px',

    fontSize: '30px'
}

export default Size;