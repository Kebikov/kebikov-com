import { FC } from "react"


interface IInfo {
    name?: string;
    match: boolean;
}


/**
 * `Извлекает данные со строки, между "/" и "."`
 *  @example
 * - из "/static/media/30.556f8b48d60a9e400bc2.jpg"
 * - получим "30"
 */
export const matchSlashDot = (str: string | undefined) => {
    return typeof str === 'string' ? String(str.match(/(?<=\/)\d+(?=\.)/gi)) : undefined;
}


const Info: FC<IInfo> = ({
    name,
    match = false
}) => {

    const InfoElement = () => (
        <div style={{
            position: 'absolute',
            zIndex: '2',
            top: '10px',
            right: '10px',
            color: '#000',
            fontSize: '24px',
            backgroundColor: '#fff'
        }}>
            {
                match ? matchSlashDot(name)
                :
                name
            }
        </div>
    );

    return(
        <>
            {
                typeof name === 'string' ?
                <InfoElement/>
                :
                undefined
            }
        </>

    )
};


export default Info;