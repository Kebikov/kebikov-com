const useHelperLazyLoad = () => {

    const entryCall = (entryAll, observer) => {
        entryAll.forEach(item => {
            if(item.isIntersecting) {
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

    const option = {rootMargin: '200px 0px 200px 0px'};

    return {entryCall, option}
}

export default useHelperLazyLoad;