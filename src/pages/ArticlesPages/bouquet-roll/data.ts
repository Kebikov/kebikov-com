import { IMG_numbers as num } from '@/data/image/numbers';
import { IMG_bouquet_roll as image } from '@/data/image/articles/bouquet-roll';
import { IDataForFinaleBox } from '../perfect-wedding-photo-session/PerfectWeddingPhotoSession';


export const data: IDataForFinaleBox[] = [
    {
        title: 'Юла',
        text: 'Как оказалось, тот вариант, что мы считаем классикой, отличается от оригинала. В традиционном понимании, невеста становится спиной к подружкам и начинает кружится, делая три оборота по часовой стрелке с закрытыми глазами и после кидает букет. Девушка поймавшая букет, выбирает самый красивый цветок и оставляет себе. Сам же букет остается у невесты, считается что так невеста делится своим счастьем с подружкой. Невеста может свой букет засушить и оставить на память о радостном дне.',
        img: [num[1], image[0]]
    },
    {
        title: 'Свадебная рулетка',
        text: 'Суть в чем, подружки становятся в круг, с невестой в центре. Все начинают кружится, невеста с закрытыми глазами по часовой, а хоровод подружек против часовой стрелки. И посчитав до 10, невеста протягивает букет, получается как рулетка в казино.',
        img: [num[2], image[1]]
    },
    {
        title: 'Всем поровну',
        text: 'Все не замужние подружки, выходят в центр банкетного зала. Невеста распускает свадебный букет и дарит каждой подружке по цветку, даря всем частичку своего счастья. В этом варианте останутся довольны все.',
        img: [num[3], image[2]]
    },
    {
        title: 'Испытание временем',
        text: 'Накануне свадьбы, напишите на подошве свадебных туфель, имена не замужних подруг. В течении дня, часть имен сотрется вовсе, а от некоторых останется лишь часть. Посмотрите в конце дня, какое имя лучше всего сохранилось. Вот вам и победитель, кому дарить букет.',
        img:  [num[4], image[3]]
    },
    {
        title: 'Счастливое пирожное',
        text: 'Надо еще при заказе свадебного торта, заказать пирожные, в количестве равным не замужним подругам. И в одно из пирожных положить колечко. На банкете попросить подружек выйти в цент банкетного зала и взять по одному пирожному, как вы поняли кто найдет колечко, той и достанется букет.',
        img: [num[5], image[4]]
    },
    {
        title: 'Ленточка',
        text: 'К букету невесты привязывается ленточка длинной 1.8-2.5 метра, остальные ленточки просто зажимаются рукой к букету, так чтобы не было понятно какая именно лента привязана к букету. Общее количество ленточек должно быть равно количеству не замужних подруг. Каждая не замужняя девушка берет по одному концу ленты и по сигналу тянет на себя, счастливица с привязанной ленточкой получает букет невесты.',
        img: [num[6], image[5]]
    },
    {
        title: 'Замочек',
        text: 'Надо заранее найти сундучок или ларец, для эффектности обмотать цепями и повесить замок. Более простой вариант, прикрепить к букету невесты замочек. Разложить перед подружками ключи, пусть сами решают какой нравится больше, кто замочек откроет той и достанется букет.',
        img: [num[7], image[6]]
    },
    {
        title: 'Свадебный квест',
        text: 'Продумайте с ведущим конкурсы и задания, при выполнении которых подружки будут собирать очки. Это придаст дополнительную мотивацию для активного участия в конкурсах. Набравшая больше всего балов получит «супер приз»- букет невесты.',
        img: [num[8], image[7]]
    }
]