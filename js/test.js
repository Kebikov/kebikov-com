

function splice (x, y, fold) {
    let strFold = fold;
    let strSum = '';
    let num = 0;
    for(let i = x; i <= y; i++) {
        num++;
        let string = `\n<picture>\n    <source src="/img/main/gallery/box.png" data-srcset="img/weddings/${strFold}/${num}.webp" type="image/webp">\n    <img class="lazy" src="/img/main/gallery/box.png" data-src="img/weddings/${strFold}/${num}.jpg" alt="my_alt">\n</picture>`;
        strSum = strSum + string;
    }
    return strSum;
}




console.log(splice(1,40,'GD'));