import canadaMobile from '../images/locations/tablet/image-map-canada.png';
import canadaDesktop from '../images/locations/desktop/image-map-canada.png';
import australiaMobile from '../images/locations/tablet/image-map-australia.png';
import australiaDesktop from '../images/locations/desktop/image-map-australia.png';
import ukMobile from '../images/locations/tablet/image-map-uk.png';
import ukDesktop from '../images/locations/desktop/image-map-uk.png';

export const countries = [
    {
        images : {
            mobile : canadaMobile,
            desktop : canadaDesktop
        },
        name : 'Canada',
        officeName : 'Designo central Office',
        addressOne : '3886 Wellington Street',
        addressTwo : 'Toronto, Ontario M9C 3J5',
        phone : 'P : +1 253-863-8967',
        email : 'M : contact@designo.co'
    },
    {
        images : {
            mobile : australiaMobile,
            desktop : australiaDesktop
        },
        name : 'Australia',
        officeName : 'Designo AU Office',
        addressOne : '19 Balonne Street',
        addressTwo : 'New South Wales 2443',
        phone : 'P : (02) 6720 9092',
        email : 'M : contact@designo.au'
    },
    {
        images : {
            mobile : ukMobile,
            desktop : ukDesktop
        },
        name : 'United Kingdom',
        officeName : 'Designo UK office',
        addressOne : '13 Colorado Way',
        addressTwo : 'Rhyd-y-fro SA8 9GA',
        phone : 'P : 078 3115 1440',
        email : 'M : contact@designo.uk'
    }
]