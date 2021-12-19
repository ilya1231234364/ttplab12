import axios from 'axios';
import { useEffect, useState } from 'react';
import { Popup } from 'react-leaflet'
import { baseUrl } from '../utils/utils';
import MapItem from '../components/MapItem';

export default function MapPage(): any {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/users`)
            .then(({ data }) => {
                if (data) {
                    setData(data)
                }
            })

    }, [])

    const getPopUp = ({ urlPhoto, name, surname, team }: { urlPhoto: string, name: string, surname: string, team: { name: string, country: string } }) => {
        setTimeout(() => {
            document.querySelectorAll('.leaflet-marker-icon').forEach((el: any) => {
                el.src = 'motorbike.png'
            })
        }, 100)
        return (
            <Popup>
                <div className="pop-cont">
                    <img src={urlPhoto} alt={name} />
                    <span className="pop-name">
                        {name} {surname}
                    </span>
                    <p className="pop-description">
                        {team.name} ({team.country})
                    </p>
                </div>
            </Popup>
        )
    }
    return (
        <>
            <div id="map">
                <MapItem currPosition={[51.505, -1.0]} data={data} getPopUp={getPopUp} />
            </div>
        </>
    );


}


