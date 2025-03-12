
const usehelpPassAllImg = (context, only = 2) => {
    
    function importAll(context) {
        let images = {};
        context.keys().forEach((item) => { 
            if(typeof item === 'string' && item.startsWith('./')) {
                images[item.replace('./', '')] = context(item);
            }
        });
        return images
    }
    const images = importAll(context);

    function allImg () {
        const arrImg = [];
        let arrJpgAndWebP = [];
        let lengthArr = Object.keys(images).length / only;

        for(let i = 1; i <= lengthArr; i++) {
            arrJpgAndWebP.push(images[`${i}.jpg`]);
            arrJpgAndWebP.push(images[`${i}.webp`]);
            arrImg.push(arrJpgAndWebP);
            arrJpgAndWebP = [];
        }
        return arrImg;
    }

    return allImg();
}

export default usehelpPassAllImg;





