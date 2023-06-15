import { useState, useEffect } from "react";

function useDeviceType() {
    const [deviceType, setDeviceType] = useState('');

    useEffect(() => {
        const userAgent = navigator.userAgent;

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
            setDeviceType("mobile");
          } else if (/iPad/i.test(userAgent)) {
            setDeviceType("tablet");
          } else {
            setDeviceType("desktop");
          }
          
    }, []);

    return deviceType;
}

export default useDeviceType;