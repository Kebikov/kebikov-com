import './map.scss';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { useAppSelector } from '@/redux/store/hooks';


const GoogleMap = () => {

    const [isShow, setIsShow] = useState<boolean>(false);

    const theme = useAppSelector(state => state.indexSlice.theme);

    const position = {lat: 53.85612085334962, lng: 27.434687876986168};

    const mapLoaded = () => {
        if(!isShow) setIsShow(true);
    }

    
    return(
        <div className="googleMap">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string} >
                <Map 
                    style={{
                        transition: 'opacity 1s ease',
                        opacity: isShow ? 1 : 0
                    }}
                    defaultCenter={position} 
                    defaultZoom={14} 
                    mapId="e6de11d9e7dc0174" 
                    colorScheme={theme === 'dark' ? 'DARK' : 'LIGHT'} 
                    mapTypeControl={false}
                    streetViewControl={false}
                    cameraControl={false}
                    onTilesLoaded={mapLoaded}
                >
                    <AdvancedMarker position={position} />
                </Map>
            </APIProvider>
        </div>
    )
}

export default GoogleMap;