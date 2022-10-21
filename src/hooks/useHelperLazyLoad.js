const useHelperLazyLoad = () => {

    const entryCall = (entryAll, observer) => {
        let i = 0;
        entryAll.forEach(item => {
            if(item.isIntersecting) {
                i++;
                console.log('i',i);
                const img =  item.target.querySelector('img');
                const source = item.target.querySelector('source');
                img.src = img.dataset.src;
                source.srcset = source.dataset.srcset;
                img.onload = () => {
                    item.target.className = 'loading-img';
                    img.removeAttribute('height');
                    img.removeAttribute('width');
                }
                observer.unobserve(item.target);
            }
        })
    }

    return {entryCall}
}

export default useHelperLazyLoad;