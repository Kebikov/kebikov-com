import './map.scss';
import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useAppSelector } from '@/redux/store/hooks';


const GoogleMap = () => {

    const theme = useAppSelector(state => state.indexSlice.theme);

    const position = {lat: 53.85612085334962, lng: 27.434687876986168};

    
    return(
        <div className="googleMap">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string} >
                <Map 
                    defaultCenter={position} 
                    defaultZoom={14} 
                    mapId="e6de11d9e7dc0174" 
                    colorScheme={theme === 'dark' ? 'DARK' : 'LIGHT'} 
                    mapTypeControl={false}
                    streetViewControl={false}
                    cameraControl={false}
                    
                >
                    <AdvancedMarker position={position} />
                </Map>
            </APIProvider>
        </div>
    )
}

export default GoogleMap;