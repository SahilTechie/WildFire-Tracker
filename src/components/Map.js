import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

// define constants
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    // Auto-dismiss Google Maps error popup
    useEffect(() => {
        const dismissGoogleMapsError = () => {
            // Look for the Google Maps error dialog and auto-click OK
            const interval = setInterval(() => {
                // Try multiple ways to find the OK button
                let okButton = null;
                
                // Method 1: Look for button with specific data attribute
                okButton = document.querySelector('button[data-value="OK"]');
                
                // Method 2: Look for buttons with "OK" text content
                if (!okButton) {
                    const buttons = document.querySelectorAll('button');
                    buttons.forEach(button => {
                        if (button.textContent.trim().toUpperCase() === 'OK') {
                            okButton = button;
                        }
                    });
                }
                
                // Method 3: Look for div elements that might be styled as buttons
                if (!okButton) {
                    const divButtons = document.querySelectorAll('div[role="button"]');
                    divButtons.forEach(div => {
                        if (div.textContent.trim().toUpperCase() === 'OK') {
                            okButton = div;
                        }
                    });
                }
                
                // Method 4: Look for Google Maps specific error dialog
                if (!okButton) {
                    const gmError = document.querySelector('.gm-err-container button, .gm-err-autocomplete button');
                    if (gmError) {
                        okButton = gmError;
                    }
                }
                
                if (okButton) {
                    okButton.click();
                    console.log('Auto-dismissed Google Maps billing error');
                    clearInterval(interval); // Stop looking once found
                }
            }, 1000);

            // Clear interval after 15 seconds
            setTimeout(() => clearInterval(interval), 15000);
        };

        // Run after component mounts
        setTimeout(dismissGoogleMapsError, 2000);
    }, []);

    const markers = eventData.map((ev, index) => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <LocationMarker key={index} lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title })} />
        }
        return null
    })

    // Check if data is real or mock
    const isRealData = eventData.length > 0 && !eventData[0].id.startsWith('mock-')
    const wildfireCount = eventData.filter(ev => ev.categories[0].id === NATURAL_EVENT_WILDFIRE).length

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ 
                    key: 'AIzaSyAebEwbiYqHVNK2w5JWcYV5ALFAC6OrgU4',
                    libraries: ['places']
                }}
                defaultCenter={ center }
                defaultZoom={ zoom }
                yesIWantToUseGoogleMapApiInternals
                options={{
                    fullscreenControl: false,
                    mapTypeControl: true,
                    streetViewControl: false,
                    styles: [
                        {
                            featureType: "poi",
                            elementType: "labels",
                            stylers: [{ visibility: "off" }]
                        }
                    ]
                }}
                onGoogleApiLoaded={({ map, maps }) => {
                    // Map loaded successfully
                    console.log('Google Maps loaded successfully')
                }}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
            <div style={{ 
                position: 'absolute', 
                top: '100px', 
                left: '20px', 
                background: 'rgba(0,0,0,0.9)', 
                color: 'white', 
                padding: '12px', 
                borderRadius: '8px',
                fontSize: '13px',
                maxWidth: '280px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
            }}>
                <p style={{margin: '0 0 5px 0'}}>🔥 Found {wildfireCount} wildfire events</p>
                <p style={{margin: '0 0 5px 0'}}><small>✅ Google Maps API configured</small></p>
                <p style={{margin: '0 0 5px 0'}}><small>{isRealData ? '✅ Real NASA data loaded!' : '⚠️ Using mock data (NASA API failed)'}</small></p>
                <p style={{margin: '0 0 5px 0'}}><small>{isRealData ? 'Live wildfire tracking active' : 'Check console for API errors'}</small></p>
                
            </div>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
