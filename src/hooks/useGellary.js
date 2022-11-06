function useGellary (div) {
    
    const effect = () => {
        const element = document.querySelector(div);
        const kidsTotal = element.childElementCount;
        console.log('e',element);
        console.log('co', kidsTotal);
    }
    
    return {effect}
}

export default useGellary;