import { useWindowSize } from 'react-use';
import { useState, useEffect } from 'react';
import { UAParser } from 'ua-parser-js';


interface IuseFontSize {
    minSize: number;
    maxSize: number;
    maxWidth: number;
    minWidth: number;
}


const useFontSize = ({
    minSize,
    maxSize,
    maxWidth,
    minWidth
}: IuseFontSize) => {

    const [size, setSize] = useState<number>();

    const parser = new UAParser();
    const result = parser.getResult();

    const nameOS = result.os.name;
    const scaleOS = nameOS === 'IOS' || nameOS === 'iOS' ? 1.06 : 1;

    let { width } = useWindowSize();

    useEffect(() => {
        let calcSize = (maxSize + (maxSize - minSize) * (width - maxWidth) / (maxWidth - minWidth)) * scaleOS;
        if(width > maxWidth) calcSize = maxSize * scaleOS;
        if(width < minWidth) calcSize = minSize * scaleOS;

        setSize(calcSize);
    }, [width, scaleOS, minSize, maxSize, maxWidth, minWidth]);


    return {
        size, 
        scaleOS,
        nameOS
    }
}


export default useFontSize;