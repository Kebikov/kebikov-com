export const getDelayFnc = (fnc: (value: number) => void, time: number) => {
    let timeout: NodeJS.Timeout;

    const delay = (value: number) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fnc(value);
            console.log('Hi');
        }, time);
    }

    return {
        delay
    }
} 