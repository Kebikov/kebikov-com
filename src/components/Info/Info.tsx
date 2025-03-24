import { FC } from "react"
import { matchSlashDot } from "@/helper/matchSlashDot";


interface IInfo {
    name?: string;
    match: boolean;
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