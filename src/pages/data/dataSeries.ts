import { TSeries } from "@/data/dataWeddingSeries/types";

export interface InameSeries {
     /** `Титульное название.` */
    title: string;
     /** `Сокрашение для ссылки. Например: "MY"` */
    link: TSeries;
}


const nameSeries: InameSeries[] = [
    {
        title: 'Максим & Юля', 
        link: 'MY'
    }, 
    {
        title: 'Паша & Таня', 
        link: 'PT'
    }, 
    {
        title: 'Дима & Алина', 
        link: 'DA'
    }, 
    {
        title: 'Саша & Юля', 
        link: 'SY'
    }, 
    {
        title: 'Дима & Ксюша', 
        link: 'DK'
    }, 
    {
        title: 'Саша & Даша', 
        link: 'SD'
    }, 
    {
        title: 'Саша & Люда', 
        link: 'SL'
    },
    {
        title: 'Никита & Катя', 
        link: 'NK'
    }, 
    {
        title: 'Женя & Даша', 
        link: 'JD'
    }
];

export default nameSeries;